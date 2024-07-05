import { View, Text, TouchableOpacity,Image } from "react-native";
import React from "react";
import { smallBoxStyle } from "./SmallBox.style";
import { ISmallBoxProps } from "../../../@types/props/SmallBox.props";
import babelConfig from "../../../../babel.config";
import Colors from "../../../constants/Colors";

const SmallBox = ({ title, icon, logo,backgroundColor,textColor, handleNavigate }: ISmallBoxProps) => {
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
        logo?
        <Image style={{height:100,width:"100%",borderRadius:5}} source={{uri:logo}}/>:
        null
      }
      <Text style={[smallBoxStyle.title,{color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SmallBox;
