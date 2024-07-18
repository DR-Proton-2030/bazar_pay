import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';
import { useNavigation } from 'expo-router';

const WholesallerCard = ({ wholesaler, index,productId }:any) => {
  const inStock = wholesaler.current_stock > 0;
  const navigation: any = useNavigation();
    const handleNavigate = () => {
      console.log(wholesaler?._id)
      navigation.navigate("productDetailsPage",{wholesalerId:wholesaler?._id});
    };

  return (
    <TouchableOpacity key={index} style={styles.card} onPress={handleNavigate}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: wholesaler.wholesaler.logo }} style={styles.logo} />
      </View>
      <View style={styles.infoContainer}>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <Text style={styles.name}>{wholesaler.wholesaler?.wholesaler_name}</Text>
        <View style={[styles.chip, inStock ? styles.inStock : styles.outOfStock]}>
          <Text style={styles.chipText}>{inStock ? 'In Stock' : 'Out of Stock'}</Text>
        </View>
        </View>
     
        <Text style={styles.price}>Price: {wholesaler.selling_price}</Text>
        {/* <Text style={styles.stock}>Stock: {wholesaler.current_stock}</Text> */}
       
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    elevation: 5,
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
    marginBottom: 10,
  },
  chip: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  inStock: {
    backgroundColor: '#d4edda',
  },
  outOfStock: {
    backgroundColor: '#f8d7da',
  },
  chipText: {
    fontSize: 12,
    color: '#155724',
  },
});

export default WholesallerCard;
