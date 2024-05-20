import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import ProductCard from "../../components/shared/productCard/ProductCard";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const ProductList = () => {
  return (
    <ScrollView contentContainerStyle={{ marginTop: 5 }}>
    <ProductCard
      title="Chashi Chinigura Chal"
      buyingPrice={10.99}
      sellingPrice={15.99}
      stock={100}
    />
    <ProductCard
      title="Chashi Chinigura Chal"
      buyingPrice={10.99}
      sellingPrice={15.99}
      stock={100}
    />
    <ProductCard
      title="Chashi Chinigura Chal"
      buyingPrice={10.99}
      sellingPrice={15.99}
      stock={100}
    />
    <ProductCard
      title="Chashi Chinigura Chal"
      buyingPrice={10.99}
      sellingPrice={15.99}
      stock={100}
    />
  </ScrollView>
  );
};

export default ProductList;
