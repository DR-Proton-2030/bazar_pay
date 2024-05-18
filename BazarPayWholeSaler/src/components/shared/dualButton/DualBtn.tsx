import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Colors from "../../../constants/Colors";

const DualBtn = ({ text1, text2 }: any) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={{
          width: "50%",
          backgroundColor: Colors.light.grayBtn,
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 15,
          paddingHorizontal: 5,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
      >
        <Text style={{ fontSize: 16, color: "gray", fontWeight: "700" }}>
          {text1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "50%",
          backgroundColor: Colors.light.primary,
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 15,
          paddingHorizontal: 5,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        <Text style={{ fontSize: 16, color: "white", fontWeight: "700" }}>
          {text2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DualBtn;
