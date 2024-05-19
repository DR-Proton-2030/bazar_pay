import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Colors from "../../../constants/Colors";
import { globalStyle } from "../../../globalStyles/globalStyles";

const Chip = ({ text, icon: Icon }: any) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[globalStyle.chipStyle,{
          backgroundColor: selected ? Colors.light.primary : "white",
          borderWidth: selected ? 0 : 1,
          
      }]}
    >
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        {Icon && <Icon />}
        <Text style={{ textAlign: "center", fontWeight: "600", color: selected ? "white" : Colors.light.primary }}>
          &nbsp;{text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Chip;
