// SignInButton.js
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { globalStyle } from "../../../../globalStyles/globalStyles";
import { Button } from "react-native-paper";

const SignInButton = ({ onPress, isSignup }: any) => {
  return (
    <Button onPress={onPress} style={globalStyle.blueButton}>
      {isSignup ? (
        <Text style={globalStyle.signInButtonText}>Sign Up</Text>
      ) : (
        <Text style={globalStyle.signInButtonText}>Sign In</Text>
      )}
    </Button>
  );
};

export default SignInButton;
