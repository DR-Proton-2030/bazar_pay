import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import formFields from "../../../../database/signUpFileds/SignUpFileds";
import Colors from "../../../../constants/Colors";
import Chip from "../../../../components/shared/chips/Chips";
import ImageUpload from "../../../../components/shared/ImageUpload/ImageUpload";

const SignUpForm = ({ setFormData, setImages, formData, images, onSubmit }: any) => {
  const [errors, setErrors] = useState({ contact_phone_number: "", email: "" });

  const handleInputChange = (field: string, value: string) => {
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

    setFormData({ ...formData, [field]: value });
  };

  const handleImageSelect = (selectedImages: string[]) => {
    setImages(selectedImages);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>আপনার ব্যবসার ধরন নির্বাচন করুন</Text>
      <ScrollView horizontal style={{ marginBottom: 20 }} showsHorizontalScrollIndicator={false}>
        {["ইলেকট্রনিক্স", "মুদিখানা", "কাপড়", "খাবার", "এআই"].map((text, index) => (
          <Chip key={index} text={text} />
        ))}
      </ScrollView>
      {formFields.map((field, index) => (
        <View style={styles.fieldContainer} key={index}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{field.label}</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder={field.placeholder}
            onChangeText={(text) => handleInputChange(field.field, text)}
            underlineColorAndroid="transparent"
          />
          {field.field === "contact_phone_number" && errors.contact_phone_number ? (
            <Text style={styles.errorText}>{errors.contact_phone_number}</Text>
          ) : null}
          {field.field === "contact_email" && errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}
        </View>
      ))}
      <ImageUpload onImageSelect={handleImageSelect} />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "column", paddingTop: 40, paddingHorizontal: 20, backgroundColor: Colors.light.background },
  fieldContainer: { marginBottom: 30 },
  labelContainer: { flexDirection: "row", alignItems: "center" },
  label: { fontWeight: "bold", marginBottom: 5, marginLeft: 10 },
  icon: { marginRight: 10 },
  input: { width: "100%", height: 40, borderBottomWidth: 1, borderColor: "#ccc", paddingHorizontal: 10 },
  errorText: { color: "red", marginTop: 5, marginLeft: 10 },
  submitButton: { backgroundColor: Colors.light.primary, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 50, alignItems: "center", justifyContent: "center", marginTop: 20 },
  submitText: { color: "white", fontWeight: "bold", fontSize: 16 },
});

export default SignUpForm;
