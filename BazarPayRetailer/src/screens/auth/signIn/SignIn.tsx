import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyle } from "../../../globalStyles/globalStyles";
import Colors from "../../../constants/Colors";
import loginBg from "../../../../assets/images/loginBg.jpeg";
import SignInButton from "../../../components/main/auth/signinBtn/SignInBtn";
import InputField from "../../../components/shared/inputFields/InputFields";
import Header from "../../../components/main/auth/header/Header";
import PasswordToggle from "../../../components/shared/passwordToggle/PasswordToggle";

const SignIn = () => {
  const [email, setEmail] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <View style={{ flexDirection: "column", gap: -35 }}>
        <Image style={{ width: "100%", height: "73%" }} source={loginBg} />
        <View style={globalStyle.sectionContainer}>
          <Header />
          <View style={{ paddingHorizontal: 10, paddingTop: 20 }}>
            <InputField
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
            />

            <PasswordToggle />
            <Text style={globalStyle.forgotPasswordText}>Forgot Password?</Text>
            <SignInButton onPress={() => console.log("first")} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
