import React from "react";

import ProductSection from "../../components/shared/productSection/ProductSection";
import { SafeAreaView, ScrollView } from "react-native";
import Colors from "../../constants/Colors";
import ProductHeader from "../../components/main/productDetails/productHeader/ProductHeader";
import ProductBlock from "../../components/main/productDetails/productBlock/ProductBlock";
import ProductDesc from "../../components/main/productDetails/productDesc/ProductDesc";
import BuyerOptions from "../../components/main/buyerOptions/BuyerOptions";
import { ExpoRouter } from "expo-router/types/expo-router";
import CommonHeader from "../../components/shared/commonHeader/CommonHeader";
import { IProduct } from "../../@types/types/product.interface";
import { useRoute } from "@react-navigation/native";

const ProductDetailsScreen = () => {
  const route: any = useRoute();
  const product = route.params;
  console.log(product);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductHeader text={product?.product_name} />
      <ScrollView>
        <ProductBlock product={product} />
        <ProductDesc product={product} />
        {/* <BuyerOptions />
      <ProductSection /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
