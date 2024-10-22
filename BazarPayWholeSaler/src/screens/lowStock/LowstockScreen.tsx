import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import LowStockCard from './lowStockproductCrd/LowStockCard';
import { api } from '../../utils/api';
import AuthContext from '../../contexts/authContext/authContext';
import emptyImage from "../../../assets/images/empty.jpg"

const ProductList = () => {

  const {user}= useContext(AuthContext)

    const [products,setProducts]=useState<any>([])
    const getStockProducts =async()=>{
        try {
            const filter ={
                id : user?._id ||  "66f056a50bad482510cde4bb"
            }
            const response = await api.wholesalerListedProducts.getWholesalerStockListedProducts(filter)
            setProducts(response)
            console.log("response ===>",response[0])
        } catch (error) {
            
        }
    }
    useEffect(() => {
        getStockProducts()
    }, [])
    
  return (
    <ScrollView style={styles.container}>
      {
        products.length === 0 && 
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,marginTop:100}}>
            <Image style={{height:250,width:300}} source={emptyImage} />
            <Text style={{color:"gray",fontWeight:"600",fontSize:20}}>No product Listed</Text>
          </View>
        
      }
      {products.map((item: { id: React.Key | null | undefined; }) => (
        <View key={item.id}>
            <LowStockCard item={item} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  
});

export default ProductList;
