import React, { useCallback, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../../../screens/newAddProduct/styles';
import Colors from '../../../../constants/Colors';
import { api } from '../../../../utils/api';

export const NewProductModal = ({ images, setImages , type, name, setName, description, setDescription, handleCreateNew }: any) => {
 

  const pickImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]); 
    }
  };

  const removeImage = (imageToRemove: string) => {
    const updatedImages = images.filter((image: any) => image !== imageToRemove);
    setImages(updatedImages); 
  };

  return (
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
      {
            type === "BRAND" ?
              <Text style={styles.modalTitle}>নতুন ব্র্যান্ড তৈরি করুন</Text>
              :
              type === "CATEGORY" ?
                <Text style={styles.modalTitle}>নতুন ক্যাটেগরি তৈরি করুন</Text>
                :
                type === "SUBCATEGORY" ?
                  <Text style={styles.modalTitle}>নতুন সাবক্যাটেগরি তৈরি করুন</Text>
                  : null
          }
        
        <TextInput
          style={styles.modalInput}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        
        <TextInput
          style={styles.modalInput}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />

        <TouchableOpacity style={customStyles.imagePickerButton} onPress={pickImage}>
          <Ionicons name="image-outline" size={30} color={Colors.light.primary} />
          <Text style={customStyles.imagePickerText}>ছবি আপলোড করুন</Text>
        </TouchableOpacity>

        <View style={customStyles.imageList}>
          {images.map((imageUri:any, index:any) => (
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
          {
            type === "BRAND" ?
              <Text style={styles.btnText}>ব্র্যান্ড তৈরি করুন</Text>
              :
              type === "CATEGORY" ?
                <Text style={styles.btnText}>ক্যাটেগরি তৈরি করুন</Text>
                :
                type === "SUBCATEGORY" ?
                  <Text style={styles.btnText}>সাবক্যাটেগরি তৈরি করুন</Text>
                  : null
          }
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
