import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Octicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../../../../constants/Colors";
import { useNavigation } from "expo-router";

interface Option {
  iconName: string;
  iconColor: string;
  text: string;
  route: string;
  
}

const OptionItem: React.FC<Option> = ({
  iconName,
  iconColor,
  text,
  route
}) => {
  let IconComponent: any = Octicons; // Default icon component
  if (iconName === "chat-bubble-outline") {
    IconComponent = MaterialIcons; // Use MaterialIcons for "Message" option
  }
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity onPress={()=> navigation.navigate(route)}>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            backgroundColor: Colors.light.cardColor,
            width: 60,
            height: 60,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconComponent name={iconName} size={24} color={iconColor} />
        </View>
        <Text style={{ textAlign: "center" }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OptionItem;
