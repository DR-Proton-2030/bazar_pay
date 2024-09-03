import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from './orderStyle';
import { useRoute } from "@react-navigation/native";
import RNPrint from 'react-native-print';
import { useNavigation } from 'expo-router';
import { api } from '../../utils/api';
import { PrintPdf } from '../../components/shared/print/Print';

export const OrderDetails = () => {
  const route = useRoute();
  const { product }: any = route.params;
  console.log("==================>product", product)
  const navigation: any = useNavigation();

  const updateOrderStatus = async()=>{
    try {
      const payload ={
        order_id:product?._id,
        order_status:"DELIVERED"
      }
      const updateStatus = await api.order.updateOrderStatus(payload)
      console.log(updateStatus)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerAction}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack()
                }}>
                <Feather
                  color="#0e0e0e"
                  name="x"
                  size={24} />
              </TouchableOpacity>
            </View>

            <Text numberOfLines={1} style={styles.headerTitle}>
              Receipt
            </Text>

            <View
              style={[styles.headerAction, { alignItems: 'flex-end' }]} />
          </View>

          <ScrollView
            contentContainerStyle={styles.receipt}
            showsVerticalScrollIndicator={false}>

            <Image source={{ uri: product?.product?.product_image }} style={styles.receiptLogo} />
            <Text style={styles.receiptTitle}>
              {product?.product?.product_name}
            </Text>

            <Text style={styles.receiptSubtitle}>Invoice #{product?._id}</Text>

            <View style={styles.receiptPrice}>
              <Text style={styles.receiptPriceText}>৳{product?.order_quantity * product?.wholesalerListedProduct?.selling_price}</Text>

              <Text
                style={[
                  styles.receiptPriceText,
                  { fontSize: 20, lineHeight: 32 },
                ]}>
                .00
              </Text>
            </View>

            <Text style={styles.receiptDescription}>
              {product?.wholesaler?.owner_name} Company
            </Text>
            <View style={styles.divider}>
              <View style={styles.dividerInset} />
            </View>

            <View style={styles.details}>
              <Text style={styles.detailsTitle}>Transaction details</Text>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Date</Text>

                <Text style={styles.detailsValue}>April 2, 2023</Text>
              </View>



              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Payment method</Text>

                <Text style={styles.detailsValue}>Bkash Test payment</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Receipt Number</Text>

                <Text style={styles.detailsValue}>{product?.retailer?.contact_phone}</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Billing Name</Text>

                <Text style={styles.detailsValue}>{product?.retailer?.contact_name}</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Billing Email</Text>

                <Text style={styles.detailsValue}>{product?.retailer?.contact_email}</Text>
              </View>


            </View>
          </ScrollView>
        </View>
      </SafeAreaView>

{
  product?.order_status === "DELIVERED"?
  <View style={styles.overlay}>
     <PrintPdf/>
        
      </View>
      :
<View style={styles.overlay}>
<PrintPdf/>
     
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}>
          <View style={styles.btnSecondary}>
            <Text style={styles.btnSecondaryText}>Cancel Order</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={updateOrderStatus}>
          <View style={styles.succ_btn}>
            <Text style={styles.btnText}>Order Delivered</Text>
          </View>
        </TouchableOpacity>
      </View>
}
      
    </View>
  );
}
