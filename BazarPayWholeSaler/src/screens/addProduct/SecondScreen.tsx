import React from 'react';
import { View, TextInput } from 'react-native';
import { globalStyle } from '../../globalStyles/globalStyles';
import { ProductSecondInput } from '../../constants/form/productInput/ProductInput';

const FirstScreen = ({ formData, handleInputChange }:any) => {
  return (
    <View style={globalStyle.form}>
      {ProductSecondInput.map((field, index) => {
        if (field.half) {
          if (index % 2 === 0) {
            return (
              <View style={globalStyle.row} key={index}>
                <TextInput
                  style={[globalStyle.input, globalStyle.halfInput]}
                  placeholder={field.placeholder}
                  keyboardType={field.type}
                  placeholderTextColor="#999"
                  value={formData[field.name]}
                  onChangeText={(text) => handleInputChange(field.name, text)}
                />
                {ProductSecondInput[index + 1] && ProductSecondInput[index + 1].half && (
                  <TextInput
                    style={[globalStyle.input, globalStyle.halfInput]}
                    placeholder={ProductSecondInput[index + 1].placeholder}
                    keyboardType={field.type}
                    placeholderTextColor="#999"
                    value={formData[ProductSecondInput[index + 1].name]}
                    onChangeText={(text) => handleInputChange(ProductSecondInput[index + 1].name, text)}
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
              keyboardType={field.type}
              value={formData[field.name]}
              onChangeText={(text) => handleInputChange(field.name, text)}
              key={index}
            />
          );
        }
      })}
    </View>
  );
};

export default FirstScreen;
