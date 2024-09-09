import { View, StyleSheet, ScrollView, RefreshControl, ActivityIndicator } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ActiveProducts from "../../src/screens/productList/activeProducts/ActiveProducts";
import OrderCard from "../../src/components/shared/orderCard/OrderCard";
import { api } from "../../src/utils/api";
import BasicOrderCard from "../../src/components/shared/orderCard/BasicOrderCard";
import AuthContext from "../../src/contexts/authContext/authContext";

const All = () => {
  const [allOrder, setAllOrder] = useState<any[]>([]);
  const { user } = useContext(AuthContext);
  const [isRefreshing, setIsRefreshing] = useState(false);


  const getOrderList = async () => {
    try {
      const filter = {
        wholesaler_object_id: user?._id,
      };
      const orders = await api.order.getOrderList(filter);
      setAllOrder(orders);
    } catch (error) {}
  };

  useEffect(() => {
    getOrderList();
  }, []);

  const onRefresh = () => {
    setIsRefreshing(true);
    getOrderList()
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
          colors={["#9Bd35A", "#689F38"]}
          progressBackgroundColor="#ffffff"
        />
      }
    >
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
    backgroundColor: "white",
  },
});

export default All;
