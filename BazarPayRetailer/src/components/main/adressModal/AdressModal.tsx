import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Modal, TextInput,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import icons library
import * as Location from 'expo-location'; // Import Location from expo-location
import Colors from '../../../constants/Colors';
import { Entypo } from '@expo/vector-icons';

const AddressModal = ({handleCancelLogout}:any) => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addresses, setAddresses] = useState([
    { id: 1, address: 'NewTown, Kolkata' },
    { id: 3, address: 'Asansol, Purba Bardhaman' },
  ]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [newAddress, setNewAddress] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
      }
    })();
  }, []);

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };

  const handleConfirmAddress = () => {
    if (selectedAddress) {
      // Perform action with selected address, e.g., save or confirm
      handleCancelLogout()
      console.log('Selected Address:', selectedAddress.address);
    } else {
      console.log('Please select an address before confirming.');
    }
  };

  const handleAddAddress = async () => {
    let location = await Location.getCurrentPositionAsync({});
    let newAddr = `Lat: ${location.coords.latitude}, Lon: ${location.coords.longitude}`;
    setAddresses([...addresses, { id: addresses.length + 1, address: newAddr }]);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image style={{width:220,height:150,marginLeft:"auto",marginRight:"auto"}} source={{uri:"https://img.freepik.com/premium-vector/fast-delivery-mobile-ecommerce-concept-online-food-pizza-order-packaging-box-infographic_86047-131.jpg?size=626&ext=jpg&ga=GA1.1.1758660572.1718655350&semt=ais_user"}}/>
      <Text style={styles.selectedAddressText}>
        Saved Addres
      </Text>

      {addresses.map((address) => (
        <TouchableOpacity
          key={address.id}
          style={styles.addressItem}
          onPress={() => handleAddressSelect(address)}
        >
          <Entypo name="location" style={{marginRight:10}} size={22} color="black" />
          <Text>{address.address}</Text>
          {selectedAddress && selectedAddress.id === address.id && (
            <Ionicons name="checkmark-circle" size={24} color="green" style={styles.icon} />
          )}
        </TouchableOpacity>
      ))}
  <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>+ Add Address</Text>
      </TouchableOpacity>
  <TouchableOpacity style={styles.ConfirmButton} onPress={handleConfirmAddress} disabled={!selectedAddress}>
        <Text style={styles.confirmuttonText}>Confirm Adress</Text>
      </TouchableOpacity>


    
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add New Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter address manually"
            value={newAddress}
            onChangeText={setNewAddress}
          />
          <Button title="Use Current Location" onPress={handleAddAddress} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectedAddressText: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight:'700',
    // textAlign:"center",
    marginTop:10
  },
  addressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  icon: {
    marginLeft: 'auto',
  },
  addButton: {
    borderRadius: 8,
    alignItems: 'flex-start',
    marginBottom:9
  },
  ConfirmButton: {
    borderRadius: 6,
    backgroundColor:Colors.light.orange,
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:8,
  },
  addButtonText: {
    color: Colors.light.orange,
    fontSize: 16,
  },
  confirmuttonText: {
    color: Colors.light.background,
    fontSize: 20,
    textAlign:"center"
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
});

export default AddressModal;
