import React, { useContext, useState } from "react";
import SignUpForm from "./signUpForm/SignUpForm";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import { globalStyle } from "../../../globalStyles/globalStyles";
import Colors from "../../../constants/Colors";
import { User } from "../../../@types/user.types";
import { defaultRetailerState } from "../../../constants/initialState/retailer";
import { api } from "../../../utils/api";
import AuthContext from "../../../contexts/authContext/authContext";

const SignUpPage = () => {
  const {setUser}=useContext(AuthContext)
  const navigation:any = useNavigation();
  const [phoneNo, setPhoneNo] = useState("");
  const [formData, setFormData] = useState<User>(defaultRetailerState);
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
    const formDataToSend = new FormData();

    // Convert formData to JSON string
    const payload = JSON.stringify(formData);
    formDataToSend.append("retailerDetails", payload);

    // Append images
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
    } catch (error: any) {
      console.error("Error adding retailer: ", error);
    }
  };

  return (
    <>
      <View style={globalStyle.productHeader}>
        <TouchableOpacity
          onPress={handleNavigate}
          style={{ display: "flex", flexDirection: "row", paddingLeft: 20, alignItems: "center", gap: 10 }}
        >
          <Ionicons name="arrow-back" size={28} color={Colors.light.orange} />
          <Text style={{ fontWeight: '700', fontSize: 22 }}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: Colors.light.background, paddingTop: 20 }}>
        <SignUpForm
          onSubmit={createRetailer}
          formData={formData}
          setFormData={setFormData}
          images={images}
          hiddenButtons={hiddenButtons}
          setHiddenButtons={setHiddenButtons}
          setImages={setImages}
        />
      </ScrollView>
    </>
  );
};

export default SignUpPage;
