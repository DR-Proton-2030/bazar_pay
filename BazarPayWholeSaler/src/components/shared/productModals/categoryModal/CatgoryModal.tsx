import React, { useState } from 'react';
import { styles } from '../../../../screens/newAddProduct/styles';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export const SelectModal = ({ type, data, handleSelect }: any) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Handle search functionality
  const handleSearch = (text: string) => {
    setSearchText(text);

  };

  return (
    <>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {
            type === "BRAND" ?
              <Text style={styles.modalTitle}>পণ্যের Brand নির্বাচন করুন</Text>
              :
              type === "CATEGORY" ?
                <Text style={styles.modalTitle}>পণ্যের ক্যাটেগরি নির্বাচন করুন</Text>
                :
                type === "SUBCATEGORY" ?
                  <Text style={styles.modalTitle}>পণ্যের সাবক্যাটেগরি নির্বাচন করুন</Text>
                  : null
          }

          {/* Search Box */}
          <View style={styles.searchBox}>
          <AntDesign name="search1" size={24} color="black" />
            <TextInput
              style={styles.searchInput}
              placeholder={`Search ${type.toLowerCase()}...`}
              value={searchText}
              onChangeText={handleSearch}
            />
          </View>
        
        <View style={{borderBottomWidth:2,marginVertical:5,borderColor:"gray"}} />
          {/* List of Items */}
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelect(item)}
                style={styles.modalItem}
              >
                <Text style={styles.modalItemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </>
  );
};
