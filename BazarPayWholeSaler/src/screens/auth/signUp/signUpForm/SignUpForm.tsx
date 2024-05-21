import React from "react";
import { View, TextInput, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Importing FontAwesome from Expo Vector Icons
import formFields from "../../../../database/signUpFileds/SignUpFileds";
import Colors from "../../../../constants/Colors";
import Chip from "../../../../components/shared/chips/Chips";

// Mapping between labels and icons
const iconMapping = {
  নাম: "user",
  "ফোন নম্বর": "phone",
  প্রাতিষ্ঠানিকনাম: "briefcase",
  ইমেল: "envelope",
  এনআইবি: "id-card",
  "বাণিজ্য লাইসেন্স": "briefcase",
};

const SignUpForm = () => {
  const chipTexts = ["ইলেকট্রনিক্স", "মুদিখানা", "কাপড়", "খাবার", "এআই"]; // Example chip texts

  return (
    <View style={styles.container}>
      <Text style={styles.label}>আপনার ব্যবসার ধরন নির্বাচন করুন</Text>
      <ScrollView horizontal style={{ marginBottom: 20 }} showsHorizontalScrollIndicator={false}>
        {chipTexts.map((text, index) => (
          <Chip key={index} text={text} />
        ))}
      </ScrollView>
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
