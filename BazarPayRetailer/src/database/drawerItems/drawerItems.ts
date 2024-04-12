import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import Colors from "../../constants/Colors";

interface DrawerItem {
  Icon: any;
  iconName: string;
  iconSize: number;
  iconColor: string;
  text: string;
  onPress: () => void;
}

export const createDrawerItems = (navigation: NavigationProp<any>) => {
  const drawerItems: DrawerItem[] = [
    {
      Icon: Feather,
      iconName: "edit",
      iconSize: 22,
      iconColor: Colors.light.orange,
      text: "Name Change",
      onPress: () => navigation.navigate("profilePage"),
    },
    {
      Icon: MaterialCommunityIcons,
      iconName: "qrcode",
      iconSize: 22,
      iconColor: Colors.light.orange,
      text: "My QR",
      onPress: () => navigation.navigate("QrPage"),
    },
    {
      Icon: AntDesign,
      iconName: "creditcard",
      iconSize: 22,
      iconColor: Colors.light.orange,
      text: "Payment Cards",
      onPress: () => console.log("Payment Cards clicked"),
    },
    {
      Icon: AntDesign,
      iconName: "infocirlceo",
      iconSize: 22,
      iconColor: Colors.light.orange,
      text: "Edit Information",
      onPress: () => console.log("Edit Information clicked"),
    },
  ];

  return drawerItems;
};
