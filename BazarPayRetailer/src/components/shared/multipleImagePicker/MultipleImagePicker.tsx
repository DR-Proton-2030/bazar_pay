import React, { useState } from 'react';
import { View, Image, TouchableOpacity, FlatList, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Colors from '../../../constants/Colors';

const MultipleImagePicker = ({images,setImages}:any) => {
 

  const pickImages = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,  
    //   allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImages = result.assets.map((asset: any) => asset.uri);  
      setImages([...images, ...selectedImages]); 
    }
  };

  const removeImage = (imageToRemove: string) => {
    const updatedImages = images.filter((image: string) => image !== imageToRemove);
    setImages(updatedImages);
  };

  return (
    <View style={styles.container}>
   <TouchableOpacity style={styles.addButton} onPress={pickImages}>
        <Ionicons name="image" size={28} color={Colors.light.orange} />
    
        <Text style={[styles.addText,{fontWeight:"600"}]}>Upload Images</Text>
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
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    borderWidth:1,
    borderColor:"gray",
  },
  removeButton: {
    position: 'absolute',
    top: 15,
    right: -5,
    backgroundColor:  '#cc0000',
    borderRadius: 50,
    padding: 2,
  },
  removeIcon: {
    backgroundColor: '#cc0000',
    borderRadius: 40,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.lightOrange,
    borderRadius: 10,
    paddingVertical:12,
    paddingHorizontal:5
  },
  addText: {
    color: Colors.light.orange,
    fontSize: 16,
    marginLeft: 10,
  },
});

export default MultipleImagePicker;
