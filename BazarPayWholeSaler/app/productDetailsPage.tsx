import React from "react";
import ProductDetailsPage from "../src/screens/productDetails/ProductDetailsPage";
import { SafeAreaView } from "react-native";

const productDetailsPage = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <ProductDetailsPage />
    </SafeAreaView>
);
};

export default productDetailsPage;
