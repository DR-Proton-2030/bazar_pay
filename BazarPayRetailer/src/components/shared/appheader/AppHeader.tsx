import React, { useContext, useState } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Colors from "../../../constants/Colors";
import { globalStyle } from "../../../globalStyles/globalStyles";
import MenuButton from "../menuBtn/MenuBtn";
import SideDrawer from "../sideDrawer/SideDrawer";
import HeaderIcons from "./headerIcons/HeaderIcons";
import AuthContext from "../../../contexts/authContext/authContext";

const AppHeader = () => {
  const { user } = useContext(AuthContext);
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
    <LinearGradient
      colors={['#ffd280', 'transparent']}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.1, y: 0.4 }}
      style={globalStyle.header}
    >
      <View style={{ flexDirection: "row" }}>
        <MenuButton onPress={openDrawer} />
        <View style={{ display: "flex", flexDirection: "column" }}>
          {
            user ?
            <>
              <Text style={{ fontWeight: "400", marginLeft: 10, fontSize: 15 }}>
                {user?.retailer_name}
              </Text>
              <Text style={globalStyle.posttitle}>{user?.contact_name}</Text>
            </>
              :
              <>
              <Text style={{ fontWeight: "400", marginLeft: 10, fontSize: 15 }}>
                TestCompany
              </Text>
              <Text style={globalStyle.posttitle}>Guest User</Text>
              </>
          }

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
              width: 150,
              elevation:2
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
    </LinearGradient>
  );
};

export default AppHeader;
