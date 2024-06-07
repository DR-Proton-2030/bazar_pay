import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { useColorScheme, View } from "react-native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppHeader from "../src/components/shared/appheader/AppHeader";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "wellcomePage",
};

export default function RootLayout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={DefaultTheme}>
        <View style={{ flex: 1 }}>
          <RootLayoutNav />
        </View>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="wellcomePage" options={{ headerShown: false }} />
      <Stack.Screen name="otpPage" options={{ headerShown: false }} />
      <Stack.Screen name="signInPage" options={{ headerShown: false }} />
      <Stack.Screen name="signUp" options={{ headerShown: false }} />
      <Stack.Screen
        name="homePage"
        independent={true}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="QrPage" options={{ headerShown: false }} />
      <Stack.Screen name="profilePage" options={{ headerShown: false }} />
      <Stack.Screen
        name="productDetailsPage"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="RatingsPage" options={{ headerShown: false }} />
      <AppHeader />
    </Stack>
  );
}
