import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Colors from "../../../constants/Colors";
import { smallCardStyle } from "./SmallCard.style";
import { ISmallCardProps } from "../../../@types/props/SmallCard.props";

const SmallCard = ({ title, icon: Icon, subTitle }: ISmallCardProps) => {
  return (
    <TouchableOpacity style={smallCardStyle.card}>
      <View style={{ alignItems: "center", flexDirection: "row", gap: 8 }}>
        {Icon}
        <View style={{flexDirection:"column"}}>
          <Text style={{ fontWeight: "500", fontSize:16, color: Colors.light.lightText }}>
            &nbsp;{title}
          </Text>
          <Text style={{fontWeight: "200",fontSize:14 }}>
            &nbsp;{subTitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SmallCard;