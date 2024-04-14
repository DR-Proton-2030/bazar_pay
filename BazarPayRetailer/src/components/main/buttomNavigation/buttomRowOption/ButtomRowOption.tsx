import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";

export const BottomRowOption: React.FC<{
  icon: string;
  onPress: () => void;
  active: boolean;
}> = ({ icon, onPress, active }) => {
  let IconComponent;
  switch (icon) {
    case "arrow-right-arrow-left":
      IconComponent = FontAwesome6;
      break;
    default:
      IconComponent = Feather;
      break;
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <IconComponent name={icon} size={24} color={active ? "orange" : "gray"} />
    </TouchableOpacity>
  );
};
