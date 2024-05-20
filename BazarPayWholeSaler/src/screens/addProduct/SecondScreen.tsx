import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons from @expo/vector-icons
import Colors from '../../constants/Colors';

const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>পণ্যের বারকোড যুক্ত করুন?</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.barcodeButton}>
          <Ionicons name="barcode" size={24} color={Colors.light.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.barcodeButton}>
          <Ionicons name="barcode" size={24} color={Colors.light.primary} />
        </TouchableOpacity>
        <TextInput style={styles.barcodeInput} placeholder="বারকোড যুক্ত করুন" placeholderTextColor="#999" />
      </View>

      <TextInput style={styles.input} placeholder="পণ্যের ওয়ারেন্টি (যদি থাকে)" placeholderTextColor="#999" />
      
      <View style={styles.row}>
        <TextInput style={[styles.input, styles.halfInput]} placeholder="পণ্যের ডিস্কাউন্ট (যদি থাকে)" placeholderTextColor="#999" />
        <TextInput style={[styles.input, styles.halfInput]} placeholder="পণ্যের জিএটি (যদি থাকে)" placeholderTextColor="#999" />
      </View>
      
      <TextInput style={styles.input} placeholder="নোট" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="চালানের নম্বর (যদি থাকে)" placeholderTextColor="#999" />

      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>সর্বমোট:</Text>
        <Text style={styles.totalAmount}>৳ ২০,০০০</Text>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>পণ্যটি যোগ করুন</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  barcodeButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barcodeInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginLeft: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  halfInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  addButton: {
    backgroundColor: Colors.light.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SecondScreen;
