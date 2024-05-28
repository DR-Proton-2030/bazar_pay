import { View, Text, Image, StatusBar } from "react-native";
import React, { useContext, useEffect } from "react";
import AuthContext from "../../contexts/authContext/authContext";
import WholesalerContext from "../../contexts/wholesalerContext/wholesalerContext";
import { useNavigation } from "expo-router";
import Colors from "../../constants/Colors";

const SplashScreen = () => {
  const { user } = useContext(AuthContext);
  const { wholesaler } = useContext(WholesalerContext);
  const navigation = useNavigation<any>();
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (user && wholesaler) {
        navigation.replace("homePage");
      } else {
        navigation.replace("wellcomePage");
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [user, wholesaler]);
  return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.light.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <StatusBar translucent={true} backgroundColor={"red"} /> */}
        <Image
          source={require("../../../assets/adaptive-icon.png")}
          style={{ height: 180, width: 180 }}
        />
      </View>
  );
};

export default SplashScreen;
