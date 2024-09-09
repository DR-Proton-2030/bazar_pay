import React, { useRef, useState } from 'react';
import { View, StyleSheet, Animated, Text, TouchableOpacity } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { Feather, FontAwesome } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const SliderButton = ({ price,handleLogoutPress ,handlePlaceOrder}: any) => {
  const navigation: any = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("payments");
  };
  const translateX = useRef(new Animated.Value(0)).current;
  const sliderWidth = 320; // Width of the slider container
  const knobWidth = 50; // Width of the sliding knob
  const endPosition = sliderWidth - knobWidth;
  const [isPastHalfway, setIsPastHalfway] = useState(false);

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    {
      useNativeDriver: true,
      listener: (event:any) => {
        if (event.nativeEvent.translationX >= endPosition / 2) {
          setIsPastHalfway(true);
        } else {
          setIsPastHalfway(false);
        }
      },
    }
  );
  
  
  const onHandlerStateChange = (event:any) => {
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationX >= endPosition - 10) {
        handlePlaceOrder()
      }
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  };
  const textOpacity = translateX.interpolate({
    inputRange: [0, endPosition / 2],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const iconOpacity = translateX.interpolate({
    inputRange: [0, endPosition / 2, endPosition],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  

  return (
    <View style={styles.container}>

        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="payment" size={24} color="black" />
          <View style={{ marginBottom: 10,flexDirection:"row",justifyContent:"space-between" ,width:"85%"}}>
            
            <Text style={{ fontSize: 16, fontWeight: '500', alignItems: "center", marginBottom: 3 }}>Paymnet</Text>
            <TouchableOpacity onPress={handleLogoutPress} 
            style={{justifyContent:"flex-end",alignItems:"flex-end"}}>
              <Text style={{fontWeight:"700",color:Colors.light.orange}}>
                Change Address
              </Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.slider}>
      <Animated.Text style={[styles.payNowText, { opacity: textOpacity }]}>
  Confirm Order | ৳ {price}
</Animated.Text>

        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
         <Animated.View
  style={[
    styles.knob,
    {
      transform: [
        {
          translateX: translateX.interpolate({
            inputRange: [0, endPosition],
            outputRange: [0, endPosition],
            extrapolate: 'clamp',
          }),
        },
      ],
    },
  ]}
>
  {
    isPastHalfway?
    <Feather
    name={"check"}
    size={26}
    color="white"
    style={styles.arrowIcon}
  />
  :
  <MaterialIcons name="keyboard-double-arrow-right" size={26} color="white" />

  }

</Animated.View>


        </PanGestureHandler>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft:10
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  payNowText: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
    textAlign: "center",
    fontWeight: '700'
  },
  slider: {
    width: 330,
    height: 60,
    backgroundColor: '#4caf50',
    borderRadius: 55,
    justifyContent: 'center',
    position: 'relative',
    overflow: 'visible',
    borderColor: "white",
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    elevation: 5,
    marginLeft: "auto",
    marginRight: "auto"
  },
  knob: {
    width: 50,
    height: 50,
    marginLeft: 5,
    backgroundColor: Colors.light.orange,
    borderRadius: 55,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    borderColor: "white",
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    elevation: 5, // Android shadow
  }
  ,
  arrowIcon: {
    position: 'absolute',
    top: 12,
  },
});

export default SliderButton;
