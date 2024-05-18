import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const Button = ({ handleToggle, isLoginStyle, content, style }: any) => {
  return (
    <View style={{ paddingHorizontal: 20, ...style }}>
      <TouchableOpacity
        onPress={handleToggle}
        style={isLoginStyle ? styles.loginButton : styles.nextButton}
      >
        <Text
          style={isLoginStyle ? styles.loginButtonText : styles.nextButtonText}
        >
          {isLoginStyle ? "Create an Account" : content}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: Colors.light.primary,
    marginTop: 30,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  loginButton: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    marginTop: 30,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  nextButtonText: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  loginButtonText: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
  },
});
