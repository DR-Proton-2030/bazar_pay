import { View, Text, ScrollView } from "react-native";
import React from "react";
import ProductCard from "../../../components/shared/productCard/ProductCard";
import FavGroup from "../../../components/shared/favGroup/FavGroup";
import ProductList from "../ProductList";
import Colors from "../../../constants/Colors";
import { PaperProvider, Portal } from "react-native-paper";
import { IFavGroupAction } from "../../../@types/props/FavGroup.props";
import { useNavigation } from "expo-router";

const ActiveProducts = () => {
  const navigation = useNavigation<any>();
  const handleNavigateAddProduct = () =>{
    navigation.navigate("ManualAddProduct");
  }
  const action_list : IFavGroupAction[] = [
    {
      icon: "star",
      label: "দ্রুত পণ্য যোগ করুন",
      color: Colors.light.secondary,
      onPress: () => console.log("Pressed star"),
    },
    {
      icon: "cart",
      label: "নতুন পণ্য যোগ করুন",
      color: Colors.light.secondary,
      onPress: handleNavigateAddProduct,
    },
  ]
  return (
    <>
      <PaperProvider>
        <Portal>
          <ProductList />
          <FavGroup action_list={action_list}/>
        </Portal>
      </PaperProvider>
    </>
  );
};

export default ActiveProducts;
