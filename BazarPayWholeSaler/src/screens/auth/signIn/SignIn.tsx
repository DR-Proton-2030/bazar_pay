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

const SignIn = () => {
  const { setUser } = useContext(AuthContext);
  const { setWholesaler } = useContext(WholesalerContext);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true); // Modal visibility state
  const [isCongratsModalVisible, setIsCongratsModalVisible] = useState(true); // Congrats modal visibility state
  const screenHeight = Dimensions.get("screen").height;
  const navigation = useNavigation<any>();

  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  const handleSignIn = async () => {
    console.log(phone, password); // Log phone and password
    // setIsCongratsModalVisible(true);
    try {
      const payload = {
        phone_number: phone,
        password: password,
      };
      const response = await api.auth.loginWholesaler(payload);
      console.log("response===>", response);
      setUser(response.user);
      setWholesaler(response.wholesaler);
      // setIsCongratsModalVisible(true);
      navigation.navigate("homePage");
    } catch (error: any) {
      console.log(error);
      Alert.alert("Error", error.response?.data?.message || error.message);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      {/* <StatusBar translucent={true} backgroundColor={"transparent"} /> */}
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
            <InputField
              placeholder="Email"
              onChangeText={setPhone}
              value={phone}
            />
            <PasswordToggle password={password} setPassword={setPassword} />
            <Text style={globalStyle.forgotPasswordText}>Forgot Password?</Text>
            <SignInButton isSignup={false} onPress={handleSignIn} />
          </View>
        </View>
      </View>
      {/* <SignInCongratsModal isCongratsModalVisible={isCongratsModalVisible} setIsCongratsModalVisible={setIsCongratsModalVisible} /> */}
    </ScrollView>
  );
};

export default SignIn;
