import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ActiveProducts from '../../src/screens/productList/activeProducts/ActiveProducts'
import OrderCard from '../../src/components/shared/orderCard/OrderCard';

const dummyData = [
  {
    productImage: 'https://bazarpay.s3.ap-south-1.amazonaws.com/product_image/1717676087787.png',
    productName: 'Product 1',
    userName: 'User 1',
    userAvatar: 'https://via.placeholder.com/24',
    orderStatus: 'Completed',
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
    orderStatus: 'Completed',
    orderDate: '2024-06-23',
    orderId: '004',
    quantity: 4,
    price: 24.99,
  },
];

const All = () => {
//   return (
//    <ActiveProducts/>
//   )
// }

return (
  <ScrollView style={styles.container}>
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


export default All