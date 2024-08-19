import React, { useContext, useState } from "react";
import { ScrollView, View, Alert, ActivityIndicator } from "react-native";
import { useNavigation } from "expo-router";
import { Modal, Portal } from "react-native-paper";
import Colors from "../../../constants/Colors";
import CommonHeader from "../../../components/shared/commonHeader/CommonHeader";
import SignUpForm from "./signUpForm/SignUpForm";
import axios from "axios";
import { api } from "../../../utils/api";
import OtpPage from "../otpScreen";
import WholesalerContext from "../../../contexts/wholesalerContext/wholesalerContext";
import { IWholesaler } from "../../../@types/types/wholesaler.interface";
import { defaultWholesalerState } from "../../../constants/initialState/wholeSalerState";

const SignUpPage = () => {
  const { setWholesaler } = useContext(WholesalerContext);
  const navigation = useNavigation<any>();
  const [phoneNo, setPhoneNo] = useState("");
  const [formData, setFormData] = useState<IWholesaler>(defaultWholesalerState);
  const [images, setImages] = useState<string[]>([]);
  const [hiddenButtons, setHiddenButtons] = useState<string[]>([]);
  const [otp, setOtp] = useState("");
  const [originalOtp, setOriginalOtp] = useState<string>("");
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const createWholesaler = async () => {
    const formDataToSend = new FormData();

    const payload = JSON.stringify(formData);
    formDataToSend.append("wholesalerDetails", payload);

    images.forEach((image: any) => {
      const file: any = {
        uri: image.uri,
        name: "photo.jpg",
        type: "image/jpeg",
      };
      formDataToSend.append(image.name, file);
    });

    try {
      const response = await api.auth.createWholesaler(formDataToSend);
      console.log("response===>", response);
      if (response) {
        console.log(response);
        // setWholesaler(response);
        navigation.navigate("conformationPage");
      } else {
        console.log(response);
      }
    } catch (error: any) {
      console.error("Error adding wholesaler:", error);
    }
  };

  const requestOtp = async () => {
    setLoading(true);
    if (formData) {
      try {
        const response = await api.auth.getOtp({
          phone: formData.owner_phone,
        });
        console.log("===>", response);
        setOriginalOtp(response);
        setPage(1);
      } catch (error) {
        console.log(error);
        Alert.alert("Error! You have already registered as a wholesaler");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleBack = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const verifyOtp = () => {
    if (otp === "1234") {
      createWholesaler();
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
          <CommonHeader text="ব্যবসার তথ্য" />
          <ScrollView
            style={{ flex: 1, backgroundColor: Colors.light.background }}
          >
            <SignUpForm
              onSubmit={changePage}
              formData={formData}
              setFormData={setFormData}
              images={images}
              hiddenButtons={hiddenButtons}
              setHiddenButtons={setHiddenButtons}
              setImages={setImages}
            />
          </ScrollView>
        </>
      ) : formData?.owner_phone ? (
        <OtpPage
          phone_number={formData?.owner_phone}
          verifyOtp={verifyOtp}
          handleBack={handleBack}
          originalOtp={originalOtp}
          setOtp={setOtp}
        />
      ) : null}

      <Portal>
        <Modal visible={loading} dismissable={false}>
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              alignItems: "center",
              width: 80,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <ActivityIndicator
              animating={true}
              size="large"
              color={Colors.light.primary}
            />
          </View>
        </Modal>
      </Portal>
    </>
  );
};

export default SignUpPage;
