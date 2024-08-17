import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AppHeader from '../../shared/commonHeader/CommonHeader';
import Colors from '../../../constants/Colors';
import { useRoute } from "@react-navigation/native";
import { api } from '../../../utils/api';
import WholesallerCard from '../../shared/wholesallerCard/WholesallerCard';
import BuyerOptionsCards from '../buyerOptions/buyerOptionsCards/BuyerOptionsCards';
import LottieView from 'lottie-react-native';
import ff from "../../../database/animation/success/Animation - 1721420607611.json"

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
      {
        wholesalerProduct.length <= 0 ?
        <View style={{marginTop:100}}>
          <LottieView
        source={require('../../../database/animation/notfound/Animation - 1723892477680.json')}
        autoPlay
        loop={true}
        style={styles.animation}
      />
      <Text style={{textAlign:"center",fontSize:20,fontWeight:600,marginTop:-50}}>
        No Results Found
      </Text>
          </View>
          :
          <ScrollView contentContainerStyle={styles.scrollContainer}>
          {wholesalerProduct.map((wholesaler:any, index) => (
           <WholesallerCard wholesaler={wholesaler} categoryName={categoryName} index={index}/>
          // <BuyerOptionsCards wholesaler={wholesaler} categoryName={categoryName}/>
          ))}
        </ScrollView>
      }
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  animation: {
    width: 350,
    height: 350,
    marginLeft:"auto",
    marginRight:"auto"
    // marginTop:-100
    // backgroundColor:"red"
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
