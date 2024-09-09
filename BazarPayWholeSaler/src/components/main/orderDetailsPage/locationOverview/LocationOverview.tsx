import React from "react";
import { View, Text ,TouchableOpacity} from "react-native";
import Colors from "../../../../constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const LocationOverview = ({retailer}:any) => {
  return (
    <View style={{ marginTop: 20, paddingHorizontal: 5 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          color: Colors.light.text,
          marginBottom: 7,
        }}
      >
        Delivery Location
      </Text>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          gap: 15,
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.light.grayBg,
            height: 50,
            width: 50,
            borderRadius: 10,
            padding: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="pin-drop" size={24} color="blue" />
        </View>
        <View style={{ width: "60%" }}>
          <Text style={{ fontSize: 16, fontWeight: "700" }}>
            Kolkata, Jhautala
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "700",
              color: Colors.light.lightText,
            }}
          >
            700156,West Bengal
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LocationOverview;
