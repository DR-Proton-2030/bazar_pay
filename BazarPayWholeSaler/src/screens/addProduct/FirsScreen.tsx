import React from "react";
import { View, TextInput, Text } from "react-native";
import { ProductFirstInput } from "../../constants/form/productInput/ProductInput";
import { ITextinput } from "../../@types/types/TextInput.types";
import { unitOptions } from "../../constants/unitOption/UnitOption";
import { globalStyle } from "../../globalStyles/globalStyles";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const FirstScreen = ({ formData, handleInputChange }: any) => {
  return (
    <View style={globalStyle.form}>
      {ProductFirstInput.map((field: ITextinput, index: number) => {
        if (field.half) {
          if (index % 2 === 0) {
            return (
              <View style={globalStyle.row} key={index}>
                {field.name === "unit" ? (
                  <SelectDropdown
                    data={unitOptions}
                    onSelect={(selectedItem, index) => {
                      handleInputChange(field.name, selectedItem.title)
                    }}
                    renderButton={(selectedItem, isOpened) => {
                      return (
                        <View style={globalStyle.dropdownButtonStyle}>
                          {selectedItem && (
                            <Icon
                              name={selectedItem.icon}
                              style={globalStyle.dropdownButtonIconStyle}
                            />
                          )}
                          <Text style={globalStyle.dropdownButtonTxtStyle}>
                            {formData[field.name] ||
                              "একক *"}
                          </Text>
                          <Icon
                            name={isOpened ? "chevron-up" : "chevron-down"}
                            style={globalStyle.dropdownButtonArrowStyle}
                          />
                        </View>
                      );
                    }}
                    renderItem={(item, index, isSelected) => {
                      return (
                        <View
                          style={{
                            ...globalStyle.dropdownItemStyle,
                            ...(isSelected && { backgroundColor: "#D2D9DF" }),
                          }}
                        >
                          <Icon
                            name={item.icon}
                            style={globalStyle.dropdownItemIconStyle}
                          />
                          <Text style={globalStyle.dropdownItemTxtStyle}>
                            {item.title}
                          </Text>
                        </View>
                      );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={globalStyle.dropdownMenuStyle}
                  />
                ) : (
                  <TextInput
                    style={[globalStyle.input, globalStyle.halfInput]}
                    keyboardType={field.type}
                    placeholder={field.placeholder}
                    placeholderTextColor="#999"
                    value={formData[field.name]}
                    onChangeText={(text) => handleInputChange(field.name, text)}
                  />
                )}
                {ProductFirstInput[index + 1] &&
                  ProductFirstInput[index + 1].half && (
                    <TextInput
                      style={[globalStyle.input, globalStyle.halfInput]}
                      placeholder={ProductFirstInput[index + 1].placeholder}
                      keyboardType={field.type}
                      placeholderTextColor="#999"
                      value={formData[ProductFirstInput[index + 1].name]}
                      onChangeText={(text) =>
                        handleInputChange(
                          ProductFirstInput[index + 1].name,
                          text
                        )
                      }
                    />
                  )}
              </View>
            );
          }
          return null;
        } else {
          return (
            <>
              {field.name === "unit" ? (
                <SelectDropdown
                  data={unitOptions}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  renderButton={(selectedItem, isOpened) => {
                    return (
                      <View style={globalStyle.dropdownButtonStyle}>
                        {selectedItem && (
                          <Icon
                            name={selectedItem.icon}
                            style={globalStyle.dropdownButtonIconStyle}
                          />
                        )}
                        <Text style={globalStyle.dropdownButtonTxtStyle}>
                          {(selectedItem && selectedItem.title) ||
                            "Select your mood"}
                        </Text>
                        <Icon
                          name={isOpened ? "chevron-up" : "chevron-down"}
                          style={globalStyle.dropdownButtonArrowStyle}
                        />
                      </View>
                    );
                  }}
                  renderItem={(item, index, isSelected) => {
                    return (
                      <View
                        style={{
                          ...globalStyle.dropdownItemStyle,
                          ...(isSelected && { backgroundColor: "#D2D9DF" }),
                        }}
                      >
                        <Icon
                          name={item.icon}
                          style={globalStyle.dropdownItemIconStyle}
                        />
                        <Text style={globalStyle.dropdownItemTxtStyle}>
                          {item.title}
                        </Text>
                      </View>
                    );
                  }}
                  showsVerticalScrollIndicator={false}
                  dropdownStyle={globalStyle.dropdownMenuStyle}
                />
              ) : (
                <TextInput
                  style={globalStyle.input}
                  placeholder={field.placeholder}
                  placeholderTextColor="#999"
                  value={formData[field.name]}
                  keyboardType={field.type}
                  onChangeText={(text) => handleInputChange(field.name, text)}
                  key={index}
                />
              )}
            </>
          );
        }
      })}
    </View>
  );
};

export default FirstScreen;
