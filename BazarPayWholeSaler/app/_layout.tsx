
import { useEffect } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import AppHeader from "../src/components/shared/appheader/AppHeader";
import { PaperProvider } from "react-native-paper";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "wellcomePage",
};

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return(
    <>
    <PaperProvider>
    <RootLayoutNav/>
    </PaperProvider>
    </>
  )
}


function RootLayoutNav() {

  return (
    <Stack>
      <Stack.Screen name="index"   options={{ headerShown: false,statusBarStyle:"dark" }} />
      <Stack.Screen name="wellcomePage" options={{ headerShown: false , statusBarTranslucent:true,}} />
      <Stack.Screen name="otpPage" options={{ headerShown: false , statusBarTranslucent:true,}} />
      <Stack.Screen name="signInPage" options={{ headerShown: false , statusBarTranslucent:true,}} />
      <Stack.Screen name="signUp"  options={{ headerShown: false , statusBarTranslucent:true,}} />
      <Stack.Screen
        name="homePage"
        options={{ headerShown: false ,statusBarStyle:"dark"}}
      />
      <Stack.Screen name="QrPage"  options={{ headerShown: false , statusBarTranslucent:true,}} />
      <Stack.Screen name="profilePage"  options={{ headerShown: false , statusBarTranslucent:true,}} />
      <Stack.Screen
        name="productDetailsPage"
      />
      <Stack.Screen name="RatingsPage"  options={{ headerShown: false , statusBarTranslucent:true,}}/>
      <AppHeader />
    </Stack>
  );
}
