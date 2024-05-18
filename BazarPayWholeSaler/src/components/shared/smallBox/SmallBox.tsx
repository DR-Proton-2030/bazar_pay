import { View, Text } from "react-native";
import React from "react";
import { smallBoxStyle } from "./SmallBox.style";
import { ISmallBoxProps } from "../../../@types/props/SmallBox.props";
import babelConfig from "../../../../babel.config";
import Colors from "../../../constants/Colors";

const SmallBox = ({ title, icon, backgroundColor,textColor }: ISmallBoxProps) => {
  return (
    <View
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
      <Text style={[smallBoxStyle.title,{color: textColor}]}>{title}</Text>
    </View>
  );
};

export default SmallBox;
