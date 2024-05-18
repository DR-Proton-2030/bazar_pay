import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Colors from "../../../constants/Colors";
import { smallCardStyle } from "./SmallCard.style";

const SmallCard = ({ text, icon: Icon }: any) => {
  return (
    <TouchableOpacity
      style={smallCardStyle.card}
    >
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        {Icon && <Icon />}
        <Text style={{ textAlign: "center", fontWeight: "600" }}>
          &nbsp;{text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SmallCard;
