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
    navigation.navigate("ManualAddProduct", product);
  };

  const handleNavigateProductDetails = () => {
    navigation.navigate("productDetailsPage", product);
  };
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
          <Image source={{ uri: uri }} style={productCardStyles.image} />
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
          {/* <View style={productCardStyles.separator} /> */}
          {/* <View style={productCardStyles.gridContainer}>
            <TouchableOpacity onPress={() => showModal("STOCK")}>
              <Text style={productCardStyles.gridText}>Edit Stock</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => showModal("PRICE")}>
              <Text style={productCardStyles.gridText}>Edit Price</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNavigate}>
              <Feather name="edit" size={20} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="share" size={20} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="more-vertical" size={20} color="blue" />
            </TouchableOpacity>
          </View> */}
        </TouchableOpacity>
      </View>
    </PaperProvider>
  );
};

export default ProductCard;
