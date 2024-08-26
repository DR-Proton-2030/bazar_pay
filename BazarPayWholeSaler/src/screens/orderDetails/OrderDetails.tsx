import { useRoute } from '@react-navigation/native';
import React from 'react'
import { View } from 'react-native'
import Productverview from '../../components/main/orderDetailsPage/productverview/Productverview';
import OrderOverview from '../../components/main/orderDetailsPage/orderOverview/OrderOverview';
import LocationOverview from '../../components/main/orderDetailsPage/locationOverview/LocationOverview';
import PaymentOverview from '../../components/main/orderDetailsPage/paymentOverview/PaymentOverview';
import ActionButton from '../../components/main/orderDetailsPage/actionButton/ActionButton';

const OrderDetails = () => {
    const route = useRoute();
    const order:any = route.params;
    console.log("=========>param order",order)
  return (
<View style={{flex:1,backgroundColor:"white",paddingHorizontal:15,paddingVertical:20}}>
    <Productverview/>
    <LocationOverview/>
    <PaymentOverview/>
    <OrderOverview/>
    <ActionButton/>
</View>
  )
}

export default OrderDetails