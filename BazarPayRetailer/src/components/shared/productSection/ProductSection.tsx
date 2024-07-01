import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import ProductCard from "../productCard/ProductCard";
import Colors from "../../../constants/Colors";
import { api } from "../../../utils/api";

const ProductSection = () => {
  const [products, setProducts] = useState([]); // Initialize with an empty array

  const getProducts = async () => {
    try {
      const result = await api.product.getProductList({ product_status: "PENDING" });
      setProducts(result.result);
      // console.log("=====>Product", result.result);
    } catch (error) {
      console.log("====>Error", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []); // Empty dependency array ensures fetching products only once

  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "700" }}>Trending</Text>
        <Text style={{ fontSize: 16, color: Colors.light.orange, fontWeight: "600" }}>
          View more {">"}
        </Text>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {/* Use map to render ProductCard components for each product */}
        {products.map((product, index) => (
          <ProductCard key={index} product={product} /> // Provide unique keys
        ))}
      </View>
    </View>
  );
};

export default ProductSection;
