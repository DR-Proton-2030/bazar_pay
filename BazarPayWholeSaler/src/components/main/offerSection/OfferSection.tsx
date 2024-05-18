import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../../constants/Colors";
import winter from "../../../../assets/images/winter.png";
import dhamaka from "../../../../assets/images/dhamaka.png";
import veg from "../../../../assets/images/veg.png";
import mobile from "../../../../assets/images/mobile.png";

const OfferSection = ({ backgroundColor }: any) => {
  const [showCards, setShowCards] = useState(false);

  const handleAllCategoriesPress = () => {
    setShowCards(!showCards);
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.card, { backgroundColor: "#C8F2FF" }]}>
          <View>
            <Text style={styles.text}>Winter</Text>
            <Text style={styles.text}>Offer</Text>
          </View>
          <Image source={winter} style={styles.image} />
        </View>
        <View style={[styles.card, { backgroundColor: "#FFFBD8" }]}>
          <View>
            <Text style={styles.text}>Dhamaka</Text>
            <Text style={styles.text}>Offer</Text>
          </View>
          <Image source={dhamaka} style={styles.image} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.card, { backgroundColor: "#FFF9C6" }]}>
          <View>
            <Text style={styles.text}>Popular</Text>
          </View>
          <Image source={veg} style={styles.image2} />
        </View>
        <View style={[styles.card, { backgroundColor: "#E5D1FF" }]}>
          <Text style={styles.text}>Mobile</Text>
          <Image source={mobile} style={styles.image2} />
        </View>
      </View>
      {showCards && (
        <>
          <View style={styles.row}>
            <View style={[styles.card, { backgroundColor: "#FFF9C6" }]}>
              <View>
                <Text style={styles.text}>Winter</Text>
                <Text style={styles.text}>Offer</Text>
              </View>
              <Image source={winter} style={styles.image} />
            </View>
            <View style={[styles.card, { backgroundColor: "#E5D1FF" }]}>
              <Text style={styles.text}>Offer 2</Text>
              <Image source={dhamaka} style={styles.image} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.card, { backgroundColor: "#C8F2FF" }]}>
              <View>
                <Text style={styles.text}>Winter</Text>
                <Text style={styles.text}>Offer</Text>
              </View>
              <Image source={veg} style={styles.image2} />
            </View>
            <View style={[styles.card, { backgroundColor: "#FFFBD8" }]}>
              <Text style={styles.text}>Offer 2</Text>
              <Image source={mobile} style={styles.image2} />
            </View>
          </View>
        </>
      )}
      <TouchableOpacity onPress={handleAllCategoriesPress}>
        <Text style={styles.allCategoriesText}>All Categories</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,

    height: 80,
    overflow: "hidden", // Clip image overflow
    justifyContent: "space-between",
    flexDirection: "row",
    elevation: 4, // Add elevation for drop shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  allCategoriesText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: Colors.light.primary,
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
  image2: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 5,
    marginTop: 10,
  },
});

export default OfferSection;
