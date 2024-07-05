import React, { useContext, useState } from "react";
import { View, Text, Animated, Image, TouchableOpacity } from "react-native";

import Colors from "../../../constants/Colors";
import { globalStyle } from "../../../globalStyles/globalStyles";
import MenuButton from "../menuBtn/MenuBtn";
import SideDrawer from "../sideDrawer/SideDrawer";
import HeaderIcons from "./headerIcons/HeaderIcons";
import WholesalerContext from "../../../contexts/wholesalerContext/wholesalerContext";
import AuthContext from "../../../contexts/authContext/authContext";

const AppHeader: React.FC = () => {
  const { user } = useContext(AuthContext);
  const { wholesaler } = useContext(WholesalerContext);
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
        <TouchableOpacity onPress={openDrawer}>
          <Image
            source={{ uri: wholesaler?.owner_phone }}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
        </TouchableOpacity>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ fontWeight: "400", marginLeft: 10, fontSize: 15 }}>
            {wholesaler?.wholesaler_name},
          </Text>
          <Text style={globalStyle.posttitle}>{user?.owner_name}</Text>
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
