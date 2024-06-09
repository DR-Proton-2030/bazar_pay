import React, { useState, useRef, useContext } from "react";
import {
  View,
  Text,
  Animated,
  Vibration,
  TouchableOpacity,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";
import { OtpInput } from "react-native-otp-entry";
import Colors from "../../../constants/Colors";

const tempUri =
  "https://img.freepik.com/free-photo/3d-render-secure-login-password-illustration_107791-16640.jpg?t=st=1717929713~exp=1717933313~hmac=157ad2907e7eb0411c0520577b9be72e32e30779f8138d01969324b35856b974&w=740";

const OtpModal = ({ verifyOtp, originalOtp, setOtp, handleBack }: any) => {
  const navigation = useNavigation<any>();
  const handleSetOtp = (text: string) => {
    setOtp(text);
    if (text !== originalOtp) {
      setFocusColor("red");
      shakeImage();
    }
    else {
      setFocusColor("green");
      verifyOtp();
    }
  };
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const [focusColor, setFocusColor] = useState("green");
  const shakeImage = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
    Vibration.vibrate(100);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", paddingTop: 50 }}>
      <Animated.Image
        style={[
          { height: 400, width: 400 },
          { transform: [{ translateX: shakeAnimation }] },
        ]}
        source={{ uri: tempUri }}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
            color: "black",
            textAlign: "center",
          }}
        >
          আপনার OTP কোড লিখুন
        </Text>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 14,
            color: "gray",
            textAlign: "center",
            width: "60%",
          }}
        >
          আমরা আপনার ফোন নম্বরে একটি OTP কোড পাঠিয়েছি
        </Text>
      </View>
      <View style={{ paddingHorizontal: 50, marginTop: 20, gap: 20 }}>
        <OtpInput
          numberOfDigits={4}
          focusColor={focusColor}
          focusStickBlinkingDuration={400}
          onTextChange={(text) => {
            setFocusColor("green");
          }}
          onFilled={(text) => handleSetOtp(text)}
          theme={{
            filledPinCodeContainerStyle: {
              borderColor: focusColor,
            },
          }}
        />
        <TouchableOpacity style={{
          backgroundColor: Colors.light.orange,
          borderRadius: 40,
          paddingVertical: 10,
        }} onPress={verifyOtp}>
          <Text style={{
            textAlign: "center", color: "white",
            fontSize: 19,
          }}>Verify & Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: Colors.light.cardColor,
          borderRadius: 40,
          paddingVertical: 10,
        }} onPress={handleBack}>
          <Text style={{
            textAlign: "center", color: "black",
            fontSize: 19,
          }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default OtpModal;
