import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import LowStockCard from './lowStockproductCrd/LowStockCard';
import { api } from '../../utils/api';


const ProductList = () => {

    const [products,setProducts]=useState<any>([])
    const getStockProducts =async()=>{
        try {
            const filter ={
                id : "66f056a50bad482510cde4bb"
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
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  
});

export default ProductList;
