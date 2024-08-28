// import React from 'react'

// const PymentDuePage = () => {
//   return (
   
//   )
// }

// export default PymentDuePage

import { Entypo ,Feather} from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useContext, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  PanResponder,
  Dimensions,
} from 'react-native';
import { api } from '../../utils/api';
import { useNavigation } from 'expo-router';
import AuthContext from '../../contexts/authContext/authContext';
import { styles } from './payment.styles';
const paymentMethods = [
  {
    id: 'paypal',
    label: 'PayPal',
    img: 'https://assets.withfra.me/credit_cards/paypal.png',
  },
 
];
const { height } = Dimensions.get("window");



export const PymentDuePage =()=> {
  const navigation: any = useNavigation();

  const [form, setForm] = React.useState({
    paymentMethod: paymentMethods[0].id,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const translateY = useRef(new Animated.Value(height)).current;

  const handleLogoutPress = () => {
    setModalVisible(true);
    openDrawer();
  };

  const handleCancelLogout = () => {
    setModalVisible(false);
    closeDrawer();
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0 && gestureState.dy <= height * 0.5) {
          translateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dy > height * 0.15) {
          closeDrawer();
        } else {
          openDrawer();
        }
      }
    })
  ).current;

  const openDrawer = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(translateY, {
      toValue: height,
      duration: 300,
      useNativeDriver: true
    }).start(() => setModalVisible(false));
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Summary</Text>

              <TouchableOpacity
                style={styles.sectionAction}>
                <Feather
                  color="#1A1A1A"
                  name="arrow-right"
                  size={17} />
              </TouchableOpacity>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>

              <Text style={styles.summaryPrice}>৳5000</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Fee</Text>

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <Feather
                  color="#454545"
                  name="help-circle"
                  size={17} />
              </TouchableOpacity>

              <Text style={styles.summaryPrice}>৳3.95</Text>
            </View>

            

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Discount</Text>

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <Feather
                  color="#454545"
                  name="help-circle"
                  size={17} />
              </TouchableOpacity>

              <Text style={styles.summaryPrice}>৳3.75</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Due Amount</Text>

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <Feather
                  color="#454545"
                  name="help-circle"
                  size={17} />
              </TouchableOpacity>

              <Text style={styles.summaryPrice}>৳3.75</Text>
            </View>

            <View style={styles.summaryTotal}>
              <Text style={styles.summaryLabel}>Total</Text>

              {/* <Text style={styles.summaryPriceOld}>৳25.90</Text> */}

              <Text style={styles.summaryPricePrimary}>৳22.15</Text>
            </View>

           
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Payment methods</Text>

            <View style={styles.sectionBody}>
              {paymentMethods.map(({ id, label, img }, index, arr) => {
                const isFirst = index === 0;
                const isLast = index === arr.length - 1;
                const isActive = form.paymentMethod === id;

                return (
                  <View
                    key={index}
                    style={[
                      styles.radioWrapper,
                      isActive && styles.radioActive,
                      isFirst && styles.radioFirst,
                      isLast && styles.radioLast,
                    ]}>
                    <TouchableOpacity
                      onPress={() =>
                        setForm({ ...form, ['paymentMethod']: id })
                      }
                      style={styles.radio}>
                    

                      <Image
                        alt=""
                        resizeMode="contain"
                        source={{ uri: img }}
                        style={styles.radioImg} />

                      <Text style={styles.radioLabel}>{label}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.sectionButton}>
              {/* <Feather color="#1A1A1A" name="arrow" size={14} /> */}

              <Text style={styles.sectionButtonText}>See Cardholder's Detail</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>

      <View style={styles.overlay}>
      <TouchableOpacity
        onPress={() => {
          // handle onPress
        }}
      >
        <View style={styles.btn1}>
        <AntDesign name="clouddownloado" size={24} color="white" />
          <Text style={styles.btnText}> Download Pdf</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // handle onPress
        }}
      >
        <View style={styles.btn2}>
          <Feather name="send" size={22} color="white" />
          <Text style={styles.btnText}> Send Reminder</Text>
        </View>
      </TouchableOpacity>
      {/* <SliderButton price={userBuyingPrice} handleLogoutPress={handleLogoutPress} handlePlaceOrder={handlePlaceOrder}/> */}
      </View>
      {modalVisible && (
        <>
          <TouchableOpacity onPress={handleCancelLogout} />
          <Animated.View
            style={[styles.drawer, { transform: [{ translateY }] }]}
            {...panResponder.panHandlers}>
            <View style={styles.handle} />
            {/* <AddressModal handleCancelLogout={handleCancelLogout} /> */}
          </Animated.View>
        </>
      )}
    </View>
  );
}

