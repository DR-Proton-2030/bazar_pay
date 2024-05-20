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
import { useNavigation, useRoute } from "@react-navigation/native";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true); // Modal visibility state
  const [isCongratsModalVisible, setIsCongratsModalVisible] = useState(false); // Congrats modal visibility state
  const screenHeight = Dimensions.get("screen").height;

  const route = useRoute();
  const navigation: any = useNavigation();
  const { isSignup }:any = route.params || {};
  
  useEffect(() => {
    setIsModalVisible(true);
    console.log("is signup",isSignup)
  }, []);

  const handleSignIn = () => {
    if(isSignup){
      setIsCongratsModalVisible(true);
    }else{
      navigation.navigate("homePage");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <View style={{ flexDirection: "column" }}>
        <Image style={{ width: "100%", height: screenHeight/1.9 }} source={loginBg} />
          <View style={[globalStyle.modalContent,{marginTop:-screenHeight/15.9}]}>
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

     
        

      <SignInCongratsModal isCongratsModalVisible={isCongratsModalVisible} setIsCongratsModalVisible={setIsCongratsModalVisible}/>
    </SafeAreaView>
  );
};

export default SignIn;
