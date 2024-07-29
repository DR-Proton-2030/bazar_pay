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

export const OrderDetails =()=> {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerAction}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
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
           
            <Image source={{uri:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-a346ezkrins/gallery/in-galaxy-a34-5g-sm-a346-452746-452746-sm-a346ezkrins-540119575?imwidth=480" }} style={styles.receiptLogo} />
            <Text style={styles.receiptTitle}>
              Galaxy A35
            </Text>

            <Text style={styles.receiptSubtitle}>Invoice #0012-2832</Text>

            <View style={styles.receiptPrice}>
              <Text style={styles.receiptPriceText}>$115,900</Text>

              <Text
                style={[
                  styles.receiptPriceText,
                  { fontSize: 20, lineHeight: 32 },
                ]}>
                .00
              </Text>
            </View>

            <Text style={styles.receiptDescription}>
              Software Development March 2023 - April 2023
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
                <Text style={styles.detailsField}>Category</Text>

                <Text style={styles.detailsValue}>Development</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Payment method</Text>

                <Text style={styles.detailsValue}>Visa ending in 0182</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Receipt Number</Text>

                <Text style={styles.detailsValue}>9876543210</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Billing Name</Text>

                <Text style={styles.detailsValue}>John Smith</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Billing Email</Text>

                <Text style={styles.detailsValue}>johnsmith@example.com</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Billing Address</Text>

                <Text style={styles.detailsValue}>
                  1234 Elm Street, Suite 567, Anytown, USA
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>

      <View style={styles.overlay}>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Save as PDF</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
          <View style={styles.btnSecondary}>
            <Text style={styles.btnSecondaryText}>Cancel Order</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
