import React from "react";
import SignUpForm from "./signUpForm/SignUpForm";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { globalStyle } from "../../../globalStyles/globalStyles";
import Colors from "../../../constants/Colors";
import ImageUpload from "../../../components/shared/ImageUpload/ImageUpload";
import Chip from "../../../components/shared/chips/Chips";
import CommonHeader from "../../../components/shared/commonHeader/CommonHeader";

const SignUpPage = () => {
  const navigation: any = useNavigation();

  const handleNavigate = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <CommonHeader text="ব্যবসার তথ্য" />
      <SignUpForm />
      <ImageUpload />
    </ScrollView>
  );
};

export default SignUpPage;
