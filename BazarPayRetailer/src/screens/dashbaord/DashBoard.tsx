import React, { useRef, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, DrawerLayoutAndroid } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";

import HomePage from "../home/Home";
import Colors from "../../constants/Colors";
import { BottomRow } from "../../components/main/buttomNavigation/bottomRowList/BottomRowList";
import Drawer from "../../components/shared/sideDrawer/Drawer";

const Dashboard: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<string>("Home");
  const drawerRef = useRef<DrawerLayoutAndroid>(null);

  const openDrawer = () => {
    if (drawerRef.current) {
      console.log("Opening drawer");
      drawerRef.current.openDrawer();
    } else {
      console.warn("Drawer reference is null. Unable to open drawer.");
    }
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case "Home":
        return <HomePage />;
      case "OtherScreen1":
        return <HomePage />;
      case "OtherScreen2":
        return <HomePage />;
      default:
        return null;
    }
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300} // Hard-coding drawer width temporarily
      drawerPosition="left"
      renderNavigationView={Drawer}
    >
    <View style={styles.container}>
      <View style={styles.screen}>{renderScreen()}</View>
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => setActiveScreen("OtherScreen1")}>
          <View style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Checkout</Text>
            <Text style={styles.checkoutAmount}>&nbsp;৳ 639.8&nbsp;</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveScreen("Home")}
          style={styles.scanButton}
        >
          <MaterialCommunityIcons name="line-scan" size={40} color="white" />
        </TouchableOpacity>
        <BottomRow
          options={[
            { icon: "home", onPress: () => setActiveScreen("OtherScreen1") },
            {
              icon: "shopping-bag",
              onPress: () => setActiveScreen("OtherScreen2"),
            },
            {
              icon: "arrow-right-arrow-left",
              onPress: () => setActiveScreen("OtherScreen3"),
            },
          ]}
        />
      </View>
    </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  screen: { flex: 1 },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: Colors.light.background,
    borderTopWidth: 0.5,
    borderColor: Colors.light.grayBtn,
  },
  checkoutButton: {
    backgroundColor: Colors.light.orange,
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 10,
    flexDirection: "row",
    gap: 4,
  },
  checkoutText: {
    fontSize: 12,
    color: "white",
    fontWeight: "500",
  },
  checkoutAmount: {
    backgroundColor: Colors.light.background,
    borderRadius: 10,
    color: Colors.light.text,
    fontSize: 12,
  },
  scanButton: {
    backgroundColor: Colors.light.orange,
    marginTop: -25,
    borderRadius: 50,
    padding: 15,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  bottomRow: { flexDirection: "row", gap: 20 },
});

export default Dashboard;
