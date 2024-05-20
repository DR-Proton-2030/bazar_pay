import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons from @expo/vector-icons
import * as ImagePicker from 'expo-image-picker';
import { globalStyle } from '../../globalStyles/globalStyles';
import Colors from '../../constants/Colors';

const FirstScreen = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
      // Request media library permissions
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }
  
      const result:any = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImage(result.uri);
        console.log(result)
      }
    };
  return (
      
      
      <View style={globalStyle.form}>
        <TouchableOpacity style={globalStyle.quickAddButton}>
          <Text style={globalStyle.quickAddText}>দ্রুত পণ্য যোগ করুন</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
        
        <Text style={globalStyle.infoText}>আপনি ব্র্যান্ড অনুমোদিত দ্রুত পণ্য যোগ করতে পারেন</Text>
        
        <TouchableOpacity style={globalStyle.imageUpload} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={{height:100,width:100}} />
          ) : (
            <>
              <Ionicons name="image" size={40} color={Colors.light.lightText} />
              <Text style={globalStyle.imageUploadText}>ছবি যোগ করুন</Text>
            </>
          )}
        </TouchableOpacity>

        <TextInput style={globalStyle.input} placeholder="পণ্যের নাম" placeholderTextColor="#999" />
        
        <View style={globalStyle.row}>
          <TextInput style={[globalStyle.input, globalStyle.halfInput]} placeholder="একক" placeholderTextColor="#999" />
        </View>

        <View style={globalStyle.row}>
          <TextInput style={[globalStyle.input, globalStyle.halfInput]} placeholder="ক্রয় দাম" placeholderTextColor="#999" />
          <TextInput style={[globalStyle.input, globalStyle.halfInput]} placeholder="বিক্রয় দাম" placeholderTextColor="#999" />
        </View>

        <View style={globalStyle.row}>
          <TextInput style={[globalStyle.input, globalStyle.halfInput]} placeholder="ডিস্কাউন্ট (যদি থাকে)" placeholderTextColor="#999" />
          <TextInput style={[globalStyle.input, globalStyle.halfInput]} placeholder="স্টক (যদি থাকে)" placeholderTextColor="#999" />
        </View>

        <View style={globalStyle.row}>
          <TextInput style={[globalStyle.input, globalStyle.halfInput]} placeholder="ওজনের মূল্য" placeholderTextColor="#999" />
          <TextInput style={[globalStyle.input, globalStyle.halfInput]} placeholder="ফ্রি (যদি থাকে)" placeholderTextColor="#999" />
        </View>

        <View style={globalStyle.row}>
          <TextInput style={[globalStyle.input, globalStyle.halfInput]} placeholder="ক্যাটাগরি" placeholderTextColor="#999" />
          <TextInput style={[globalStyle.input, globalStyle.halfInput]} placeholder="সাব ক্যাটাগরি" placeholderTextColor="#999" />
        </View>

        <TextInput style={globalStyle.input} placeholder="অতিরিক্ত বিবরণ" placeholderTextColor="#999" />
      </View>
  );
};



export default FirstScreen;
