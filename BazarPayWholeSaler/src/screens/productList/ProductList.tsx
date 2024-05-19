import { View, Text } from "react-native";
import React from "react";
import CommonHeader from "../../components/shared/commonHeader/CommonHeader";
import ProductCard from "../../components/shared/productCard/ProductCard";

const ProductList = () => {
  return (
    <View>
      {/* <Text>ProductList</Text> */}
      <CommonHeader text="পণ্যের লিস্ট" />
      <ProductCard
        title="Chashi Chinigura Chal"
        buyingPrice={10.99}
        sellingPrice={15.99}
        stock={100}
      />
    </View>
  );
};

export default ProductList;
