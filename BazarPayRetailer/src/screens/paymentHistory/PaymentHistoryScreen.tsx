
import { Feather, FontAwesome, Octicons } from '@expo/vector-icons';
import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Colors from '../../constants/Colors';
import AppHeader from '../../components/shared/commonHeader/CommonHeader';
import { api } from '../../utils/api';
import AuthContext from '../../contexts/authContext/authContext';
import { useNavigation } from 'expo-router';

export const PaymentHistoryScreen = () =>{
    const {user}=useContext(AuthContext);
    const [orderHistory, setOrderHistory] = useState<any>([])
    const navigation: any = useNavigation();

    const getOrderHistory = async() => {
        try {
            const filter={
                retailer_object_id: user?._id || "668bbf12fb3afbe5d9c30531"
            }
            const result = await api.order.getOrderHIstory(filter)
            setOrderHistory(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getOrderHistory()
    }, [])
    
  return (
    <>
    <View style={{ backgroundColor: 'white',flex:1 }}>
        <AppHeader title={"My Orders"}/>
     <ScrollView style={{paddingHorizontal:10,marginTop:10}}>

              {orderHistory.map((item:any, index:any) => {
                  return (
                      <View key={index} style={styles.cardWrapper}>
                    <TouchableOpacity
                      onPress={() => {
                          navigation.navigate('orderDetails', {
                            product: item,
                          });
                        }}>
                      <View style={styles.card}>
                       
                        <Image style={styles.cardIcon} source={{ uri: item.product?.product_image }} />

                        <View style={styles.cardBody}>
                          <Text style={styles.cardTitle}>{item.product?.product_name}</Text>

                          <View style={styles.cardSubtitle}>
                            <Text style={styles.cardSymbol}>2 Days ago</Text>

                          </View>
                        </View>

                        <Text style={styles.cardPrice}>
                          {item.order_status}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
            })}
          
            </ScrollView>
    </View>
        </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 2,
    paddingHorizontal: 0,
  },
  header: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: 'black',
    marginBottom: 12,
  },
  /** Section */
  section: {
    marginTop: 12,
    marginBottom: 16,
    paddingHorizontal:20
  },
  sectionHeader: {
    paddingRight: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  sectionItems: {
    marginTop: 8,
  },
  /** Card */
  card: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal:10
  },
  cardWrapper: {
 backgroundColor:Colors.light.cardColor,
 borderRadius:20,
 marginBottom:10
  },
  cardIcon: {
    width: 46,
    height: 56,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBody: {
    marginRight: 'auto',
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: 'black',
  },
  cardSubtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  cardSymbol: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#5b6a73',
  },
  cardChange: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    marginLeft: 12,
  },
  cardPrice: {
    marginLeft: 'auto',
    paddingRight: 16,
    fontSize: 17,
    fontWeight: '600',
    color: 'gray',
 
  },
});