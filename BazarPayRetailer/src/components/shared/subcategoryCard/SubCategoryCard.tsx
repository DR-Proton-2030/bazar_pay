import { useNavigation } from "expo-router";
import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const SubCategoryCard = ({product,categoryId}:any) => {
  const navigation: any = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("AllProducts",{subcategory:product,categoryId:categoryId});
  };
  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.container}>
      <Image source={{uri:product?.sub_category_image}} style={styles.image} />
      <Text style={styles.amount}>{product?.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "flex-start",
    width: 100,
  },
  image: {
    width: 90,
    height:90,
    borderRadius: 10,
    backgroundColor:"#e6eeff"
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
    fontWeight:'600'
  },
});

export default SubCategoryCard;
