import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import formFields from "../../../../database/signUpFileds/SignUpFileds";
import Colors from "../../../../constants/Colors";
import ImageUpload from "../../../../components/shared/ImageUpload/ImageUpload";
import * as ImagePicker from "expo-image-picker";

const SignUpForm = ({
  setFormData,
  setImages,
  formData,
  images,
  setHiddenButtons,
  hiddenButtons,
  onSubmit,
}: any) => {
  const [errors, setErrors] = useState<any>({
    contact_phone_number: "",
    email: "",
    emptyFields: {},
  });

  const handleInputChange = (field: any, value: any) => {
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

    setErrors((prevErrors: any) => ({
      ...prevErrors,
      emptyFields: { ...prevErrors.emptyFields, [field]: "" },
    }));
    setFormData({ ...formData, [field]: value });
  };

  const handleImageSelect = (selectedImages: any) => {
    setImages(selectedImages);
  };

  const pickImage = async (buttonName: any) => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const newImages: any = [
        ...images,
        { name: buttonName, uri: result.assets[0].uri },
      ];
      // setImages(newImages);
      setHiddenButtons((prevHiddenButtons: any) => [
        ...prevHiddenButtons,
        buttonName,
      ]);
      // onImageSelect(newImages);
      setImages(newImages);
    }
  };

  const handleSubmit = () => {
    let hasEmptyFields = false;
    let newEmptyFieldsErrors: any = {};

    formFields.forEach((field) => {
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
      {formFields.map((field, index) => (
        <View style={styles.fieldContainer} key={index}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{field.label}</Text>
          </View>
          {field.field === "owner_phone" ? (
            <>
              <Text style={{ color: "black", fontSize: 14, marginBottom: -30 }}>
                880
              </Text>
              <TextInput
                style={[styles.input, { paddingLeft: 28 }]}
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

          {field.field === "owner_phone" && errors.contact_phone_number ? (
            <Text style={styles.errorText}>{errors.contact_phone_number}</Text>
          ) : null}
          {field.field === "owner_email" && errors.email ? (
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
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingBottom: 40,
    paddingHorizontal: 20,
    backgroundColor: Colors.light.background,
    paddingTop: 20,
  },
  fieldContainer: { marginBottom: 30 },
  labelContainer: { flexDirection: "row", alignItems: "center" },
  label: { fontWeight: "bold", marginBottom: 5, marginLeft: 10 },
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
    backgroundColor: Colors.light.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  submitText: { color: "white", fontWeight: "bold", fontSize: 16 },
});

export default SignUpForm;
