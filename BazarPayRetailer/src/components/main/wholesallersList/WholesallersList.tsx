import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import AppHeader from '../../shared/commonHeader/CommonHeader';
import Colors from '../../../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const dummyWholesalers = [
  {
    name: 'Wholesaler A',
    price: '$100',
    stock: '200 units',
    logo: 'https://via.placeholder.com/100', // Placeholder image
  },
  {
    name: 'Wholesaler B',
    price: '$95',
    stock: '150 units',
    logo: 'https://via.placeholder.com/100', // Placeholder image
  },
  {
    name: 'Wholesaler C',
    price: '$105',
    stock: '300 units',
    logo: 'https://via.placeholder.com/100', // Placeholder image
  },
];

const WholesalersList = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {dummyWholesalers.map((wholesaler, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <View style={styles.logoContainer}>
              <Image source={{ uri: wholesaler.logo }} style={styles.logo} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{wholesaler.name}</Text>
              <Text style={styles.price}>Price: {wholesaler.price}</Text>
              <Text style={styles.stock}>Stock: {wholesaler.stock}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  logoContainer: {
    marginRight: 15,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: Colors.light.orange,
    marginBottom: 5,
  },
  stock: {
    fontSize: 14,
    color: '#666',
  },
});

export default WholesalersList;
