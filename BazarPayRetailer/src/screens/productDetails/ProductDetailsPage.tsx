import React from "react";
import { ScrollView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import ProductSection from "../../components/shared/productSection/ProductSection";
import Colors from "../../constants/Colors";
import ProductHeader from "../../components/main/productDetails/productHeader/ProductHeader";
import ProductBlock from "../../components/main/productDetails/productBlock/ProductBlock";
import ProductDesc from "../../components/main/productDetails/productDesc/ProductDesc";
import BuyerOptions from "../../components/main/buyerOptions/BuyerOptions";

const ProductDetailsScreen = () => {
  const route = useRoute();
  const { product }:any = route.params;

  return (
    <>
      <ProductHeader text={product.name} />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.light.background,
          width: "100%",
        }}
      >
        <ProductBlock product={product} />
        <ProductDesc product={product} />
        <BuyerOptions product={product} />
        <ProductSection />
      </ScrollView>
    </>
  );
};

export default ProductDetailsScreen;
