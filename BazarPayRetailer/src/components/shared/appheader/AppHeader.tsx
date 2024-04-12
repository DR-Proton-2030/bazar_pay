import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { globalStyle } from "../../../globalStyles/globalStyles";
import Colors from "../../../constants/Colors";

const AppHeader = () => {
  return (
    <View style={globalStyle.header}>
      <View style={{ flexDirection: "row" }}>
        {/* <TouchableOpacity onPress={() => {}}>
          <Ionicons name="menu" size={38} color={Colors.light.orange} />
        </TouchableOpacity> */}

        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text
            style={{
              fontWeight: "400",
              marginLeft: 10,
              fontSize: 15,
            }}
          >
            Halishahar
          </Text>
          <Text style={globalStyle.posttitle}>Rafatul store</Text>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: Colors.light.yellow,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 30,
              gap: 5,
              marginLeft: 10,
              marginTop: 4,
            }}
          >
            <Text style={{ fontWeight: "500" }}>Tap for balance</Text>
            <Text
              style={{
                backgroundColor: "white",
                borderRadius: 30,
                paddingHorizontal: 7,
                fontWeight: "900",
              }}
            >
              ৳
            </Text>
          </View>
        </View>
        <TouchableOpacity style={{ display: "flex" }} onPress={() => {}}>
          {/* <Icon name="return-down-back" size={30} color="white" /> */}
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", gap: 16 }}>
        <Feather name="search" size={24} color="black" />
        <AntDesign name="Trophy" size={24} color="black" />
        <Octicons name="bell-fill" size={24} color="black" />
      </View>
    </View>
  );
};

export default AppHeader;
