import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import productImg from "../../../../assets/images/product.png";
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
}) => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("productDetailsPage");
  };

  return (
    <View style={productCardStyles.outerContainer}>
      <TouchableOpacity
        onPress={handleNavigate}
        style={productCardStyles.container}
      >
        <Image source={productImg} style={productCardStyles.image} />
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
          <TouchableOpacity>
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
