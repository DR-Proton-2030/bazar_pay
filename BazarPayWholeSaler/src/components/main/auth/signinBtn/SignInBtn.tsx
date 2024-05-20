// SignInButton.js
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { globalStyle } from "../../../../globalStyles/globalStyles";

const SignInButton = ({ onPress ,isSignup}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={globalStyle.signInButton}>
       {
        isSignup?       <Text style={globalStyle.signInButtonText}>Sign Up</Text> :
        <Text style={globalStyle.signInButtonText}>Sign In</Text>
      }

    </TouchableOpacity>
  );
};

export default SignInButton;
