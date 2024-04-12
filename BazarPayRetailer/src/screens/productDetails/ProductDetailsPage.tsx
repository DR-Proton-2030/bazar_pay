import React from "react";

import ProductSection from "../../components/shared/productSection/ProductSection";
import { ScrollView } from "react-native";
import Colors from "../../constants/Colors";
import ProductHeader from "../../components/main/productDetails/productHeader/ProductHeader";
import ProductBlock from "../../components/main/productDetails/productBlock/ProductBlock";
import ProductDesc from "../../components/main/productDetails/productDesc/ProductDesc";
import BuyerOptions from "../../components/main/buyerOptions/BuyerOptions";

const ProductDetailsScreen = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Colors.light.background,
        width: "100%",
      }}
    >
      <ProductHeader />
      <ProductBlock />
      <ProductDesc />
      <BuyerOptions />
      <ProductSection />
    </ScrollView>
  );
};

export default ProductDetailsScreen;
