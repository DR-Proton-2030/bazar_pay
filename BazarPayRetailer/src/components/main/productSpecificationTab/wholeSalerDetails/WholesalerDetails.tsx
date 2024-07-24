import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WholesalerDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://graphicdesignfall16.wordpress.com/wp-content/uploads/2016/10/adobe-company-logo.jpg' }} // Replace with actual logo URL
          style={styles.logo}
        />
        <Text style={styles.name}>Wholesaler Name</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Address: </Text>123 Main Street, City, Country
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Contact: </Text>+1234567890
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Email: </Text>wholesaler@example.com
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Business Hours: </Text>9:00 AM - 6:00 PM
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
    marginBottom: 10,
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
