import React from "react";
import { View, Text } from "react-native";
import ProductCard from "../productCard/ProductCard";
import Colors from "../../../constants/Colors";

const ProductSection = () => {
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          Trending
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: Colors.light.orange,
            fontWeight: "600",
          }}
        >
          View more {">"}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </View>
    </View>
  );
};

export default ProductSection;
