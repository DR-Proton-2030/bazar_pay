import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import OrderCard from '../../src/components/shared/orderCard/OrderCard';
import { api } from '../../src/utils/api';



const Pending = () => {
  const [allOrder,setAllOrder]=useState<any[]>([])

const getOrderList = async()=>{
  try {
    const filter ={
      wholesaler_object_id:"6696054a3a1c178ad8053204",
      order_status:"PENDING"
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
      {allOrder.map((order, index) => (
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
