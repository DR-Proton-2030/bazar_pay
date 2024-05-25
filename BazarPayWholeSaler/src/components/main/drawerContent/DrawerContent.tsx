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
import WholesalerContext from "../../../contexts/wholesalerContext/wholesalerContext";
import { Ionicons } from "@expo/vector-icons";

export const DrawerContent = ({ onClose }: any) => {
  const { wholesaler } = useContext(WholesalerContext);
  const { user, setUser } = useContext(AuthContext);
  const navigation: any = useNavigation();
  const drawerItems = createDrawerItems(navigation);
  const handleNavigatetoProfile = ({ route }: any) => {
    navigation.navigate("profilePage");
    onClose();
  };

  const handleNavigateToSettings = () => {
    // navigation.navigate("settingsPage");
    // onClose();
    console.log("Setting Clicked");
  };

  const handleLogout = () => {
    setUser(null); // Set user to null to simulate logout
    onClose();
    // Optionally navigate to a login or welcome screen after logout
    navigation.navigate("signInPage"); // Adjust the route name as needed
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
          source={{ uri: wholesaler?.owner_photo }}
          style={{ width: 80, height: 80, borderRadius: 50 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
            {user?.full_name}
          </Text>
          <Text style={{ fontSize: 14, marginTop: 5 }}>
            {wholesaler?.contact_email}
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

      <TouchableOpacity
        // onPress= // Assuming you have a logout function in AuthContext
        onPress={handleLogout}
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          borderWidth: 2,
          borderColor: Colors.light.primary,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 7,
          borderRadius: 5,
        }}
      >
        <Feather
          name="log-out"
          size={20}
          color={Colors.light.primary}
          style={{ marginRight: 5 }}
        />
        <Text style={{ color: Colors.light.primary }}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleNavigateToSettings}
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 7,
        }}
      >
        <Ionicons name="settings" size={24} color={Colors.light.primary} />
      </TouchableOpacity>
    </View>
  );
};
