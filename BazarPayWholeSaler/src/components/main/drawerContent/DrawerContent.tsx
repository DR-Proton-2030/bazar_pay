import React, { useContext, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  Image,
  Modal,
} from "react-native";
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
  const [logoutConfirmationVisible, setLogoutConfirmationVisible] =
    useState(false);

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
    setLogoutConfirmationVisible(true);
  };

  const confirmLogout = () => {
    setUser(null);
    onClose();
    navigation.navigate("wellcomePage");
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
          source={{ uri: wholesaler?.wholesaler_owner_photo }}
          style={{ width: 80, height: 80, borderRadius: 50 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
            {user?.wholesaler_name}
          </Text>
          <Text style={{ fontSize: 14, marginTop: 5 }}>
            {wholesaler?.owner_phone}
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

      {/* Logout Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={logoutConfirmationVisible}
        onRequestClose={() => setLogoutConfirmationVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 20 }}>
              Are you sure you want to logout?
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.light.primary,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 5,
                  marginRight: 10,
                }}
                onPress={() => {
                  setLogoutConfirmationVisible(false);
                  confirmLogout();
                }}
              >
                <Text style={{ color: "white" }}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.light.primary,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 5,
                }}
                onPress={() => setLogoutConfirmationVisible(false)}
              >
                <Text style={{ color: "white" }}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
