import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { productCardStyles } from "./productCardStyles"; // Import external stylesheet
import { ProductCardProps } from "../../../@types/props/ProductCard.props";

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  buyingPrice,
  sellingPrice,
  stock,
  uri,
  product
}) => {
  const navigation = useNavigation<any>();

  const handleNavigate = (product:any) => {
    navigation.navigate("ManualAddProduct", product);
  };

  return (
    <View style={productCardStyles.outerContainer}>
      <TouchableOpacity
        onPress={() =>  navigation.navigate("productDetailsPage")}
        style={productCardStyles.container}
      >
        <Image source={{uri:uri}} style={productCardStyles.image} />
        <View style={productCardStyles.infoContainer}>
          <Text style={productCardStyles.title}>{title}</Text>
          <View style={productCardStyles.priceContainer}>
            <Text style={productCardStyles.price}>
              Buying Price: {buyingPrice}
            </Text>
            <Text style={productCardStyles.price}>
              Selling Price: {sellingPrice}
            </Text>
            <Text style={productCardStyles.stock}>Stock: {stock}</Text>
          </View>
        </View>
        <View style={productCardStyles.separator} />
        <View style={productCardStyles.gridContainer}>
          <TouchableOpacity>
            <Text style={productCardStyles.gridText}>Edit Price</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigate(product)}>
            <Text style={productCardStyles.gridText}>Edit Stocks</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="edit" size={20} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="share" size={20} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="more-vertical" size={20} color="blue" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
