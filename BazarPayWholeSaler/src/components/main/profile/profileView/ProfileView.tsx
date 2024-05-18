import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Colors from "../../../../constants/Colors";
import { Foundation } from "@expo/vector-icons";

const ProfileView = () => {
  return (
    <View style={{ alignItems: "center", marginBottom: 20 }}>
      <Image
        source={{
          uri: "https://img.icons8.com/?size=512&id=108652&format=png",
        }}
        style={{ width: 120, height: 120, borderRadius: 50 }}
      />
      <View style={{ marginLeft: 10, alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
          Your Name
        </Text>
        <Text style={{ fontSize: 14, marginTop: 5 }}>nomanroni@gmail.com</Text>
        <TouchableOpacity
          onPress={() => console.log("Show Details button clicked")}
          style={{
            marginTop: 10,
            paddingHorizontal: 10,
            paddingVertical: 7,
            borderRadius: 20,
            width: "auto",
            backgroundColor: Colors.light.cardColor,
          }}
        >
          <Text style={{ color: Colors.light.text }}>
            <Foundation name="star" size={20} color={Colors.light.primary} />
            &nbsp;0 Points
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileView;
