import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Colors from "../../../constants/Colors";
import { ISmallCardProps } from "../../../@types/props/SmallCard.props";
import { longCardStyle } from "./LongCrad.style";
import {Entypo} from "@expo/vector-icons";

const LongCard = ({ title, icon: Icon, subTitle }: ISmallCardProps) => {
  return (
    <TouchableOpacity style={longCardStyle.card}>
      <View style={{ alignItems: "center", flexDirection: "row",gap:8 }}>
        {Icon}
        <View style={{flexDirection:"column"}}>
          <Text style={{ fontWeight: "600", fontSize:16, color: Colors.light.text }}>
            &nbsp;{title}
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center", flexDirection: "row", gap:5 }}>
        <Entypo name="chevron-thin-right" size={18} color={Colors.light.secondary} />
      </View>
    </TouchableOpacity>
  );
};

export default LongCard;
