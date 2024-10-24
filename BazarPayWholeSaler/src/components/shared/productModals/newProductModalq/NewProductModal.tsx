import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../../../screens/newAddProduct/styles';
import Colors from '../../../../constants/Colors';

export const NewProductModal = ({ type, name, setName, description, setDescription, handleCreateNew }: any) => {
  const [images, setImages] = useState<string[]>([]); // To store selected image URIs

  // Function to pick an image from the gallery
  const pickImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]); // Add the selected image URI to the state
    }
  };

  // Function to remove an image
  const removeImage = (imageToRemove: string) => {
    const updatedImages = images.filter(image => image !== imageToRemove);
    setImages(updatedImages); // Update the images after removing one
  };

  return (
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Create New {type}</Text>
        
        <TextInput
          style={styles.modalInput}
          placeholder="Brand Name"
          value={name}
          onChangeText={setName}
        />
        
        <TextInput
          style={styles.modalInput}
          placeholder="Brand Description"
          value={description}
          onChangeText={setDescription}
        />

        {/* Image Picker Button */}
        <TouchableOpacity style={customStyles.imagePickerButton} onPress={pickImage}>
          <Ionicons name="image-outline" size={30} color={Colors.light.primary} />
          <Text style={customStyles.imagePickerText}>Add Image</Text>
        </TouchableOpacity>

        {/* Display selected images */}
        <View style={customStyles.imageList}>
          {images.map((imageUri, index) => (
            <View key={index} style={customStyles.imageContainer}>
              <Image source={{ uri: imageUri }} style={customStyles.image} />
              <TouchableOpacity onPress={() => removeImage(imageUri)} style={customStyles.removeButton}>
                <Ionicons name="close" size={18} color="white" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <TouchableOpacity onPress={handleCreateNew}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Create {type}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Custom styles for image picker and display
const customStyles = StyleSheet.create({
  imagePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePickerText: {
    marginLeft: 10,
    fontSize: 16,
    color: Colors.light.primary,
  },
  imageList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainer: {
    marginRight: 10,
    marginBottom: 10,
    position: 'relative',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  removeButton: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 4,
  },
});

export default NewProductModal;
