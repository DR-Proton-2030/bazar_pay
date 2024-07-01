import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Alert, Dimensions, Animated, PanResponder } from 'react-native';
import SliderButton from '../../components/shared/sliderButton/SliderButton';
import ProductHeader from '../../components/main/productDetails/productHeader/ProductHeader';
import Colors from '../../constants/Colors';
import ImageBanner from '../../components/shared/imageBanner/ImageBanner';
import veg from "../../../assets/images/veg.png";
import { styles } from './cartstyle';
import { RenderProductCartItem } from '../../components/shared/cartProductCard/CartProductCard';
import AddressModal from '../../components/main/adressModal/AdressModal';
import { ProductCartContext } from '../../contexts/productCartContext/Provider';
import { ScrollView } from 'react-native-gesture-handler';
// import AssignModal from '../../components/main/adressModal/drawer/Drawer';

const { height } = Dimensions.get("window");
const Cart = () => {
  const [cartItems, setCartItems] = useState<any>();

  const context = useContext(ProductCartContext);

  useEffect(() => {
    if (context) {
      console.log('Current products:', context.products);
      setCartItems(context.products)
    }
  }, [context]);

  if (!context) {
    return <Text>Loading...</Text>;
  }


  const [totalPrice, setTotalPrice] = useState(0);
  const [address, setAddress] = useState('Newtown, Kolkata WestBengal, India');

  // useEffect(() => {
  //   calculateTotalPrice();
  // }, [cartItems]);

  // const handleIncrement = (id:any) => {
  //   setCartItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //     )
  //   );
  // };

  // const handleDecrement = (id:any) => {
  //   setCartItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
  //     )
  //   );
  // };

  // const calculateTotalPrice = () => {
  //   const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity * 0.9, 0);
  //   setTotalPrice(total);
  // };

  const handleChangeAddress = () => {
    Alert.alert('Change Address', 'This functionality is not implemented yet.');
  };

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
    <>
      <ProductHeader text={"Cart"} />

      <View style={styles.container}>
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Delivery Address</Text>
          <Text style={styles.addressText}>{address}</Text>
          <TouchableOpacity onPress={handleLogoutPress}>
            <Text style={styles.changeAddressButton}>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.cartList}>

          {cartItems?.map((item: any) => (
           <RenderProductCartItem item={item}/>
          ))}
        </ScrollView>
      </View>
      <SliderButton price={5555} />
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
    </>

  );
};

export default Cart;
