import { View, Text } from "react-native";
import React from "react";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";

import { withLayoutContext } from "expo-router";

const {Navigator} = createMaterialTopTabNavigator()

const MaterialTopTabs = withLayoutContext<any, any, any, any>(Navigator);

const Layout = () => {
    return (
      <MaterialTopTabs
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: { width: 140 }, // Set the desired tab width here
        }}
      ></MaterialTopTabs>
    );
};

export default Layout;
