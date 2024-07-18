import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import ProductSection from "../../components/shared/productSection/ProductSection";
import Colors from "../../constants/Colors";
import ProductHeader from "../../components/main/productDetails/productHeader/ProductHeader";
import ProductBlock from "../../components/main/productDetails/productBlock/ProductBlock";
import ProductDesc from "../../components/main/productDetails/productDesc/ProductDesc";
import BuyerOptions from "../../components/main/buyerOptions/BuyerOptions";
import { api } from "../../utils/api";
import RatingBar from "../../components/main/ratings/RatingBar/RatingBar";
import { useNavigation } from "expo-router";

const ProductDetailsScreen = () => {
  const route = useRoute();
  const [productDetails,setProductDetails]=useState<any>()
const getProductDetails= async()=>{
  try {
    const filter={
      wholesaler_listed_product_id:"669606343a1c178ad805320b"
    }
    const result = await api.product.getWholesalerProductDetails(filter)
    console.log(result)
    setProductDetails(result)
  } catch (error) {
    console.log("error in getProductDetails",error)
  }
}
const navigation: any = useNavigation();
const handleNavigate = () => {
  navigation.navigate("RatingsPage");
};
useEffect(() => {
  getProductDetails()
}, [])

  return (
    <>
      <ProductHeader text={productDetails?.product?.product_name} />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.light.background,
          width: "100%",
        }}
      >
        <ProductBlock product={productDetails?.product} />
        <ProductDesc product={productDetails?.product} />
        <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal:20,
          marginTop:20
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          Ratings & Reviews
        </Text>
        <TouchableOpacity onPress={handleNavigate}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.light.orange,
              fontWeight: "600",
            }}
          >
            See All
          </Text>
        </TouchableOpacity>
        </View>
      <RatingBar />
        {/* <ProductSection /> */}
      </ScrollView>
    </>
  );
};

export default ProductDetailsScreen;
