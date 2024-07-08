import React, { useContext, useState } from "react";
import SignUpForm from "./signUpForm/SignUpForm";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity, View, Text, Modal, ActivityIndicator } from "react-native";
import { globalStyle } from "../../../globalStyles/globalStyles";
import Colors from "../../../constants/Colors";
import { User } from "../../../@types/user.types";
import { defaultRetailerState } from "../../../constants/initialState/retailer";
import { api } from "../../../utils/api";
import AuthContext from "../../../contexts/authContext/authContext";
import OtpModal from "../../../components/shared/otpModal/OtpModal";

const SignUpPage = () => {
  const {setUser}=useContext(AuthContext)
  const navigation:any = useNavigation();
  const [phoneNo, setPhoneNo] = useState("");
  const [formData, setFormData] = useState<any>(defaultRetailerState);
  const [images, setImages] = useState<string[]>([]);
  const [hiddenButtons, setHiddenButtons] = useState<string[]>([]);
  const [otp, setOtp] = useState("");
  const [originalOtp, setOriginalOtp] = useState<string>("");
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false); 

  const handleNavigate = () => {
    navigation.goBack();
  };

  const createRetailer = async () => {
    setLoading(true)
    const formDataToSend = new FormData();

    const payload = JSON.stringify(formData);
    formDataToSend.append("retailerDetails", payload);

    images.forEach((image: any, index: number) => {
      const file: any = {
        uri: image.uri,
        name: `photo_${index}.jpg`,
        type: "image/jpeg",
      };
      formDataToSend.append(image.name, file);
    });

    // Logging for debugging
    console.log("Form Data to Send: ", formDataToSend);

    try {
      const response = await api.auth.SignUp(formDataToSend);
      console.log("Response: ", response);
      if (response) {
        setUser(response)
        navigation.navigate("homePage");
      } else {
        console.log("Response is empty or invalid: ", response);
      }
      setLoading(false)
    } catch (error: any) {
      console.error("Error adding retailer: ", error);
      setLoading(false)
    }
  };

  const requestOtp = async () => {
    setLoading(true); 
    if (formData) {
      try {
        const response = await api.auth.getOtp({
          phone_number: formData.contact_phone_number,
        });
        console.log("===>", response);
        setOriginalOtp(response);
        setPage(1);
   
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); 
      }
    }
  };

  const handleBack = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const verifyOtp = () => {
    if (otp === originalOtp) {
      createRetailer();
    } else {
      console.log("Otp not valid");
    }
  };

  const changePage = async () => {
    await requestOtp();
  };

  return (
    <>
    {page === 0 ? (
      <>
      
      <ScrollView style={{ flex: 1, backgroundColor: Colors.light.background, paddingTop: 20 }}>
        <SignUpForm
          onSubmit={changePage}
          formData={formData}
          setFormData={setFormData}
          images={images}
          hiddenButtons={hiddenButtons}
          setHiddenButtons={setHiddenButtons}
          setImages={setImages}
          loading={loading}
        />
      </ScrollView>
      </>
    ) : formData?.contact_phone ? (
        <OtpModal
          phone_number={formData?.contact_phone}
          verifyOtp={verifyOtp}
          handleBack={handleBack}
          originalOtp={originalOtp}
          setOtp={setOtp}
          loading={loading}
        />
      ) : null}

        {/* <Modal visible={loading} >
          <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, alignItems: "center",width:80,marginLeft:'auto',marginRight:"auto" }}>
            <ActivityIndicator animating={true} size="large" color={Colors.light.orange} />
          </View>
        </Modal> */}
      </>
  );
};

export default SignUpPage;
