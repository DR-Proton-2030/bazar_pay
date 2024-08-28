import React from "react";
import { View } from "react-native";
import { Feather, AntDesign, Octicons } from "@expo/vector-icons";

const HeaderIcons: React.FC = () => {
  return (
    <View style={{ flexDirection: "row", gap: 16 }}>
      {/* <Feather name="search" size={24} color="black" />
      <AntDesign name="Trophy" size={24} color="black" /> */}
      <Octicons name="bell-fill" size={24} color="blue" />
    </View>
  );
};

export default HeaderIcons;
