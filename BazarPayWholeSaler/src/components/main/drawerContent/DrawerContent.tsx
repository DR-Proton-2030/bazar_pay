import React from "react";
import { TouchableOpacity, View, Text, Dimensions, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import DrawerCards from "./drawerCards/DrawerCards";
import { useNavigation } from "expo-router";
import { createDrawerItems } from "../../../database/drawerItems/drawerItems";

export const DrawerContent = ({ onClose }: any) => {
  const navigation: any = useNavigation();
  const drawerItems = createDrawerItems(navigation);
  const handleNavigatetoProfile = ({ route }: any) => {
    navigation.navigate("profilePage");
    onClose();
  };

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "white",
        height: "100%",
        paddingTop: 70,
      }}
    >
      <View
        style={{ alignItems: "center", marginBottom: 20, flexDirection: "row" }}
      >
        <Image
          source={{
            uri: "https://img.icons8.com/?size=512&id=108652&format=png",
          }}
          style={{ width: 80, height: 80, borderRadius: 50 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
            Your Name
          </Text>
          <Text style={{ fontSize: 14, marginTop: 5 }}>
            nomanroni@gmail.com
          </Text>
          <TouchableOpacity
            onPress={handleNavigatetoProfile}
            style={{
              marginTop: 10,
              borderWidth: 2,
              borderColor: Colors.light.primary,
              paddingHorizontal: 5,
              paddingVertical: 7,
              borderRadius: 5,
              width: 100,
            }}
          >
            <Text style={{ color: Colors.light.primary }}>Show Details</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        {drawerItems.map((item, index) => (
          <DrawerCards key={index} {...item} />
        ))}
      </View>
    </View>
  );
};
