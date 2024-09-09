import React, { useContext } from "react";
import { TouchableOpacity, View, Text, Dimensions, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import DrawerCards from "./drawerCards/DrawerCards";
import { useNavigation } from "expo-router";
import { createDrawerItems } from "../../../database/drawerItems/drawerItems";
import AuthContext from "../../../contexts/authContext/authContext";

export const DrawerContent = () => {
  const {user}=useContext(AuthContext)
  const navigation: any = useNavigation();
  const drawerItems = createDrawerItems(navigation);
  const handleNavigatetoProfile = ({ route }: any) => {
    navigation.navigate("profilePage");
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
            uri: user?.logo,
          }}
          style={{ width: 80, height: 80, borderRadius: 50 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
            {user?.retailer_name}
          </Text>
          <Text style={{ fontSize: 14, marginTop: 5 }}>
           tuhin.thakur@gmail.com
          </Text>
          <TouchableOpacity
            onPress={handleNavigatetoProfile}
            style={{
              marginTop: 10,
              borderWidth: 2,
              borderColor: Colors.light.orange,
              paddingHorizontal: 5,
              paddingVertical: 7,
              borderRadius: 5,
              width: 100,
            }}
          >
            <Text style={{ color: Colors.light.orange }}>Show Details</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 30,width:260 }}>
        {drawerItems.map((item, index) => (
          <DrawerCards key={index} {...item} />
        ))}
      </View>
    </View>
  );
};
