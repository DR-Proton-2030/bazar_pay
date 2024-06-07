import React, { useContext, useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import axios from 'axios';
import { globalStyle } from "../../../globalStyles/globalStyles";
import Colors from "../../../constants/Colors";
import loginBg from "../../../../assets/images/loginBg.jpeg";
import SignInButton from "../../../components/main/auth/signinBtn/SignInBtn";
import InputField from "../../../components/shared/inputFields/InputFields";
import Header from "../../../components/main/auth/header/Header";
import PasswordToggle from "../../../components/shared/passwordToggle/PasswordToggle";
import { api } from "../../../utils/api";
import AuthContext from "../../../contexts/authContext/authContext";
import { useNavigation } from "expo-router";

const SignIn = () => {
  const {setUser}= useContext(AuthContext)
  const navigation: any = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const payload ={
        identifier: email,
        password: password
      }
      const response = await api.auth.Login(payload)
      setLoading(false);
      setUser(response)
      console.log("=====>user",response)
      navigation.navigate("homePage");
    } catch (error:any) {
      setLoading(false);
      Alert.alert("Error", error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <View style={{ flexDirection: "column",}}>
        <Image style={{ width: "100%", height: "67%" }} source={loginBg} />
        <View style={globalStyle.sectionContainer}>
          <View style={{ paddingHorizontal: 10 }}>
          <Header />
            <InputField
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
            />
            <InputField
              placeholder="Password"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
            <Text style={globalStyle.forgotPasswordText}>Forgot Password?</Text>
            <SignInButton onPress={handleSignIn} disabled={loading} />
            {loading && <Text>Loading...</Text>}
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
