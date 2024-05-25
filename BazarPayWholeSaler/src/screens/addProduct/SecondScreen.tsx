import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { ProductSecondInput } from '../../constants/form/productInput/ProductInput';

const SecondScreen = () => {
  return (
    <View style={styles.container}>
      {ProductSecondInput.map((field, index) => {
        if (field.half) {
          if (index % 2 === 0) {
            return (
              <View style={styles.row} key={index}>
                <TextInput
                  style={[styles.input, styles.halfInput]}
                  placeholder={field.placeholder}
                  placeholderTextColor="#999"
                />
                {ProductSecondInput[index + 1] && ProductSecondInput[index + 1].half && (
                  <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder={ProductSecondInput[index + 1].placeholder}
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
              style={styles.input}
              placeholder={field.placeholder}
              placeholderTextColor="#999"
              key={index}
            />
          );
        }
      })}

      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>সর্বমোট:</Text>
        <Text style={styles.totalAmount}>৳ ২০,০০০</Text>
      </View>

   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
