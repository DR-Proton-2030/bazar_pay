import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importing Ionicons from @expo/vector-icons
import Colors from "../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import FirstScreen from "./FirsScreen";
import SecondScreen from "./SecondScreen";
import CommonHeader from "../../components/shared/commonHeader/CommonHeader";

const AddProduct = () => {
  return (
    <SafeAreaView>
      <CommonHeader text="নতুন পণ্য যোগ করুন"/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <FirstScreen />
          <SecondScreen />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  form: {
    marginTop: 20,
  },
});

export default AddProduct;
