import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import OrderCard from '../../src/components/shared/orderCard/OrderCard';

const dummyData = [
  {
    productImage: 'https://bazarpay.s3.ap-south-1.amazonaws.com/product_image/1717676087787.png',
    productName: 'Product 1',
    userName: 'User 1',
    userAvatar: 'https://via.placeholder.com/24',
    orderStatus: 'Pending',
    orderDate: '2024-06-20',
    orderId: '001',
    quantity: 2,
    price: 29.99,
  },
  {
    productImage: 'https://bazarpay.s3.ap-south-1.amazonaws.com/product_image/1717676498312.png',
    productName: 'Test product updated',
    userName: 'User 4',
    userAvatar: 'https://via.placeholder.com/24',
    orderStatus: 'Pending',
    orderDate: '2024-06-23',
    orderId: '004',
    quantity: 4,
    price: 24.99,
  },
];

const Pending = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);
    // Simulate fetching new data with a delay
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000); // Adjust delay as needed
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={['#9Bd35A', '#689F38']}
          progressBackgroundColor="#ffffff"
        />
      }
    >
      {isRefreshing && <ActivityIndicator size="large" color="#0000ff" />}
      {dummyData.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor:"white"
  },
});

export default Pending;
