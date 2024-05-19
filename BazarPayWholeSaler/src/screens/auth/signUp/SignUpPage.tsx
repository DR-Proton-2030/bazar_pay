import React from "react";
import SignUpForm from "./signUpForm/SignUpForm";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { globalStyle } from "../../../globalStyles/globalStyles";
import Colors from "../../../constants/Colors";
import ImageUpload from "../../../components/shared/ImageUpload/ImageUpload";
import Chip from "../../../components/shared/chips/Chips";

const SignUpPage = () => {
  const navigation: any = useNavigation();

  const handleNavigate = () => {
    navigation.goBack();
  };

 
  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <View style={globalStyle.productHeader}>
        <TouchableOpacity
          onPress={handleNavigate}
          style={{ display: "flex", flexDirection: "column", paddingLeft: 20 }}
        >
          <Ionicons name="arrow-back" size={28} color={Colors.light.primary} />
        </TouchableOpacity>
      </View>
      
      <SignUpForm />
      <ImageUpload />
    </ScrollView>
  );
};

export default SignUpPage;
