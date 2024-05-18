import React, { useState } from "react";
import { View, Text, Animated } from "react-native";

import Colors from "../../../constants/Colors";
import { globalStyle } from "../../../globalStyles/globalStyles";
import MenuButton from "../menuBtn/MenuBtn";
import SideDrawer from "../sideDrawer/SideDrawer";
import HeaderIcons from "./headerIcons/HeaderIcons";

const AppHeader: React.FC = () => {
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
            Hello,
          </Text>
          <Text style={globalStyle.posttitle}>Rafatul store</Text>
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
