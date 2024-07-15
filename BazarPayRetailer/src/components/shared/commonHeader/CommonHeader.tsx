import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { useNavigation } from 'expo-router';

const AppHeader = ({ title }:any) => {
  const navigation: any = useNavigation();

  const handlenavigate =()=>{
    navigation.goBack()
  }
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handlenavigate}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <Ionicons name="cart" size={24} color={Colors.light.orange} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    padding: 15,
    paddingTop: 40, // for safe area on iOS
  },
  headerTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AppHeader;
