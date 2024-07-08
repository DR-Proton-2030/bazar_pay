import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicatorBase,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../../../constants/Colors";
import ImageUpload from "../../../../components/shared/ImageUpload/ImageUpload";
import * as ImagePicker from "expo-image-picker";
import signUpformFields from "../../../../database/formfields/signupFormFields";

const SignUpForm = ({
  setFormData,
  setImages,
  formData,
  images,
  setHiddenButtons,
  hiddenButtons,
  onSubmit,
  loading
}:any) => {
  const [errors, setErrors] = useState<any>({
    contact_phone_number: "",
    email: "",
    emptyFields: {},
  });

  const handleInputChange = (field:any, value:any) => {
    if (field === "contact_phone_number") {
      if (value.length > 10) {
        setErrors({ ...errors, contact_phone_number: "Invalid phone number" });
        return;
      } else {
        setErrors({ ...errors, contact_phone_number: "" });
      }
    }

    if (field === "contact_email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors({ ...errors, email: "Invalid email address" });
      } else {
        setErrors({ ...errors, email: "" });
      }
    }

    setErrors((prevErrors:any) => ({
      ...prevErrors,
      emptyFields: { ...prevErrors.emptyFields, [field]: "" },
    }));
    setFormData({ ...formData, [field]: value });
  };

  const handleImageSelect = (selectedImages:any) => {
    setImages(selectedImages);
  };

  const pickImage = async (buttonName:any) => {
    let result:any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const newImages = [
        ...images,
        { name: buttonName, uri: result.assets[0].uri },
      ];
      setHiddenButtons((prevHiddenButtons:any) => [
        ...prevHiddenButtons,
        buttonName,
      ]);
      setImages(newImages);
    }
  };

  const handleSubmit = () => {
    let hasEmptyFields = false;
    let newEmptyFieldsErrors:any = {};

    signUpformFields.forEach((field) => {
      if (!formData[field.field]) {
        hasEmptyFields = true;
        newEmptyFieldsErrors[field.field] = `${field.label} is required`;
      }
    });

    if (hasEmptyFields) {
      setErrors({ ...errors, emptyFields: newEmptyFieldsErrors });
      return;
    }

    onSubmit();
  };

  return (
    <View style={styles.container}>
      {signUpformFields.map((field, index) => (
        <View style={styles.fieldContainer} key={index}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{field.label}</Text>
          </View>
          {field.field === "contact_phone" ? (
            <>
              <Text style={{ color: "black", fontSize: 14, marginBottom: -30,paddingLeft:10 }}>+880</Text>
              <TextInput
                style={[styles.input, { paddingLeft: 48 }]}
                placeholder={field.placeholder}
                value={formData[field.field]}
                onChangeText={(text) => handleInputChange(field.field, text)}
                underlineColorAndroid="transparent"
              />
            </>
          ) : (
            <TextInput
              style={styles.input}
              placeholder={field.placeholder}
              value={formData[field.field]}
              onChangeText={(text) => handleInputChange(field.field, text)}
              underlineColorAndroid="transparent"
            />
          )}
          
          {field.field === "contact_phone_number" && errors.contact_phone_number ? (
            <Text style={styles.errorText}>{errors.contact_phone_number}</Text>
          ) : null}
          {field.field === "contact_email" && errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}
          {errors.emptyFields[field.field] ? (
            <Text style={styles.errorText}>
              {errors.emptyFields[field.field]}
            </Text>
          ) : null}
        </View>
      ))}
      <ImageUpload
        pickImage={pickImage}
        images={images}
        hiddenButtons={hiddenButtons}
      />
      {loading ?
          <TouchableOpacity style={styles.submitButton}>
            <ActivityIndicator color={"white"} />
          </TouchableOpacity>
          :
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={{
              textAlign: "center", color: "white",
              fontSize: 19,
            }}>Submit Details</Text>
          </TouchableOpacity>

        }
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingBottom: 40,
    paddingHorizontal: 20,
    backgroundColor: Colors.light.background,
  },
  fieldContainer: { marginBottom: 30 },
  labelContainer: { flexDirection: "row", alignItems: "center" },
  label: { fontWeight: "500", marginBottom: 3, marginLeft: 10,fontSize:17 ,color:Colors.light.orange},
  icon: { marginRight: 10 },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
  },
  errorText: { color: "red", marginTop: 5, marginLeft: 10 },
  submitButton: {
    backgroundColor: Colors.light.orange,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  submitText: { color: "white", fontWeight: "bold", fontSize: 16 },
});

export default SignUpForm;
