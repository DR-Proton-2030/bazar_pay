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

const ImageUpload = ({ onImageSelect }:any) => {
  const [images, setImages] = useState([]);
  const [hiddenButtons, setHiddenButtons] = useState<any>([]);
  const [showSubmit, setShowSubmit] = useState(false);

  const pickImage = async (buttonName:any) => {
    let result:any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const newImages:any = [...images, { name: buttonName, uri: result.assets[0].uri }];
      setImages(newImages);
      setHiddenButtons((prevHiddenButtons:any) => [...prevHiddenButtons, buttonName]);
      onImageSelect(newImages);
    }
  };

  useEffect(() => {
    if (images.length === 4) {
      setShowSubmit(true);
    }
  }, [images]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Upload Supporting Documents* </Text>
      <View style={styles.buttonRow}>
        {!hiddenButtons.includes("sign_board") && (
          <TouchableOpacity style={styles.button} onPress={() => pickImage("sign_board")}>
            <MaterialIcons name="image" size={20} color="gray" />
            <Text>Shop SignBoard<Text style={{color:"red"}}>*</Text></Text>
          </TouchableOpacity>
        )}
        {!hiddenButtons.includes("owner_photo") && (
          <TouchableOpacity style={styles.button} onPress={() => pickImage("owner_photo")}>
            <MaterialIcons name="image" size={20} color="gray" />
            <Text>Own Photo<Text style={{color:"red"}}>*</Text></Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.buttonRow}>
        {!hiddenButtons.includes("trade_licensce") && (
          <TouchableOpacity style={styles.button} onPress={() => pickImage("trade_licensce")}>
            <MaterialIcons name="image" size={20} color="gray" />
            <Text>Trade License</Text>
          </TouchableOpacity>
        )}
        {!hiddenButtons.includes("nid") && (
          <TouchableOpacity style={styles.button} onPress={() => pickImage("nid")}>
            <MaterialIcons name="image" size={20} color="gray" />
            <Text>NID Card<Text style={{color:"red"}}>*</Text></Text>
          </TouchableOpacity>
        )}
        
      </View>
<View style={styles.buttonRow}>
{!hiddenButtons.includes("visiting_card") && (
          <TouchableOpacity style={styles.button} onPress={() => pickImage("visiting_card")}>
            <MaterialIcons name="image" size={20} color="gray" />
            <Text>Visiting Card</Text>
          </TouchableOpacity>
        )}
        {!hiddenButtons.includes("logo") && (
          <TouchableOpacity style={styles.button} onPress={() => pickImage("logo")}>
            <MaterialIcons name="image" size={20} color="gray" />
            <Text>Business Logo</Text>
          </TouchableOpacity>
        )}
</View>
      <Text style={styles.label}>Selected Images</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((image:any, index) => (
          <View key={index} style={{ flexDirection: "column", alignItems: "center" }}>
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
  buttonRow: { flexDirection: "row", justifyContent: "flex-start", marginBottom: 20, gap: 10 },
  button: {
    width: "auto",
    height: 40,
    backgroundColor: Colors.light.background,
    borderRadius: 50,
    flexDirection: "row",
    gap: 5,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3.84,
    elevation: 5,
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
