import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WholesalerDetails = ({wholesalerDetails}:any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: wholesalerDetails?.logo }} // Replace with actual logo URL
          style={styles.logo}
        />
        <Text style={styles.name}>{wholesalerDetails?.owner_name}</Text>
      </View>
      <View style={styles.details}>
       
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Contact: </Text>{wholesalerDetails?.owner_phone}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Email: </Text>{wholesalerDetails?.owner_email}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Nid: </Text>{wholesalerDetails?.nid_number}
        </Text>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    padding: 15,
    borderRadius: 10,
    // backgroundColor:"white"
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginRight: 15,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: 'black',
  },
  details: {
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  detailItem: {
    fontSize: 14,
    marginBottom: 10,
    color: '#555',
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
});

export default WholesalerDetails;
