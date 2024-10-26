import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { productCardStyles } from "./productCardStyles"; // Import external stylesheet
import { ProductCardProps } from "../../../@types/props/ProductCard.props";
import StockModal from "./stockModal/StockModal";
import { Modal, PaperProvider, Portal } from "react-native-paper";

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  buyingPrice,
  sellingPrice,
  stock,
  uri,
  product,
}) => {
  const navigation = useNavigation<any>();

  const [visible, setVisible] = useState<boolean>(false);

  const [type, setType] = useState<"STOCK" | "PRICE">("STOCK");

  const showModal = (type: "STOCK" | "PRICE") => {
    setVisible(!visible);
    setType(type);
  };

  const hideModal = () => setVisible(false);

  const handleNavigate = () => {
    // navigation.navigate("ManualAddProduct", product);
  };

  const handleNavigateProductDetails = () => {
    navigation.navigate("productDetailsPage", product);
  };

  console.log("uri==>",uri[0])
  return (
    <PaperProvider>
      <StockModal
        hideModal={hideModal}
        visible={visible}
        type={type}
        value={
          type === "PRICE"
            ? product.product_saling_price
            : product.current_stock
        }
      />
      <View style={productCardStyles.outerContainer}>
        <TouchableOpacity
          onPress={handleNavigate}
          style={productCardStyles.container}
        >
          <Image source={{ uri: uri[0] }} style={productCardStyles.image} />
          <View style={productCardStyles.infoContainer}>
            <Text style={productCardStyles.title}>{title}</Text>
            <View style={productCardStyles.priceContainer}>
              <Text style={productCardStyles.price}>
                Buying Price: {buyingPrice} BDT
              </Text>
              <Text style={productCardStyles.price}>
                Selling Price: {sellingPrice} BDT
              </Text>
              <Text style={productCardStyles.stock}>Stock: {stock}</Text>
            </View>
          </View>
      
        </TouchableOpacity>
      </View>
    </PaperProvider>
  );
};

export default ProductCard;
