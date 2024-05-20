// Header.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({isSignup}:any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 20,
      }}
    >
      {
        isSignup?       <Text style={{ fontSize: 25, fontWeight: "700" }}>Sign Up</Text> :
        <Text style={{ fontSize: 25, fontWeight: "700" }}>Sign In</Text>
      }

    </View>
  );
};

export default Header;
