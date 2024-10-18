import { useNavigation } from "expo-router";
import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../../constants/Colors";

const SubCategoryCard = ({product,categoryId,categoryName}:any) => {
  const navigation: any = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("AllProducts",{subcategory:product,categoryId:categoryId,categoryName:categoryName});
  };
  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.container}>
      <View style={{ borderRadius: 10,
    backgroundColor:Colors.light.cardColor,
    paddingVertical:5,width: 80, alignItems: "center",}}>

      <Image source={{uri:product?.sub_category_image}} style={styles.image} />
      </View>
      <Text style={styles.amount}>{product?.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width:80,
    alignItems: "center",
    marginRight:7
  },
  image: {
    width: 70,
    height:70,
   


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
    fontSize: 12,
    marginTop: 5,
    fontWeight:'600',
    color:"gray"
  },
});

export default SubCategoryCard;
