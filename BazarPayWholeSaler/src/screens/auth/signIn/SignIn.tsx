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
    setLoading(true)

      try {
        const payload = { phone };
        const response = await api.auth.getLoginOtp(payload);
        setServerOtp(response?.otp);
        setTempUser(response?.result)
        setLoading(false)
        setStep("otp")
      } catch (error: any) {
        console.log(error);
        Alert.alert("Error", error.response?.data?.message || error.message);
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

  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <View style={{ flexDirection: "column" }}>
        <Image
          style={{ width: "100%", height: screenHeight / 1.9 }}
          source={loginBg}
        />
        <View
          style={[
            globalStyle.modalContent,
            { marginTop: -screenHeight / 15.9 },
          ]}
        >
          <Header isSignup={false} />
          <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            {step === "phone" ? (
              <>
                <InputField
                  placeholder="Phone number"
                  onChangeText={setPhone}
                  value={phone}
                />
                <Button style={[globalStyle.blueButton, { marginTop: 10 }]} onPress={handleSignIn}>
                  {
                    loading ?
                      <ActivityIndicator color="white"/>
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
                  <Text style={globalStyle.signInButtonText}>Get Otp</Text>
                </Button>
                <Button style={[globalStyle.lightVioletButton, { marginTop: 10 }]} onPress={() => setStep("phone")}>
                  <Text style={globalStyle.lightVioletButtonText}>Back</Text>
                </Button>
              </>
            )}
          </View>
        </View>
      </View>
      {/* <SignInCongratsModal isCongratsModalVisible={isCongratsModalVisible} setIsCongratsModalVisible={setIsCongratsModalVisible} /> */}
    </ScrollView>
  );
};

export default SignIn;
