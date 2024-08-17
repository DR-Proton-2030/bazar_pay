import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AppHeader from '../../shared/commonHeader/CommonHeader';
import Colors from '../../../constants/Colors';
import { useRoute } from "@react-navigation/native";
import { api } from '../../../utils/api';
import WholesallerCard from '../../shared/wholesallerCard/WholesallerCard';
import BuyerOptionsCards from '../buyerOptions/buyerOptionsCards/BuyerOptionsCards';


const WholesalersList = () => {
  const route = useRoute();
  const { productId ,categoryName}: any = route.params;
  const [wholesalerProduct,setWholesalerProduct]= useState<any[]>([])
  const getWholesalerList = async () => {
    try {
      const filter = {
        productId: productId
      }
      console.log(productId)
      const result = await api.product.getWholesalerProductList(filter)
      console.log("listed wholesaler==========>", result)
      setWholesalerProduct(result)
    } catch (error) {
      console.log("error in getWholesalerList", error)
    }
  }
  useEffect(() => {
    getWholesalerList()
  }, [productId])
  
  return (
    <View style={styles.container}>
      <AppHeader title={"Select Wholesaler"} />
        {/* <Text style={{fontWeight:500,fontSize:20,marginTop:20,paddingLeft:15}}>All Wholesalers ({wholesalerProduct.length})</Text> */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {wholesalerProduct.map((wholesaler:any, index) => (
         <WholesallerCard wholesaler={wholesaler} categoryName={categoryName} index={index}/>
        // <BuyerOptionsCards wholesaler={wholesaler} categoryName={categoryName}/>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent:'center',
    // gap:4
  },
  
});

export default WholesalersList;
