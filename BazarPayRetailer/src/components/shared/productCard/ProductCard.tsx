// import { useNavigation } from "expo-router";
import { useNavigation } from "expo-router";
import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import productImg from "../../../../assets/images/product.png";

const ProductCard = ({product}:any) => {
  const navigation: any = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("productDetailsPage",{ product });
  };
  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.container}>
      <Image source={{uri:product?.product_image} || productImg} style={styles.image} />
      <Text style={styles.price}>৳{product?.Total || 0}</Text>
      <Text style={styles.description}>{product?.product_name}</Text>
      <Text style={styles.amount}>{product?.current_stock}&nbsp;{product?.unit || "Unit"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "flex-start",
    width: 130,
  },
  image: {
    width: 70,
    height: 140,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 9,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default ProductCard;
