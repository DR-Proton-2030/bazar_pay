// import { useNavigation } from "expo-router";
import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import productImg from "../../../../../assets/images/product.png";

const ProductBlock = () => {
  // const navigation: any = useNavigation();
  const handleNavigate = () => {
    // navigation.navigate("productDetails");
  };
  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.container}>
      <Image source={productImg} style={styles.image} />
      <Text style={styles.title}>Chashi Chinigura Chal</Text>
      <Text style={styles.amount}>1kg packet</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    width: 350,
    height: 280,
    borderRadius: 10,
    marginTop: -40,
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
