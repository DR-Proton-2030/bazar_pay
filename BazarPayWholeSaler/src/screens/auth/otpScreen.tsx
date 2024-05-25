import React, { useState, useRef, useContext } from "react";
import {
  View,
  Text,
  Animated,
  Vibration,
  TouchableOpacity,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import { globalStyle } from "../../globalStyles/globalStyles";
import { Button } from "react-native-paper";
import { IOtpProps } from "../../@types/props/otp.props";

const tempUri =
  "https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5488.jpg?t=st=1716275739~exp=1716279339~hmac=b4b4f099e54c5339b627ea860a59e3864803651c9491dc05b6214e86009e46c7&w=740";

const OtpPage = ({ verifyOtp, originalOtp, setOtp,handleBack}: IOtpProps) => {
  const navigation: any = useNavigation();
  const handleSetOtp = (text:string) => {
    setOtp(text);
    if (text !== originalOtp) {
      shakeImage();
      setFocusColor("red");
    }
	else{
		setFocusColor("green");
		verifyOtp();
	}
  };
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const [focusColor, setFocusColor] = useState("green");

  // console.log("Data from params:", route.params);

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
            color: Colors.light.lightText,
            textAlign: "center",
          }}
        >
          আপনার যাচাইকরণ কোড লিখুন
        </Text>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 14,
            color: Colors.light.lightText,
            textAlign: "center",
            width: "60%",
          }}
        >
          আমরা আপনার ফোন নম্বরে একটি যাচাইকরণ কোড পাঠিয়েছি
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
        <Button style={globalStyle.blueButton} onPress={verifyOtp}>
          <Text style={globalStyle.signInButtonText}>Verify & Continue</Text>
        </Button>
        <Button style={globalStyle.lightVioletButton} onPress={handleBack}>
          <Text style={globalStyle.lightVioletButtonText}>Back</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default OtpPage;
