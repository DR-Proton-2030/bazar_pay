import React from "react";
import { View } from "react-native";
import { Feather, AntDesign, Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";

const HeaderIcons: React.FC = () => {
  const navigation: any = useNavigation();

  const handlenavigate =()=>{
    navigation.navigate("cart");
  }
  return (
    <View style={{ flexDirection: "row", gap: 16 }}>
      <Feather name="search" size={24} color="black" />
      <AntDesign name="Trophy" size={24} color="black" />
      <TouchableOpacity onPress={handlenavigate}>

      <Octicons name="bell-fill" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderIcons;
