import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ProductDetailsProps } from "../../../@types/props/ProductDetails.props";

const ProductItem: React.FC<ProductDetailsProps> = ({
  icon,
  title,
  subtitle,
  price,
}) => {
  return (
    <View style={styles.productItem}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}</Text>
        <MaterialCommunityIcons name="greater-than" size={14} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  iconContainer: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
  },
  priceContainer: {
    width: 70,
    alignItems: "flex-end",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductItem;
