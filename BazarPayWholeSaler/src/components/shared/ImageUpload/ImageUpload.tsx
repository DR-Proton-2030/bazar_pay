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

export default function ImagePickerExample() {
  const [images, setImages] = useState([]);
  const [hiddenButtons, setHiddenButtons] = useState([]);
  const [showSubmit, setShowSubmit] = useState(false);

  const pickImage = async (buttonName) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const newImages = [...images];
      newImages.push({ name: buttonName, uri: result.assets[0].uri });
      setImages(newImages);

      setHiddenButtons((prevHiddenButtons) => [
        ...prevHiddenButtons,
        buttonName,
      ]);
    }
  };

  useEffect(() => {
    if (images.length === 4) {
      setShowSubmit(true);
    }
  }, [images]);

  const handleSubmit = () => {
    console.log("Selected Images:", images);
  };

  return (
    <View style={styles.container}>
      {!images ? (
        <Text style={styles.label}>Upload Supporting Documents* </Text>
      ) : null}

      <View style={styles.buttonRow}>
        {!hiddenButtons.includes("Shop SignBoard") && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => pickImage("Shop SignBoard")}
          >
            <MaterialIcons name="image" size={20} color="gray" />
            <Text>Shop SignBoard</Text>
          </TouchableOpacity>
        )}
        {!hiddenButtons.includes("Own") && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => pickImage("Own")}
          >
            <MaterialIcons name="image" size={20} color="gray" />
            <Text>Own</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.buttonRow}>
        {!hiddenButtons.includes("Trade License") && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => pickImage("Trade License")}
          >
            <MaterialIcons name="image" size={20} color="gray" />
            <Text>Trade License</Text>
          </TouchableOpacity>
        )}
        {!hiddenButtons.includes("NID") && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => pickImage("NID")}
          >
            <MaterialIcons name="image" size={20} color="gray" />
            <Text>NID</Text>
          </TouchableOpacity>
        )}
      </View>

      {images ? <Text style={styles.label}>Selected Images</Text> : null}

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => (
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              key={index}
              source={{ uri: image.uri }}
              style={styles.image}
            />
            <Text
              style={{
                textAlign: "center",
                backgroundColor: Colors.light.grayBtn,
                borderRadius: 50,
                marginTop: 5,
                justifyContent: "center",
                width: "auto",
                paddingHorizontal: 20,
              }}
            >
              {image?.name}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
        {showSubmit && (
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    gap: 10,
  },
  button: {
    width: "auto",
    height: 40,
    backgroundColor: Colors.light.grayBtn,
    borderRadius: 50,
    flexDirection: "row",
    gap: 5,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  label: {
    fontWeight: "bold",
    marginBottom: 25,
    marginLeft: 10,
  },
  image: {
    width: 90,
    height: 80,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  submitButton: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    height: 60,
    width: 60,
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
