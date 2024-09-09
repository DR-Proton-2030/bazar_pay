
import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import OrderCard from "../../src/components/shared/orderCard/OrderCard";
import { api } from "../../src/utils/api";
import AuthContext from "../../src/contexts/authContext/authContext";

const Returned = () => {
  const { user } = useContext(AuthContext);
  const [allOrder, setAllOrder] = useState<any[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getOrderList = useCallback(async () => {
    try {
      const filter = {
        wholesaler_object_id: user?._id,
        order_status: "RETURNED",
      };
      const orders = await api.order.getOrderList(filter);
      setAllOrder(orders);
    } catch (error) {}
  }, [user]);

  useEffect(() => {
    getOrderList();
  }, [getOrderList]);

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
          colors={["#9Bd35A", "#689F38"]}
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
    backgroundColor: "white",
  },
});

export default Returned;
