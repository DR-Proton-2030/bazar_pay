import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import ProductCard from "../../components/shared/productCard/ProductCard";
import { api } from "../../utils/api";
import WholesalerContext from "../../contexts/wholesalerContext/wholesalerContext";

const ProductList = ({ loading, products }: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={products}
          contentContainerStyle={{ marginTop: 5 }}
          renderItem={({ item }) => (
            <ProductCard
              key={item._id}
              title={item.product_name}
              buyingPrice={item.product_buying_price}
              sellingPrice={item.product_saling_price}
              stock={item.current_stock}
              uri={item.product_image}
              product={item}
            />
          )}
        />
      )}
      
    </SafeAreaView>
  );
};

export default ProductList;
