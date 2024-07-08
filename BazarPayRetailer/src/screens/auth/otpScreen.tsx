import { useNavigation } from "expo-router";
import React, { useRef, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import OtpBtn from "../../components/shared/otpScreen/button/OtpBtn";
import SocialLink from "../../components/shared/otpScreen/socialLink/SocialLink";
import TopImg from "../../components/shared/otpScreen/topImage/TopImg";
import Colors from "../../constants/Colors";
import PhoneInput from "react-native-phone-number-input";
import { api } from "../../utils/api";

const OtpScreen = () => {
  const [value, setValue] = useState("");
  const navigation = useNavigation<any>();
  const phoneInput = useRef<PhoneInput>(null);

  const handleGetOtp = async () => {
    try {
      const filter = {
        phone: phoneInput?.current?.state.number
      };
      const response = await api.auth.getLoginOtp(filter);
      navigation.navigate("otpInput", { otp: response?.otp, result: response?.result });
    } catch (error) {
      console.log("error", error);
    }
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
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            withShadow
            autoFocus
          />
          <OtpBtn onPress={handleGetOtp} />
          <Text
            style={{
              fontWeight: "700",
              textAlign: "center",
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

export default OtpScreen;
