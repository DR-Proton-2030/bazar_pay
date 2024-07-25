import { Feather } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
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
import SliderButton from '../../components/shared/sliderButton/SliderButton';
import { styles } from './style';
import AddressModal from '../../components/main/adressModal/AdressModal';
import { useRoute } from "@react-navigation/native";
const paymentMethods = [
  {
    id: 'paypal',
    label: 'PayPal',
    img: 'https://assets.withfra.me/credit_cards/paypal.png',
  },
  {
    id: 'amex-89001',
    label: 'Amex ••••89001',
    img: 'https://assets.withfra.me/credit_cards/amex.png',
  },
  {
    id: 'visa-3021',
    label: 'Visa ••••3021',
    img: 'https://assets.withfra.me/credit_cards/visa.png',
  },
];
const { height } = Dimensions.get("window");
export const PaymentScreen =()=> {

  const route = useRoute();
  const { userBuyingPrice}: any = route.params;
  
  const [form, setForm] = React.useState({
    paymentMethod: paymentMethods[0].id,
  });

  const [address, setAddress] = useState('Newtown, Kolkata WestBengal, India');

  const [modalVisible, setModalVisible] = useState(false);
  const translateY = useRef(new Animated.Value(height)).current;
  const [departmernt, setDepartmernt] = useState("");



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
        <View style={styles.header}>
          <View style={styles.headerAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <Feather
                color="#1d1d1d"
                name="arrow-left"
                size={21} />
            </TouchableOpacity>
          </View>

          <Text style={styles.headerTitle}>Checkout</Text>

          <View style={styles.headerAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <Feather
                color="#1d1d1d"
                name="more-horizontal"
                size={21} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Summary</Text>

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.sectionAction}>
                <Feather
                  color="#1A1A1A"
                  name="arrow-right"
                  size={17} />
              </TouchableOpacity>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>

              <Text style={styles.summaryPrice}>৳{userBuyingPrice}</Text>
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

            <View style={styles.summaryTotal}>
              <Text style={styles.summaryLabel}>Total</Text>

              <Text style={styles.summaryPriceOld}>৳25.90</Text>

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
                      <View
                        style={[
                          styles.radioInput,
                          isActive && styles.radioInputActive,
                        ]} />

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
              <Feather color="#1A1A1A" name="plus" size={14} />

              <Text style={styles.sectionButtonText}>Add payment method</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>

      <View style={styles.overlay}>
      <SliderButton price={999} handleLogoutPress={handleLogoutPress}/>
      </View>
      {modalVisible && (
        <>
          <TouchableOpacity onPress={handleCancelLogout} />
          <Animated.View
            style={[styles.drawer, { transform: [{ translateY }] }]}
            {...panResponder.panHandlers}>
            <View style={styles.handle} />
            <AddressModal handleCancelLogout={handleCancelLogout} />
          </Animated.View>
        </>
      )}
    </View>
  );
}

