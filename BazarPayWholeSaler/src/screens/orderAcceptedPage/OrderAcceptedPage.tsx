import React from 'react'
import { View, StyleSheet,Text } from 'react-native';
import LottieView from 'lottie-react-native';
import jj from "../../../assets/animation/success/Animation - 17246859241.json"
import Colors from '../../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Octicons from '@expo/vector-icons/Octicons';

const OrderAcceptedPage = () => {
  return (
   <View style={styles.container}>
      <LottieView
        source={require('../../../assets/animation/success/Animation - 17246859241.json')}
        autoPlay
        loop={false}
        style={styles.animation2}
      />
    <Text style={{fontWeight:700,fontSize:16,marginBottom:10,marginTop:-15}}>
        Order no. 202736
      </Text>
    <Text style={{fontWeight:700,fontSize:18,marginBottom:10,marginTop:-11,color:Colors.light.lightText}}>
        SAMSUNG GAAXY S23
      </Text>
  <LottieView
        source={require('../../../assets/animation/success/Animation - 1721420607611.json')}
        autoPlay
        loop={true}
        style={styles.animation}
      />
      <Text style={{fontWeight:700,fontSize:26,marginBottom:10,marginTop:-30}}>
        Order Accepted 
      </Text>
      <Text style={{fontWeight:700,fontSize:16,textAlign:"center",color:Colors.light.lightText}}>
        When Order will be shipped you will get notified 
      </Text>
      <TouchableOpacity>
      <View style={styles.btn}>
          <Text style={styles.btnText}>Go Back Order Section</Text>
        </View>
      </TouchableOpacity>
   </View>
  )
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
    },
    animation2: {
        width: 80,
        height: 80,
        marginTop:-80
      },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: "600",
        color: "#fff",
      },
      btn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: "#4d94ff",
        borderColor: "#4d94ff",
        marginTop:20
      },
  });
export default OrderAcceptedPage