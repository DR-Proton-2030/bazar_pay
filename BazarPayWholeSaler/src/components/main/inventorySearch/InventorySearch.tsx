import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import Colors from '../../../constants/Colors';
import { Ionicons } from '@expo/vector-icons'; // Importing Expo icons
import { useNavigation } from 'expo-router';

export const InventorySearch = () => {
  const navigation = useNavigation<any>();
  const goBack = () => {
    navigation.goBack();
  };
  const createPage = () => {
    navigation.navigate("createInventory");
  };
  
  return (
    <View style={{ backgroundColor: Colors.light.blue }}>
      <StatusBar barStyle="light-content" />
      <Animated.View style={[styles.header]}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Search Inventory..."
            placeholderTextColor="#05141c"
            style={styles.input}
          />
      
          <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color="#fff" />
        </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={createPage} style={styles.createButton}>
          <Ionicons name="add" size={24} color="#fff" />
          <Text style={{color:"#fff",fontWeight:'500',marginLeft:5}}>
            Create Inventory
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 24,
    paddingTop: 212,
    backgroundColor: '#fff',
  },
  /** Header */
  header: {
    width: '100%',
    zIndex: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
    height: 170,
    alignItems: 'center', // Centered for title and input
    justifyContent: 'flex-end',
    backgroundColor: Colors.light.blue,
    elevation:10
  },
  headerTitle: {
    fontSize: 26,
    lineHeight: 34,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  /** Back Button */
  backButton: {
    position: 'absolute',
    top: 40,
    left: 24,
    padding: 10,
    zIndex: 10,
    backgroundColor: "#005ce6",
    borderRadius:10
  },
  /** Create Inventory Button */
  createButton: {
    position: 'absolute',
    top: 40,
    right: 24,
    padding: 10,
    zIndex: 10,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#005ce6",
    borderRadius:10
  },
  searchButton: {
    paddingVertical: 10,
    paddingHorizontal:20,
    zIndex: 10,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#005ce6",
    borderRadius:10,
    marginLeft:"auto"
  },
  /** Input */
  input: {
    height: 44,
    backgroundColor: '#fff',
    paddingLeft: 14,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    width:"78%"
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
    paddingBottom:7,
    flexDirection:"row",
    gap:10
  },

  
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    backgroundColor: '#173153',
    borderColor: '#173153',
  },
  btnText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
