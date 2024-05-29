import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { globalStyle } from '../../../globalStyles/globalStyles';
import Colors from '../../../constants/Colors';

const ImageUploader = ({image,setImage}:any) => {
  const pickImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const newImage: string = result.assets[0].uri;
      setImage(newImage);
      console.log(newImage);
    }
  };

  const removeImage = () => {
    setImage(null);
  };
  return (
    <>
      {image ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
          <TouchableOpacity style={styles.removeButton} onPress={removeImage}>
            <Ionicons name="close" size={22} color="white" style={{backgroundColor:"red",borderRadius:50,marginLeft:-10,marginTop:-5}} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={globalStyle.imageUpload} onPress={() => pickImage()}>
          <Ionicons name="image" size={40} color={Colors.light.lightText} />
          <Text style={globalStyle.imageUploadText}>ছবি যোগ করুন</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 20,
    justifyContent: 'center',
    position: 'relative',
    flexDirection:"row",

  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  removeButton: {
  },
});

export default ImageUploader;
