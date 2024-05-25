import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { globalStyle } from '../../globalStyles/globalStyles';
import { ProductFirstInput } from '../../constants/form/productInput/ProductInput';

const FirstScreen = () => {
  return (
    <View style={globalStyle.form}>
      {ProductFirstInput.map((field, index) => {
        if (field.half) {
          if (index % 2 === 0) {
            return (
              <View style={globalStyle.row} key={index}>
                <TextInput
                  style={[globalStyle.input, globalStyle.halfInput]}
                  placeholder={field.placeholder}
                  placeholderTextColor="#999"
                />
                {ProductFirstInput[index + 1] && ProductFirstInput[index + 1].half && (
                  <TextInput
                    style={[globalStyle.input, globalStyle.halfInput]}
                    placeholder={ProductFirstInput[index + 1].placeholder}
                    placeholderTextColor="#999"
                  />
                )}
              </View>
            );
          }
          return null; 
        } else {
          return (
            <TextInput
              style={globalStyle.input}
              placeholder={field.placeholder}
              placeholderTextColor="#999"
              key={index}
            />
          );
        }
      })}
    </View>
  );
};

export default FirstScreen;
