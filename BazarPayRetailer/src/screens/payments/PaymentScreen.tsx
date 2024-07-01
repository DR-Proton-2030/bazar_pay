import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const PaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
      Alert.alert('Payment Successful', 'Your payment was processed successfully!');

  };

  const validateForm = () => {
    const cardNumberRegex = /^[0-9]{16}$/;
    const cardHolderRegex = /^[a-zA-Z ]+$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    const cvvRegex = /^[0-9]{3,4}$/;

    return (
      cardNumberRegex.test(cardNumber) &&
      cardHolderRegex.test(cardHolder) &&
      expiryDateRegex.test(expiryDate) &&
      cvvRegex.test(cvv)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Details</Text>
      
      <Text style={styles.label}>Card Number</Text>
      <TextInput
        style={styles.input}
        placeholder="1234 5678 9012 3456"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
        maxLength={16}
      />
      
      <Text style={styles.label}>Cardholder Name</Text>
      <TextInput
        style={styles.input}
        placeholder="John Doe"
        value={cardHolder}
        onChangeText={setCardHolder}
      />
      
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Expiry Date</Text>
          <TextInput
            style={styles.input}
            placeholder="MM/YY"
            keyboardType="numeric"
            value={expiryDate}
            onChangeText={setExpiryDate}
            maxLength={5}
          />
        </View>
        
        <View style={styles.column}>
          <Text style={styles.label}>CVV</Text>
          <TextInput
            style={styles.input}
            placeholder="123"
            keyboardType="numeric"
            value={cvv}
            onChangeText={setCvv}
            maxLength={4}
          />
        </View>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 0.48,
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default PaymentScreen;
