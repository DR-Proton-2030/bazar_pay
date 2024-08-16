import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import LottieView from 'lottie-react-native';
import success from "../../database/animation/success/Animation - 1721420607611.json"

const PaymentSuccess = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../database/animation/success/Animation - 1721420607611.json')}
        autoPlay
        loop={false}
        style={styles.animation}
      />
      <Text style={{fontSize:25,fontWeight:"500"}}>
        Payment Successful
      </Text>
      <Text style={{fontSize:15,fontWeight:"400",color:"gray",marginTop:8}}>
        Your Order has been placed
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  animation: {
    width: 300,
    height: 300,
    marginTop:-100
  },
});

export default PaymentSuccess;
