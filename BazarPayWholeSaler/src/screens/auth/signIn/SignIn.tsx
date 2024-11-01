import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  StatusBar,
  StyleSheet,
  ScrollView,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { globalStyle } from "../../../globalStyles/globalStyles";
import Colors from "../../../constants/Colors";
import loginBg from "../../../../assets/images/loginBg.jpeg";
import SignInButton from "../../../components/main/auth/signinBtn/SignInBtn";
import InputField from "../../../components/shared/inputFields/InputFields";
import Header from "../../../components/main/auth/header/Header";
import PasswordToggle from "../../../components/shared/passwordToggle/PasswordToggle";
import SignInCongratsModal from "../../../components/main/auth/signInCongratsModal/SignInCongratsModal";
import { api } from "../../../utils/api";
import WholesalerContext from "../../../contexts/wholesalerContext/wholesalerContext";
import AuthContext from "../../../contexts/authContext/authContext";
import { OtpInput } from "react-native-otp-entry";
import { ActivityIndicator, Button } from "react-native-paper";
import LottieView from "lottie-react-native";

const SignIn = () => {
  const { setUser } = useContext(AuthContext);
  const { setWholesaler } = useContext(WholesalerContext);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true); // Modal visibility state
  const [isCongratsModalVisible, setIsCongratsModalVisible] = useState(true); // Congrats modal visibility state
  const [step, setStep] = useState("phone"); // Step state to switch between phone input and OTP input
  const [otp, setOtp] = useState(""); // State to hold the entered OTP
  const [serverOtp, setServerOtp] = useState(""); // State to hold the OTP from the server
  const screenHeight = Dimensions.get("screen").height;
  const navigation = useNavigation<any>();
  const [focusColor, setFocusColor] = useState("green");
  const [tempUser, setTempUser] = useState<any>();

  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  const handleSignIn = async () => {
    if (step === "phone") {

      try {
        if (phone.length === 0) {
          Alert.alert("Error", "Please enter your phone number");
        } else {
          setLoading(true)

          const payload = { phone };
          const response = await api.auth.getLoginOtp(payload);
        console.log("=====>temp user", response)

          setServerOtp(response?.otp);
          setTempUser(response?.result)
          setLoading(false)
          setStep("otp")
        }

      } catch (error: any) {
        console.log(error);
        setLoading(false)
        Alert.alert("Wrong Credentials", "Please enter your Phone number correctly");
      }
    } else if (step === "otp") {

      if (otp === serverOtp) {
        if (tempUser?.approval_status === "PENDING") {
          navigation.navigate("conformationPage");
        } else {
          setUser(tempUser);
          setWholesaler(tempUser);
          setIsCongratsModalVisible(true);
          navigation.navigate("homePage");
          console.log("=====>temp user", tempUser)
        }
      } else {
        Alert.alert("Error", "Entered OTP is incorrect.");
      }
    }
  };

  const [animationData2, setAnimationData2] = useState(null);
  const animationUrl2 = 'https://lottie.host/ac337969-6465-44e9-8148-6d665e7d90b4/nijpb60stB.json';


  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch(animationUrl2);
        const data = await response.json();
        setAnimationData2(data);
       
      } catch (error) {
        console.error('Error loading Lottie animation:', error);
      }
    };

    fetchAnimation();
  }, []);

useEffect(() => {
  if (step === "otp") {

    if (otp === serverOtp) {
      if (tempUser?.approval_status === "PENDING") {
        navigation.navigate("conformationPage");
      } else {
        setUser(tempUser);
        setWholesaler(tempUser);
        setIsCongratsModalVisible(true);
        navigation.navigate("homePage");
        console.log("=====>temp user", tempUser)
      }
    } 
  }
}, [otp])

  

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, }}
    >
      <ScrollView style={{ flex: 1, backgroundColor: Colors.light.background }} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ height: 500 }}>
          {animationData2 ? (
            <LottieView
              source={animationData2}
              autoPlay
              loop
              style={{ width: 400, height: 400,marginTop:50}} // Adjust size as needed
            />
          ) : (
            <ActivityIndicator size="small" color="#0000ff" />
          )}
        </View>
        <View style={{
        
          marginTop: -20,
        }}>

          <Header isSignup={false} />
          <View style={{ paddingHorizontal: 20, paddingVertical: 20, flex: 1 }}>
            {step === "phone" ? (

              <>

                <View style={[globalStyle.inputContainerView, { alignItems: "center", flexDirection: "row", justifyContent: "flex-start", gap: 10 }]} >
                  <Text style={{ fontSize: 18, color: Colors.light.blue }}>
                    +880
                  </Text>

                  <TextInput
                    placeholder={"Enter your Phone number"}
                    onChangeText={setPhone}
                    value={phone}
                    keyboardType="number-pad"
                    style={globalStyle.Textinput}
                  />
                </View>
                <Button style={[globalStyle.blueButton, { marginTop: 10 }]} onPress={handleSignIn}>
                  {
                    loading ?
                      <ActivityIndicator color="white" />
                      :
                      <Text style={globalStyle.signInButtonText}>
                        Get Otp</Text>
                  }

                </Button>
                <Button style={[globalStyle.lightVioletButton, { marginTop: 10 }]} onPress={() => navigation.goBack()}>
                  <Text style={globalStyle.lightVioletButtonText}>Back</Text>
                </Button>
              </>
            ) : (
              <>
                <View style={{ marginBottom: 20 }}>
                  <OtpInput
                    numberOfDigits={4}
                    focusColor={"green"}
                    focusStickBlinkingDuration={400}
                    onTextChange={setOtp}
                    onFilled={(text) => setOtp(text)}
                    theme={{
                      filledPinCodeContainerStyle: {
                        borderColor: focusColor,
                      },
                    }}
                  />
                </View>
                <Button style={[globalStyle.blueButton, { marginTop: 10 }]} onPress={handleSignIn}>
                  <Text style={globalStyle.signInButtonText}>Verify Otp</Text>
                </Button>
                <Button style={[globalStyle.lightVioletButton, { marginTop: 10 }]} onPress={() => setStep("phone")}>
                  <Text style={globalStyle.lightVioletButtonText}>Back</Text>
                </Button>
              </>
            )}
          </View>
        </View>
        {/* <SignInCongratsModal isCongratsModalVisible={isCongratsModalVisible} setIsCongratsModalVisible={setIsCongratsModalVisible} /> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
