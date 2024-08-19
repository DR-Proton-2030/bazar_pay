import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { api } from "../../utils/api";
import SmallBox from "../../components/shared/smallBox/SmallBox";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

export interface IProduct {
  _id: string;
  product_name: string;
  product_description: string;
  product_image: string;
  unit: string;
  product_status: string;
}

const QuickProductList: React.FC = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [productList, setProductList] = useState<IProduct[]>([]);
  const { categoryId, subcategoryId, brandId } = route.params;

  const getAllProducts = useCallback(async () => {
    const filter = {
      category_object_id: categoryId,
      subcategory_object_id: subcategoryId,
      brand_object_id: brandId,
    };
    try {
      console.log("filter===>", filter);
      const { result } = await api.product.getProductList(filter);
      console.log("=====>products", result);
      setProductList(result);
    } catch (error) {
      console.log("error in getAllProducts", error);
    }
  }, [categoryId, subcategoryId, brandId]);

  const handleNavigate = (productId: string, productImage: string) => {
    navigation.navigate("QuickAddProduct", {
      productId: productId,
      productImage: productImage,
    });
    console.log("Navigating to QuickAddProduct with productId:", productId);
  };

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <ScrollView
      style={[styles.container]}
      contentContainerStyle={styles.scrollViewContainer}
    >
      {productList.map((product) => (
        // <View key={product._id} style={styles.productItem}>
        <SmallBox
          title={product?.product_name}
          logo={product?.product_image}
          icon={undefined}
          textColor={""}
          handleNavigate={() =>
            handleNavigate(product._id, product.product_image)
          }
        />
        // </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  scrollViewContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
  },
  productItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  productText: {
    fontSize: 16,
    color: "black",
  },
});

export default QuickProductList;
