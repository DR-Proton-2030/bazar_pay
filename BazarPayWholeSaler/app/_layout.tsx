import { useEffect } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Entypo } from "@expo/vector-icons";
import { PaperProvider } from "react-native-paper";
import { Text } from "react-native";
import Colors from "../src/constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "wellcomePage",
};

export default function RootLayout() {
  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    };

    hideSplashScreen();
  }, []);

  return (
    <PaperProvider>
      <GestureHandlerRootView>
        <RootLayoutNav />
      </GestureHandlerRootView>
    </PaperProvider>
  );
}

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, statusBarStyle: "dark" }}
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
        options={{ headerShown: false, statusBarTranslucent: true }}
      />
      <Stack.Screen
        name="homePage"
        options={{ headerShown: false, statusBarStyle: "dark" }}
      />
      <Stack.Screen
        name="stockPage"
        options={{ headerShown: true, statusBarStyle: "dark" }}
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
        name="productDetailsPage"
        options={{ headerShown: false, statusBarTranslucent: true }}
      />
      <Stack.Screen
        name="ManualAddProduct"
        options={{ headerShown: false, statusBarTranslucent: true }}
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
