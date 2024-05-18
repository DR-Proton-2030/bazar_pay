import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../../../../constants/Colors";

const OtherLinks = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        marginBottom: 20,
        paddingHorizontal: 40,
        marginTop: 40,
        gap: 10,
      }}
    >
      {/* Wishlist */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginRight: 20,
          gap: 10,
        }}
      >
        <Feather
          name="heart"
          size={24}
          color="red"
          style={{
            marginRight: 5,
            backgroundColor: Colors.light.cardColor,
            padding: 5,
            borderRadius: 50,
          }}
        />
        <Text style={{ fontSize: 18, fontWeight: "500" }}>Wishlist</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginRight: 20,
          gap: 10,
        }}
      >
        <Feather
          name="bell"
          size={24}
          color="orange"
          style={{
            marginRight: 5,
            backgroundColor: Colors.light.cardColor,
            padding: 5,
            borderRadius: 50,
          }}
        />
        <Text style={{ fontSize: 18, fontWeight: "500" }}>Notifications</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginRight: 20,
          gap: 10,
        }}
      >
        <Feather
          name="lock"
          size={24}
          color="blue"
          style={{
            marginRight: 5,
            backgroundColor: Colors.light.cardColor,
            padding: 5,
            borderRadius: 50,
          }}
        />
        <Text style={{ fontSize: 18, fontWeight: "500" }}>Change Password</Text>
      </View>
    </View>
  );
};

export default OtherLinks;
