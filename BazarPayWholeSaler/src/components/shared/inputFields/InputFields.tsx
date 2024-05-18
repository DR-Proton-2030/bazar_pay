// InputField.js
import React from "react";
import { View, TextInput } from "react-native";
import { globalStyle } from "../../../globalStyles/globalStyles";

const InputField = ({ placeholder, onChangeText, value }: any) => {
  return (
    <TextInput
      style={globalStyle.inputContainer}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default InputField;
