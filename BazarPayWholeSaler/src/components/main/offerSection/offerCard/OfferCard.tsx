// OfferCard.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const OfferCard = ({ backgroundColor, title, uri }: any) => {
  return (
    <View style={[styles.card, { backgroundColor: backgroundColor }]}>
      <View>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>Offer</Text>
      </View>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    height: 90,
    overflow: "hidden",
    justifyContent: "space-between",
    flexDirection: "row",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 5,
    marginTop: 10,
    transform: [{ rotate: "-45deg" }],
  },
});

export default OfferCard;
