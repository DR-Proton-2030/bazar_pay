import React, { useState } from "react";
import { ScrollView, View, Alert, TextInput, Button } from "react-native";
import { useNavigation } from "expo-router";
import Colors from "../../../constants/Colors";
import CommonHeader from "../../../components/shared/commonHeader/CommonHeader";
import SignUpForm from "./signUpForm/SignUpForm";
import axios from "axios";
import { api } from "../../../utils/api";
import OtpPage from "../otpScreen";

const SignUpPage = () => {
  const navigation = useNavigation();
  const [phoneNo, setPhoneNo] = useState("");
  const [formData, setFormData] = useState({});
  const [images, setImages] = useState<string[]>([]);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const [otpMatched, setOtpMatched] = useState(false);
  const [page, setPage] = useState(0);


  const createWholesaler = async () => {
    const formDataToSend = new FormData();
    
    const payload = JSON.stringify(formData);
    formDataToSend.append("wholesalerDetails", payload);

    images.forEach((image:any) => {
      const file: any = {
        uri: image.uri,
        name: "photo.jpg",
        type: "image/jpeg"
      };
      formDataToSend.append(image.name, file);
    });

    try {
      const response = await api.auth.createWholesaler(formDataToSend)
      console.log("response===>", response);
      if (response) {
        Alert.alert("Success", "Wholesaler added successfully");
        console.log(response);
      } else {
        Alert.alert("Error", response);
      }
    } catch (error:any) {
      console.error("Error adding wholesaler:", error);
      Alert.alert("Error", error.response?.data?.message || error.message);
    }
  };

  const requestOtp = () => {
    axios.post(`http://localhost:8989/wholeseller`, { phone_no: phoneNo })
      .then(response => {
        console.log(response.data);
        setGeneratedOtp(response.data.result);
        setOtpRequested(true);
        Alert.alert("Success", `OTP sent to ${phoneNo}`);
      })
      .catch(error => {
        console.log(error);
        Alert.alert("Error", "Failed to send OTP");
      });
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {

      Alert.alert("Success", "OTP verified");
      createWholesaler()
      // Proceed with form submission
    
    } else {
      Alert.alert("Error", "Invalid OTP");
    }
  };

  const changePage = ()=>{
    setPage(1)
  }
  return (
   
    <>
     {
        page===0?
        <ScrollView style={{ flex: 1, backgroundColor: Colors.light.background }}>
        <CommonHeader text="ব্যবসার তথ্য" />
        <SignUpForm onSubmit={changePage} formData={formData} setFormData ={setFormData} images ={images} setImages={setImages} />
       
      </ScrollView>
        :
        <OtpPage verifyOtp={verifyOtp}/>
      }
    </>
  );
};

export default SignUpPage;
