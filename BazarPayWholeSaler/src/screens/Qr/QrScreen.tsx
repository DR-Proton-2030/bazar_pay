import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import ProductHeader from "../../components/main/productDetails/productHeader/ProductHeader";
import Colors from "../../constants/Colors";
import AuthContext from "../../contexts/authContext/authContext";

const QrScreen = () => {
  const {user}= useContext(AuthContext)
  return (
    <View style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <ProductHeader text="My QR" />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30%",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 20 }}>
{user?.owner_name}
        </Text>
        <Text style={{ fontSize: 19, marginBottom: 40 }}>
        {user?.owner_email}
        </Text>
        <MaterialIcons
          name="qr-code-scanner"
          size={204}
          color={Colors.light.primary}
        />
        <Text
          style={{ fontSize: 19, color: Colors.light.primary, marginTop: 20 }}
        >
          SCAN THE QR CODE
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.light.primary,
            height: 50,
            width: "70%",
            borderRadius: 5,
            justifyContent: "center",
            marginTop: 40,
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <MaterialIcons
            name="download"
            size={24}
            color={Colors.light.background}
          />

          <Text
            style={{
              color: Colors.light.background,
              textAlign: "center",
              fontSize: 20,
              fontWeight: "700",
              justifyContent: "center",
            }}
          >
            Download the QR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QrScreen;
