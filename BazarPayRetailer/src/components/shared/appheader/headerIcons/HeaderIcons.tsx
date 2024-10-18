import React from "react";
import { View } from "react-native";
import { Feather, AntDesign, Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";

const HeaderIcons: React.FC = () => {
  const navigation: any = useNavigation();

  const handlenavigateToCart =()=>{
    navigation.navigate("cart");
  }
  const handlenavigateToSearch =()=>{
    navigation.navigate("search");
  }
  return (
    <View style={{ flexDirection: "row", gap: 16 }}>
      <TouchableOpacity onPress={handlenavigateToSearch}>

      <Feather name="search" size={24} color="black" />
</TouchableOpacity>
    
      <AntDesign name="Trophy" size={24} color="black" />
      <TouchableOpacity onPress={handlenavigateToCart}>

      <Octicons name="bell" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderIcons;
