import { View, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ActiveProducts from '../../src/screens/productList/activeProducts/ActiveProducts'
import OrderCard from '../../src/components/shared/orderCard/OrderCard';
import { api } from '../../src/utils/api';
import BasicOrderCard from '../../src/components/shared/orderCard/BasicOrderCard';

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
const [allOrder,setAllOrder]=useState<any[]>([])

const getOrderList = async()=>{
  try {
    const filter ={
      wholesaler_object_id:"6696054a3a1c178ad8053204"
    }
    const orders = await api.order.getOrderList(filter)
    console.log("=======>orders",orders)
    setAllOrder(orders)
  } catch (error) {
    
  }
}

useEffect(() => {
  getOrderList()
}, [])

return (
  <ScrollView style={styles.container}>
    {allOrder.map((order, index) => (
      <BasicOrderCard key={index} order={order} />
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