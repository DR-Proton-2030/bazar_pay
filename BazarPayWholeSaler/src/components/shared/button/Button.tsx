import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import { IButtonProps } from "../../../@types/props/Button.props";
import { windowWidth } from "../../../constants/HeightWidth";

const Button = ({ handlePress, content, style, textStyle }: IButtonProps) => {
  return (
    <View style={[{ paddingHorizontal: 20 }, style]}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={textStyle}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
