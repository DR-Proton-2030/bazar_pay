import { View, Text } from "react-native";
import React from "react";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import {ParamListBase, TabNavigaionState} from "@react-navigation/native"

import { withLayoutContext } from "expo-router";

const {Navigator} = createMaterialTopTabNavigator()

const MaterialTopTabs = withLayoutContext<any, any, any, any>(Navigator);

const Layout = () => {
    return (
        <MaterialTopTabs></MaterialTopTabs>
    );
};

export default Layout;
