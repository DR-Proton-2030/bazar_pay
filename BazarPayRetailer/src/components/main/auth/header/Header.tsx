// Header.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingTop: 20,
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: "700" }}>Sign In</Text>
      <Ionicons name="close-circle-sharp" size={24} color="black" />
    </View>
  );
};

export default Header;
