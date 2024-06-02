// import { useNavigation } from "expo-router";
import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import productImg from "../../../../../assets/images/product.png";
import { IProduct } from "../../../../@types/types/product.interface";

const ProductBlock = ({product}:{product:IProduct}) => {
  // const navigation: any = useNavigation();
  const handleNavigate = () => {
    // navigation.navigate("productDetails");
  };
  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.container}>
      <Image source={{uri: product.product_image}} style={styles.image} />
      <Text style={styles.title}>{product.product_name}</Text>
      <Text style={styles.amount}>1{product.unit} packet</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignItems: "center",
    textAlign: "center",
    marginTop:20,
  },
  image: {
    width: 250,
    height: 180,
    borderRadius: 10,
    // marginTop: -40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 18,
  },
  description: {
    fontSize: 11,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 20,
    marginTop: 5,
  },
});

export default ProductBlock;
