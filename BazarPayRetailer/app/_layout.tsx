import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme, View,Text } from "react-native";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppHeader from "../src/components/shared/appheader/AppHeader";
import AuthContextProvider from "../src/contexts/authContext/Provider";
import ProductCartContextProvider from "../src/contexts/productCartContext/Provider";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "wellcomePage",
};

export default function RootLayout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthContextProvider>
          <ProductCartContextProvider>
          <RootLayoutNav />
          </ProductCartContextProvider>
      </AuthContextProvider>
    </GestureHandlerRootView>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false ,statusBarTranslucent:false,statusBarStyle:"dark" }} />
      <Stack.Screen name="wellcomePage" options={{ headerShown: false }} />
      <Stack.Screen name="otpPage" options={{  headerShown: false ,statusBarTranslucent:false,statusBarStyle:"dark" }} />
      <Stack.Screen name="otpInput" options={{  headerShown: false ,statusBarTranslucent:false,statusBarStyle:"dark" }} />
      <Stack.Screen name="signInPage" options={{ headerShown: false }} />
      <Stack.Screen name="signUp"
      options={{
        headerShown: true,
        statusBarTranslucent: true,
        statusBarStyle: "dark",
        headerTitle: () => (
          <Text style={{ textAlign: "center", fontSize: 20 }}>
           Create Account
          </Text>
        ),
      }} />
      <Stack.Screen name="wholesallersList"
      options={{
        headerShown: false,
        statusBarTranslucent: true,
        statusBarStyle: "dark",
       
      }} />
      <Stack.Screen name="AllProducts"
      options={{
        headerShown: false,
        statusBarTranslucent: true,
        statusBarStyle: "dark",
      }} />
      <Stack.Screen
        name="homePage"
        options={{ headerShown: false,statusBarTranslucent:false,statusBarStyle:"dark" }}
      />
      <Stack.Screen name="QrPage" options={{ headerShown: false }} />
      <Stack.Screen name="profilePage" options={{ headerShown: false }} />
      <Stack.Screen name="payments" options={{ headerShown: false }} />
      <Stack.Screen name="cart" options={{ headerShown: false }} />
      <Stack.Screen
        name="productDetailsPage"
        options={{ headerShown: false , statusBarStyle: "dark"}}
      />
      <Stack.Screen name="RatingsPage" options={{ headerShown: false }} />
      <AppHeader />
    </Stack>
  );
}
