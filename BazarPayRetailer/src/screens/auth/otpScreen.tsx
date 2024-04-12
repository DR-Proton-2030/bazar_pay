import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { useNavigation } from "expo-router";
import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
// import PhoneInput from "react-native-phone-number-input";
import OtpBtn from "../../components/shared/otpScreen/button/OtpBtn";
import SocialLink from "../../components/shared/otpScreen/socialLink/SocialLink";
import TopImg from "../../components/shared/otpScreen/topImage/TopImg";
import Colors from "../../constants/Colors";

const OtpScreen = () => {
  const [value, setValue] = useState("");
  const navigation: any = useNavigation();
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  // const phoneInput = useRef<PhoneInput>(null);
  const handleNavigate = () => {
    navigation.navigate("homePage");
  };
  const handlevarified = () => {
    // const checkValid = phoneInput.current?.isValidNumber(value);
    // setShowMessage(true);
    // setValid(checkValid ? checkValid : false);
    handleNavigate();
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <TopImg />
      <View style={{ paddingVertical: 20 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 26,
            fontWeight: "500",
            paddingHorizontal: 80,
            lineHeight: 40,
            marginBottom: 15,
          }}
        >
          Get your groceries with Bazarpay.xyz
        </Text>
        <View style={{ marginLeft: "auto", marginRight: "auto" }}>
          {/* <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withShadow
            autoFocus
          /> */}
          {showMessage && (
            <Text
              style={{
                color: "green",
                marginTop: 1,
                fontWeight: "500",
                textAlign: "left",
              }}
            >
              <MaterialCommunityIcons
                name="check-decagram"
                size={15}
                color="green"
              />{" "}
              {valid ? "Verified" : "wrong"}
            </Text>
          )}
          <OtpBtn onPress={handlevarified} />
          <Text
            style={{
              fontWeight: "700",
              textAlign: "center",
              // paddingLeft: 10,
              marginTop: 10,
              marginBottom: 5,
            }}
          >
            Have a Referral Code?
          </Text>
          <SocialLink />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  flagContainer: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
  countryCode: {
    fontSize: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    fontSize: 16,
  },
});

export default OtpScreen;
