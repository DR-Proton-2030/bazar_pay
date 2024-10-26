import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { globalStyle } from '../../../globalStyles/globalStyles';
import Colors from '../../../constants/Colors';

const ImageUploader = ({ images, setImages }: any) => {
  const pickImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true, // Enable multiple selection
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImages = result.assets.map((asset: any) => asset.uri); // Get all selected image URIs
      setImages([...images, ...selectedImages]); // Append new images to the current images
    }
  };

  const removeImage = (imageToRemove: string) => {
    const updatedImages = images.filter((image: string) => image !== imageToRemove);
    setImages(updatedImages);
  };

  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
            <TouchableOpacity style={styles.removeButton} onPress={() => removeImage(item)}>
              <Ionicons name="close" size={22} color="white" style={styles.removeIcon} />
            </TouchableOpacity>
          </View>
        )}
      />
      
      {/* Add Image Button */}
      <TouchableOpacity style={globalStyle.imageUpload} onPress={pickImage}>
        <Ionicons name="image" size={40} color={Colors.light.lightText} />
        <Text style={globalStyle.imageUploadText}>ছবি যোগ করুন</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 20,
    justifyContent: 'center',
    position: 'relative',
    marginRight: 10,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 2,
  },
  removeIcon: {
    backgroundColor: 'red',
    borderRadius: 50,
    marginLeft: -10,
    marginTop: -5,
  },
});

export default ImageUploader;
