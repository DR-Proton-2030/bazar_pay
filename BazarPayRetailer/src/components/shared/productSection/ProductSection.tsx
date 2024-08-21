import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import ProductCard from "../productCard/ProductCard";
import Colors from "../../../constants/Colors";
import { api } from "../../../utils/api";
import SubCategoryCard from "../subcategoryCard/SubCategoryCard";

const ProductSection = () => {
  const [categories, setCategories] = useState([]); // Initialize with an empty array

  const getProducts = async () => {
    try {
      const result = await api.subcategory.getSubcategoryList();
      setCategories(result);  
    } catch (error) {
      console.log("====>Error", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10, }}>
      {categories.map((category:any) => (
        <View key={category._id} style={{marginBottom:30}}>
          <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom:15
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "700" }}>
          {category?.name}</Text>
        <Text style={{ fontSize: 14, color: Colors.light.orange, fontWeight: "600" }}>
          View more
        </Text>
      </View>
          <View style={{ flexDirection: "row", gap:8,justifyContent:"flex-start"}}>
            {category.subcategoryInstance.map((subcategory:any) => (
              <SubCategoryCard categoryName={category?.name} key={subcategory._id} product={subcategory} categoryId={category?._id}/>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default ProductSection;
