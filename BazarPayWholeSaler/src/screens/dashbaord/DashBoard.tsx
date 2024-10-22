import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Alert, BackHandler } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import * as Updates from 'expo-updates';

import HomePage from "../home/Home";
import Colors from "../../constants/Colors";
import { BottomRow } from "../../components/main/buttomNavigation/bottomRowList/BottomRowList";

const Dashboard: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<string>("Home");

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

  useEffect(() => {
    const backAction = () => {
      if (activeScreen === "Home") { // Check if it's the main dashboard screen
        Alert.alert("Exit App", "Are you sure you want to exit?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() } // Close the app
        ]);
        return true;
      }
      return false;
    };
  
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
  
    return () => backHandler.remove();
  }, [activeScreen]);

  
  return (
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
    backgroundColor: Colors.light.primary,
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
    backgroundColor: Colors.light.primary,
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
