import React, { useContext, useState } from "react";
import { ScrollView, View, Alert, TextInput, Button } from "react-native";
import { useNavigation } from "expo-router";
import Colors from "../../../constants/Colors";
import CommonHeader from "../../../components/shared/commonHeader/CommonHeader";
import SignUpForm from "./signUpForm/SignUpForm";
import axios from "axios";
import { api } from "../../../utils/api";
import OtpPage from "../otpScreen";
import WholesalerContext from "../../../contexts/wholesalerContext/wholesalerContext";
import { NavigationProp } from "@react-navigation/native";

const SignUpPage = () => {
  const {setWholesaler} = useContext(WholesalerContext)
  const navigation = useNavigation<any>();
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
        // Alert.alert("Success", "Wholesaler added successfully");
        console.log(response);
        setWholesaler(response)
        navigation.navigate("passwordSet")
      } else {
        console.log(response)
      }
    } catch (error:any) {
      console.error("Error adding wholesaler:", error);

    }
  };

  const verifyOtp = () => {
    if (otp === "1234") {
console.log("otp=====>",otp)
      createWholesaler()
    } else {
      console.log("Otp not valid")
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
        <OtpPage verifyOtp={verifyOtp} setOtp={setOtp} otp={otp}/>
      }
    </>
  );
};

export default SignUpPage;
