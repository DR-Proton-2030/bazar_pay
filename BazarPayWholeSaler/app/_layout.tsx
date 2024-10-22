import { useContext, useEffect, useState } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Entypo } from "@expo/vector-icons";
import { PaperProvider } from "react-native-paper";
import { Text } from "react-native";
import Colors from "../src/constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import WholesalerContextProvider from "../src/contexts/wholesalerContext/Provider";
import AuthContextProvider from "../src/contexts/authContext/Provider";
import AuthContext from "../src/contexts/authContext/authContext";
import WholesalerContext from "../src/contexts/wholesalerContext/wholesalerContext";
import React from "react";

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
  return (
    <PaperProvider>
      <WholesalerContextProvider>
        <AuthContextProvider>
          <GestureHandlerRootView>
            <RootLayoutNav />
          </GestureHandlerRootView>
        </AuthContextProvider>
      </WholesalerContextProvider>
    </PaperProvider>
  );
}

function RootLayoutNav() {
  const { user } = useContext(AuthContext);
  const { wholesaler } = useContext(WholesalerContext);
  const [initialRouteName, setInitialRouteName] =
    useState<string>("wellcomePage");
  // useEffect(() => {
  //   if (user && wholesaler) {
  //     setInitialRouteName("homePage");
  //   }
  // }, [user, wholesaler]);
  return (
    <Stack
      initialRouteName={initialRouteName}
      screenOptions={{ headerShadowVisible: false }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          statusBarStyle: "dark",
          statusBarTranslucent: true,
        }}
      />
      <Stack.Screen
        name="wellcomePage"
        options={{ headerShown: false, statusBarTranslucent: true }}
      />
      <Stack.Screen
        name="otpPage"
        options={{ headerShown: false, statusBarTranslucent: true }}
      />
      <Stack.Screen
        name="signInPage"
        options={{ headerShown: false, statusBarTranslucent: true }}
      />
      <Stack.Screen
        name="signUp"
        options={{
          headerShown: false,
          statusBarTranslucent: true,
          statusBarStyle: "dark",
        }}
      />
      <Stack.Screen
        name="conformationPage"
        options={{
          headerShown: false,
          statusBarTranslucent: true,
          statusBarStyle: "dark",
        }}
      />
      <Stack.Screen
        name="passwordSet"
        options={{ headerShown: false, statusBarTranslucent: true }}
      />
      <Stack.Screen
        name="homePage"
        options={{ headerShown: false, statusBarStyle: "dark" ,statusBarTranslucent: true }}
      />
      <Stack.Screen
        name="stockPage"
        options={{ headerShown: false, statusBarStyle: "dark" }}
      />
      <Stack.Screen
        name="QrPage"
        options={{ headerShown: false, statusBarTranslucent: true }}
      />
      <Stack.Screen
        name="profilePage"
        options={{ headerShown: false, statusBarTranslucent: true }}
      />
      <Stack.Screen
        name="(products)"
        options={{
          headerShown: true,
          headerTitleAlign: "center",
           statusBarStyle: "dark",
          statusBarTranslucent: true,
          headerTitle: () => (
            <Text style={{ textAlign: "center", fontSize: 20 }}>
              পণ্যের লিস্ট
            </Text>
          ),
          headerRight: () => (
            <Entypo
              name="dots-three-vertical"
              size={20}
              color={Colors.light.primary}
            />
          ),
        }}
      />
      <Stack.Screen
        name="(orders)"
        options={{
          headerShown: true,
          statusBarTranslucent: true,
          statusBarStyle: "dark",
          headerTitle: () => (
            <Text style={{ textAlign: "center", fontSize: 20 }}>
              Order List
            </Text>
          ),
        }}
      />

      <Stack.Screen
        name="productDetailsPage"
        options={{ headerShown: false, statusBarTranslucent: true }}
      />
      <Stack.Screen
        name="ManualAddProduct"
        options={{ headerShown: false, statusBarTranslucent: true }}
      />
      <Stack.Screen
        name="QuickAddProduct"
        options={{
          headerShown: true,
          statusBarTranslucent: true,
          statusBarStyle: "dark",
          headerTitle: () => (
            <Text style={{ textAlign: "center", fontSize: 20 }}>
              
              Upload Product
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="lowStock"
        options={{
          headerShown: true,
          statusBarTranslucent: true,
          statusBarStyle: "dark",
          headerTitle: () => (
            <Text style={{ textAlign: "center", fontSize: 20 }}>
              
              Upload Product
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="categoryPage"
        options={{
          headerShown: true,
          statusBarTranslucent: true,
          statusBarStyle: "dark",
          headerTitle: () => (
            <Text style={{ textAlign: "center", fontSize: 20 }}>
              Choose Category
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="dueSavings"
        options={{
          headerShown: true,
          statusBarTranslucent: true,
          statusBarStyle: "dark",
          headerTitle: () => (
            <Text style={{ textAlign: "center", fontSize: 20 }}>
              Due / Savings
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="orderDetails"
        options={{
          headerShown: true,
          statusBarTranslucent: true,
          statusBarStyle: "dark",
          headerTitle: () => (
            <Text style={{ textAlign: "center", fontSize: 20 }}>
              Order Details
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="orderSuccess"
        options={{
          headerShown: false,
          statusBarTranslucent: true,
          statusBarStyle: "dark",
          
        }}
      />
      <Stack.Screen
        name="subcategoryPage"
        options={{
          headerShown: true,
          statusBarTranslucent: true,
          statusBarStyle: "dark",
          headerTitle: () => (
            <Text style={{ textAlign: "center", fontSize: 20 }}>
              Choose Sub Category
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="paymentDue"
        options={{
          headerShown: true,
          statusBarTranslucent: true,
          statusBarStyle: "dark",
          headerTitle: () => (
            <Text style={{ textAlign: "center", fontSize: 20 }}>
            Payment Details
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="brandPage"
        options={{
          headerShown: true,
          statusBarTranslucent: true,
          statusBarStyle: "dark",
          headerTitle: () => (
            <Text style={{ textAlign: "center", fontSize: 20 }}>
              Choose a Brand
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="quickProductList"
        options={{
          headerShown: true,
          statusBarTranslucent: true,
          statusBarStyle: "dark",
          headerTitle: () => (
            <Text style={{ textAlign: "center", fontSize: 20 }}>
              Choose a Product
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="RatingsPage"
        options={{ headerShown: false, statusBarTranslucent: true }}
      />
      <Stack.Screen
        name="passwordReset"
        options={{ headerShown: false, statusBarTranslucent: true }}
      />
    </Stack>
  );
}
