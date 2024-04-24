import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Importing FontAwesome from Expo Vector Icons
import formFields from "../../../../database/signUpFileds/SignUpFileds";
import Colors from "../../../../constants/Colors";

// Mapping between labels and icons
const iconMapping = {
  Name: "user",
  "Phone Number": "phone",
  Email: "envelope",
  NIB: "id-card",
  "Trade Licence": "briefcase",
};

const SignUpForm = () => {
  return (
    <View style={styles.container}>
      {formFields.map((field, index) => (
        <View style={styles.fieldContainer} key={index}>
          <View style={styles.labelContainer}>
            <FontAwesome
              name={iconMapping[field.label]}
              size={20}
              color="gray"
              style={styles.icon}
            />
            <Text style={styles.label}>{field.label}</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder={field.placeholder}
            underlineColorAndroid="transparent"
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: Colors.light.background,
  },
  fieldContainer: {
    marginBottom: 30,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 10, // Adjust spacing between icon and text
  },
  icon: {
    marginRight: 10, // Adjust spacing between icon and text
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1, // Only bottom border
    borderColor: "#ccc",
    paddingHorizontal: 10,
  },
});

export default SignUpForm;
