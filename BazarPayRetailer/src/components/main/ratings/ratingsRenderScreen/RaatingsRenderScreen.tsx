import React from "react";
import { Text, View } from "react-native";
import RatingsCard from "../ratingsCard/RatingsCard";

const RaatingsRenderScreen = () => {
  return (
    <View style={{ width: "100%", marginBottom: 40 }}>
      <Text style={{ fontSize: 18 }}>Reviews</Text>
      <RatingsCard />
      <RatingsCard />
    </View>
  );
};

export default RaatingsRenderScreen;
