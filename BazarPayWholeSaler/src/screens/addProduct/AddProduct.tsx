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
import ImageUploader from "../../components/shared/ImageUploader/ImageUploader";
import { globalStyle } from "../../globalStyles/globalStyles";
import { Button } from "react-native-paper";

const AddProduct = () => {
  return (
    <SafeAreaView>
      <CommonHeader text="নতুন পণ্য যোগ করুন" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <TouchableOpacity style={globalStyle.quickAddButton}>
            <Text style={globalStyle.quickAddText}>দ্রুত পণ্য যোগ করুন</Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>

          <Text style={globalStyle.infoText}>আপনি ব্র্যান্ড অনুমোদিত দ্রুত পণ্য যোগ করতে পারেন</Text>

          <ImageUploader />
          <FirstScreen />
          <Text style={{
            fontWeight: '600', fontSize: 16, marginBottom: 10
          }}>পণ্যের বারকোড যুক্ত করুন</Text>
          <ImageUploader />
          <SecondScreen />
          <Button style={{ backgroundColor: "blue" }}  mode="contained" onPress={() => console.log('Pressed')}>
            <Text style={{ fontSize: 17 }}>
              Upload Product
            </Text>
          </Button>
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
    paddingHorizontal: 10,
    marginBottom: 100
  },
});

export default AddProduct;
