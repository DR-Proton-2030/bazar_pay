import React, { useState, useEffect } from "react";
import { View, Text, Image, Modal, TouchableOpacity, SafeAreaView, Dimensions, StatusBar, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyle } from "../../../globalStyles/globalStyles";
import Colors from "../../../constants/Colors";
import loginBg from "../../../../assets/images/loginBg.jpeg";
import SignInButton from "../../../components/main/auth/signinBtn/SignInBtn";
import InputField from "../../../components/shared/inputFields/InputFields";
import Header from "../../../components/main/auth/header/Header";
import PasswordToggle from "../../../components/shared/passwordToggle/PasswordToggle";
import SignInCongratsModal from "../../../components/main/auth/signInCongratsModal/SignInCongratsModal";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true); // Modal visibility state
  const [isCongratsModalVisible, setIsCongratsModalVisible] = useState(false); // Congrats modal visibility state
  const screenHeight = Dimensions.get("screen").height;

  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  const handleSignIn = () => {
    setIsCongratsModalVisible(true);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <View style={{ flexDirection: "column" }}>
        <Image style={{ width: "100%", height: screenHeight }} source={loginBg} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}
      >
        <View style={globalStyle.modalContainer}>
          <View style={globalStyle.modalContent}>
            <Header />
            <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
              <InputField
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
              />
              <PasswordToggle />
              <Text style={globalStyle.forgotPasswordText}>Forgot Password?</Text>
              <SignInButton onPress={handleSignIn} />
            </View>
          </View>
        </View>
      </Modal>

      <SignInCongratsModal isCongratsModalVisible={isCongratsModalVisible} setIsCongratsModalVisible={setIsCongratsModalVisible}/>
    </SafeAreaView>
  );
};

export default SignIn;
