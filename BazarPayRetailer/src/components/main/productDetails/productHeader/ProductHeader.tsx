import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { globalStyle } from "../../../../globalStyles/globalStyles";
import Colors from "../../../../constants/Colors";
import { useNavigation } from "expo-router";
const ProductHeader = ({ text }: any) => {
  const navigation: any = useNavigation();

  const handleNavigate = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyle.productHeader}>
      <TouchableOpacity
        onPress={handleNavigate}
        style={{ display: "flex", flexDirection: "column", paddingLeft: 20 }}
      >
        <Ionicons name="arrow-back" size={28} color={Colors.light.text} />
      </TouchableOpacity>
      {/* <Text style={{ fontSize: 20, fontWeight: "600" }}>{text}</Text> */}
      <View
        style={{
          display: "flex",
          paddingRight: 20,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <TouchableOpacity>
          <AntDesign name="sharealt" size={24} color={Colors.light.text} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={28}
            color={Colors.light.text}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductHeader;
