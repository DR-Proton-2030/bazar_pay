import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../../../../constants/Colors";

const QuestionCard = ({ color, text, name, time }: any) => {
  return (
    <View
      style={{
        width: "100%",
        height: "auto",
        marginTop: 10,
        borderRadius: 5,
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <MaterialIcons name="chat-bubble-outline" size={24} color={color} />
          <View>
            <Text style={{ fontSize: 15, fontWeight: "700" }}>{text}</Text>

            <Text style={{ fontSize: 11, fontWeight: "400" }}>{name}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            marginTop: -10,
            alignItems: "center",
          }}
        >
          <Text>{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default QuestionCard;
