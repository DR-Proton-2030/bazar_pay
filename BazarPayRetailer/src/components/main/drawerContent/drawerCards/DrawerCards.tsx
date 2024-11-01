import React from "react";
import { TouchableOpacity, View, Text, Dimensions, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../../../constants/Colors";

const DrawerCards = ({
  Icon,
  iconName,
  iconSize,
  iconColor,
  text,
  onPress,
  onClose
}: any) => {

  const onclick =()=>{
    onClose()
    onPress()
  }
  return (
    <TouchableOpacity
      onPress={onclick}
      style={{
        borderBottomWidth: 1,
        borderColor: Colors.light.border,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center", // Center the items vertically
        paddingVertical: 10, // Add padding for better touchability
        marginTop: 5,
        width:"100%"
      }}
    >
      <Text style={{ fontSize: 17, fontWeight: "400" }}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
        &nbsp; &nbsp; {text}
      </Text>
      <Entypo
        name="chevron-small-right"
        size={24}
        color={Colors.light.border}
      />
    </TouchableOpacity>
  );
};

export default DrawerCards;
