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
  const { productId }: any = route.params;
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
      <AppHeader title={"Sellect Wholesaller"} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {wholesalerProduct.map((wholesaler:any, index) => (
        //  <WholesallerCard productId={productId} wholesaler={wholesaler} index={index}/>
        <BuyerOptionsCards wholesaler={wholesaler}/>
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
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'center',
    gap:10
  },
  
});

export default WholesalersList;
