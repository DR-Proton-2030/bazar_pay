// SignInButton.js
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { globalStyle } from "../../../../globalStyles/globalStyles";

const SignInButton = ({ onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={globalStyle.signInButton}>
      <Text style={globalStyle.signInButtonText}>SIGN IN</Text>
    </TouchableOpacity>
  );
};

export default SignInButton;
