import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, Dimensions, StatusBar, StyleSheet, ScrollView, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Colors from "../../../../constants/Colors";
import loginBg from "../../../../../assets/images/loginBg.jpeg";
import { globalStyle } from "../../../../globalStyles/globalStyles";
import Header from "../../../../components/main/auth/header/Header";
import PasswordToggle from "../../../../components/shared/passwordToggle/PasswordToggle";
import SignInButton from "../../../../components/main/auth/signinBtn/SignInBtn";
import SignInCongratsModal from "../../../../components/main/auth/signInCongratsModal/SignInCongratsModal";
import { api } from "../../../../utils/api";
import WholesalerContext from "../../../../contexts/wholesalerContext/wholesalerContext";
import { Button } from "react-native-paper";
import AuthContext from "../../../../contexts/authContext/authContext";

const PasswordSetForm = () => {
  const { wholesaler } = useContext(WholesalerContext);
  const { setUser } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [isCongratsModalVisible, setIsCongratsModalVisible] = useState(false); 
  const screenHeight = Dimensions.get("screen").height;

  const route = useRoute();
  const navigation = useNavigation<any>();
  
console.log(wholesaler)

  const handleSignIn = async () => {
    console.log("Password:", password); // Log the password here
    try {
      const response = await api.auth.createWholesalerEmployee({
        full_name: wholesaler?.contact_full_name,
        email: wholesaler?.contact_email,
        phone_number: wholesaler?.contact_phone_number,
        password: password,
        role: "admin",
        wholesaler_object_id: wholesaler?._id,
        last_login_date: new Date(),
      });
      console.log("response===>", response);
      if (response) {
setUser(response)
        setIsCongratsModalVisible(true)
      } else {
        console.log(response)
      }
    } catch (error:any) {
      console.log(error)
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      {/* <StatusBar translucent={true} backgroundColor={"transparent"} /> */}
      <View style={{ flexDirection: "column" }}>
        <Image style={{ width: "100%", height: screenHeight / 1.9 }} source={{uri:"https://img.freepik.com/premium-photo/fruits-collection-food-background-portrait-format-apples-oranges-lemons-fresh-fruit_770123-3565.jpg"}} />
        <View style={[globalStyle.modalContent, { marginTop: -screenHeight / 15.9 }]}>
        <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 20,
      }}
    >
        <Text style={{ fontSize: 25, fontWeight: "700" }}>Set Passowrd</Text>

    </View>
          <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <PasswordToggle password={password} setPassword={setPassword} />
            <Text style={globalStyle.forgotPasswordText}>{wholesaler?.contact_full_name}Forgot Password?</Text>
            <Button onPress={handleSignIn} style={globalStyle.blueButton}>
        <Text style={globalStyle.signInButtonText}>Save password</Text>
      

    </Button>
          </View>
        </View>
      </View>
      <SignInCongratsModal isCongratsModalVisible={isCongratsModalVisible} setIsCongratsModalVisible={setIsCongratsModalVisible} />
    </ScrollView>
  );
};

export default PasswordSetForm;
