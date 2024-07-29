import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Colors from "../../../constants/Colors";

const CategoryCard = ({ text, icon: Icon }: any) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        backgroundColor: Colors.light.yellow,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        gap: 5,
        marginLeft: 10,
        width: 130,
        height: 33,
        marginTop: 4,
        justifyContent: "center",
        alignItems: "center",
        elevation:5,
        marginBottom:10
      }}
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

export default CategoryCard;
