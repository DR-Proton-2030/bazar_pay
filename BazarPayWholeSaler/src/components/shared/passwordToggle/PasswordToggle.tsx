import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyle } from "../../../globalStyles/globalStyles";

const PasswordToggle = ({ password, setPassword }:any) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={globalStyle.passwordContainer}>
      <TextInput
        style={{
          flex: 1,
          paddingHorizontal: 15,
          paddingVertical: 15,
        }}
        placeholder="Password"
        secureTextEntry={!showPassword}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity
        onPress={togglePasswordVisibility}
        style={{
          paddingHorizontal: 15,
          paddingVertical: 12,
        }}
      >
        <Ionicons
          name={showPassword ? "eye-off" : "eye"}
          size={25}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordToggle;
