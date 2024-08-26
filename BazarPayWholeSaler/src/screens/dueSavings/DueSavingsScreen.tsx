import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SrDrpage from '../../components/main/srDrPage/SrDrpage';
import SuplyerPage from '../../components/main/suplyerPage/suplyerPage';

const Tab = createMaterialTopTabNavigator();

const DueSavingsScreen = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="SR/DR/Customer" component={SrDrpage} />
        <Tab.Screen name="suppliers" component={SuplyerPage} />
      </Tab.Navigator>
  );
};

export default DueSavingsScreen;
