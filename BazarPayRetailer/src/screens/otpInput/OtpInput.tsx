import React, { useState, useRef, useContext } from "react";
import {
  View,
  Text,
  Animated,
  Vibration,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { OtpInput } from "react-native-otp-entry";
import Colors from "../../constants/Colors";
import AuthContext from "../../contexts/authContext/authContext";
import { useNavigation } from "expo-router";

const tempUri =
  "https://img.freepik.com/free-photo/3d-render-secure-login-password-illustration_107791-16640.jpg?t=st=1717929713~exp=1717933313~hmac=157ad2907e7eb0411c0520577b9be72e32e30779f8138d01969324b35856b974&w=740";

const OtpInputPage = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const {setUser} = useContext(AuthContext)
  const { otp, result } = route.params;
  const [focusColor, setFocusColor] = useState("green");
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  
  const verifyOtp = () => {
    console.log("Otp correct")
    setUser(result)
    navigation.navigate("homePage")
    };

  const handleSetOtp = (text: string) => {
    if (text !== otp) {
      setFocusColor("red");
      shakeImage();
    } else {
      setFocusColor("green");
      verifyOtp();

    }
  };

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
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
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
          onTextChange={() => {
            setFocusColor("green");
          }}
          onFilled={(text: string) => handleSetOtp(text)}
          theme={{
            filledPinCodeContainerStyle: {
              borderColor: focusColor,
            },
          }}
        />

        {false ? (
          <TouchableOpacity
            style={{
              backgroundColor: Colors.light.orange,
              borderRadius: 40,
              paddingVertical: 10,
            }}
          >
            <ActivityIndicator color={"white"} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: Colors.light.orange,
              borderRadius: 40,
              paddingVertical: 10,
            }}
            onPress={()=>handleSetOtp}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 19,
              }}
            >
              Verify & Continue
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={{
            backgroundColor: Colors.light.cardColor,
            borderRadius: 40,
            paddingVertical: 10,
          }}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={{
              textAlign: "center",
              color: "black",
              fontSize: 19,
            }}
          >
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default OtpInputPage;
