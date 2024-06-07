import React, { useContext, useState } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";

import Colors from "../../../constants/Colors";
import { globalStyle } from "../../../globalStyles/globalStyles";
import MenuButton from "../menuBtn/MenuBtn";
import SideDrawer from "../sideDrawer/SideDrawer";
import HeaderIcons from "./headerIcons/HeaderIcons";
import AuthContext from "../../../contexts/authContext/authContext";

const AppHeader: React.FC = () => {
  const {user}= useContext(AuthContext)

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [animatedValue] = useState(new Animated.Value(-300));

  const openDrawer = () => {
    setIsDrawerOpen(true);
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(animatedValue, {
      toValue: -300,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsDrawerOpen(false);
    });
  };

  return (
    <View style={globalStyle.header}>
      <View style={{ flexDirection: "row" }}>
        <MenuButton onPress={openDrawer} />
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ fontWeight: "400", marginLeft: 10, fontSize: 15 }}>
            Halishahar
          </Text>
          <Text style={globalStyle.posttitle}>{user?.retailer_name}</Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: Colors.light.yellow,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 30,
              gap: 5,
              marginLeft: 10,
              marginTop: 4,
              width:150
            }}
          >
            <Text style={{ fontWeight: "500" }}>Tap for balance</Text>
            <Text
              style={{
                backgroundColor: "white",
                borderRadius: 30,
                paddingHorizontal: 7,
                fontWeight: "900",
              }}
            >
              ৳
            </Text>
          </TouchableOpacity>
        </View>
        <SideDrawer
          isOpen={isDrawerOpen}
          onClose={closeDrawer}
          animatedValue={animatedValue}
        />
      </View>
      <HeaderIcons />
    </View>
  );
};

export default AppHeader;
