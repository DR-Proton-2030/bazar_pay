import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { useColorScheme, View, TouchableOpacity, Text } from "react-native";
import { Stack } from "expo-router";
import DrawerLayout from "react-native-gesture-handler/DrawerLayout";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { DrawerContent } from "../src/components/main/drawerContent/DrawerContent";
import AppHeader from "../src/components/shared/appheader/AppHeader";
import Colors from "../src/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "wellcomePage",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  const toggleDrawer = () => {
    console.log("toogles");
    setIsDrawerOpen((prevState) => !prevState); // Toggle the isDrawerOpen state
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={DefaultTheme}>
        <View style={{ flex: 1 }}>
          <DrawerLayout
            drawerWidth={300}
            drawerPosition="left"
            renderNavigationView={() => <DrawerContent />}
            drawerOpen={isDrawerOpen}
            drawerClose={() => setIsDrawerOpen(false)}
          >
            <RootLayoutNav toggleDrawer={() => toggleDrawer} />
          </DrawerLayout>
        </View>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

function RootLayoutNav({ toggleDrawer }: any) {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="wellcomePage" options={{ headerShown: false }} />
      <Stack.Screen name="otpPage" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
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
      <AppHeader toggleDrawer={toggleDrawer} />
    </Stack>
  );
}
