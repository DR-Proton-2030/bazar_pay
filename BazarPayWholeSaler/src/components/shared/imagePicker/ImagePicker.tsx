import React, { useState } from 'react';
import { View, Image, TouchableOpacity, FlatList, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Colors from '../../../constants/Colors';

const CustomImagePicker = ({images,setImages}:any) => {
 

  const pickImages = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,  // Allow selecting multiple images
    //   allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImages = result.assets.map((asset: any) => asset.uri);  // Get URIs of the selected images
      setImages([...images, ...selectedImages]);  // Append new images to the current list
    }
  };

  const removeImage = (imageToRemove: string) => {
    const updatedImages = images.filter((image: string) => image !== imageToRemove);
    setImages(updatedImages);
  };

  return (
    <View style={styles.container}>
   <TouchableOpacity style={styles.addButton} onPress={pickImages}>
        <Ionicons name="image-outline" size={28} color={Colors.light.blue} />
    
        <Text style={[styles.addText,{fontWeight:"600"}]}>আপলোড করুন</Text>
      </TouchableOpacity>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
            <TouchableOpacity style={styles.removeButton} onPress={() => removeImage(item)}>
              <Ionicons name="close" size={15} color="white" style={styles.removeIcon} />
            </TouchableOpacity>
          </View>
        )}
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    position: 'relative',
    marginTop:10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth:1,
    borderColor:"gray"
  },
  removeButton: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 2,
  },
  removeIcon: {
    backgroundColor: 'red',
    borderRadius: 40,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.grayBg,
    borderRadius: 10,
    paddingVertical:12,
    marginBottom:20,
    paddingHorizontal:5
  },
  addText: {
    color: Colors.light.blue,
    fontSize: 16,
    marginLeft: 10,
  },
});

export default CustomImagePicker;
