import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import BuyerOptionsCards from "./buyerOptionsCards/BuyerOptionsCards";
import Colors from "../../../constants/Colors";
import { useNavigation } from "expo-router";

const BuyerOptions = () => {
  const navigation: any = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("RatingsPage");
  };
  return (
    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          Buy From
        </Text>
        <TouchableOpacity onPress={handleNavigate}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.light.orange,
              fontWeight: "600",
            }}
          >
            Ratings & Reviews
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ paddingLeft: 0, marginVertical: 10 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <BuyerOptionsCards />
        <BuyerOptionsCards />
        <BuyerOptionsCards />
        <BuyerOptionsCards />
      </ScrollView>
    </View>
  );
};

export default BuyerOptions;
