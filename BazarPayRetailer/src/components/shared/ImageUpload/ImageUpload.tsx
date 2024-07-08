import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Colors from "../../../constants/Colors";

const ImageUpload = ({ images, hiddenButtons,pickImage }: any) => {
  const [showSubmit, setShowSubmit] = useState(false);


  useEffect(() => {
    if (images.length === 4) {
      setShowSubmit(true);
    }
  }, [images]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Upload Supporting Documents* </Text>
      <View style={styles.buttonRow}>
        {!hiddenButtons.includes("sign_board_photo") && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => pickImage("sign_board_photo")}
          >
            <MaterialIcons name="image" size={20} color="gray" />
            <Text>
              Shop SignBoard<Text style={{ color: "red" }}>*</Text>
            </Text>
          </TouchableOpacity>
        )}
        {!hiddenButtons.includes("retailer_owner_photo") && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => pickImage("retailer_owner_photo")}
          >
            <MaterialIcons name="image" size={20} color="gray" />
            <Text>
              Own Photo<Text style={{ color: "red" }}>*</Text>
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.buttonRow}>
        {!hiddenButtons.includes("trade_license_photo") && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => pickImage("trade_license_photo")}
          >
            <MaterialIcons name="image" size={20} color="gray" />
            <Text>Trade License</Text>
          </TouchableOpacity>
        )}
        {!hiddenButtons.includes("nid_photo") && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => pickImage("nid_photo")}
          >
            <MaterialIcons name="image" size={20} color="gray" />
            <Text>
              NID Card<Text style={{ color: "red" }}>*</Text>
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {!hiddenButtons.includes("logo") && (
          <TouchableOpacity
            style={[styles.button,{width:156,marginBottom:20}]}
            onPress={() => pickImage("logo")}
          >
            <MaterialIcons name="image" size={20} color="gray" />
            <Text>
              Logo<Text style={{ color: "red" }}>*</Text>
            </Text>
          </TouchableOpacity>
      )}
      
      <Text style={styles.label}>Selected Images</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((image: any, index: number) => (
          <View
            key={index}
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            <Image source={{ uri: image.uri }} style={styles.image} />
            <Text style={styles.imageLabel}>{image.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 0 },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    gap: 10,
  },
  button: {
    width: "auto",
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    gap: 5,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3.84,
    elevation: 3,
  },
  label: { fontWeight: "bold", marginBottom: 25, marginLeft: 10 },
  image: { width: 90, height: 80, marginHorizontal: 10, borderRadius: 10 },
  imageLabel: {
    textAlign: "center",
    backgroundColor: Colors.light.grayBtn,
    borderRadius: 50,
    marginTop: 5,
    paddingHorizontal: 20,
  },
});

export default ImageUpload;
