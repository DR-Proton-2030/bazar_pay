import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { smallBoxStyle } from "./SmallBox.style";
import { ISmallBoxProps } from "../../../@types/props/SmallBox.props";
import babelConfig from "../../../../babel.config";
import Colors from "../../../constants/Colors";

const SmallBox = ({ title, icon, logo, backgroundColor, textColor, handleNavigate }: ISmallBoxProps) => {
  console.log("======>logo", logo);

  // Determine the image source: either logo[0] if it's an array, or logo itself if it's a string
  const logoSource = Array.isArray(logo) ? logo[0] : logo;

  return (
    <TouchableOpacity
      onPress={handleNavigate}
      style={[
        smallBoxStyle.box,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : Colors.light.cardColor,
        },
      ]}
    >
      {icon}
      {
        logoSource ? (
          <Image 
            style={{ height: 100, width: "100%", borderRadius: 5 }} 
            source={{ uri: logoSource }} 
          />
        ) : null
      }
      <Text style={[smallBoxStyle.title, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SmallBox;
