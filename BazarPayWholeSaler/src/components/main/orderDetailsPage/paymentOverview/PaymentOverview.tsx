import React from 'react'
import { View ,Text, TouchableOpacity} from 'react-native'
import Colors from '../../../../constants/Colors'
import Entypo from '@expo/vector-icons/Entypo';

const PaymentOverview = () => {
  return (
    <View style={{marginTop:20 ,paddingHorizontal:5,}}>
    <Text style={{fontSize:20,fontWeight:"700",color:Colors.light.text,marginBottom:7}}>
        Payment Method
    </Text>
    <TouchableOpacity style={{flexDirection:"row",gap:15,alignItems:"center",marginTop:8}}>
      <View style={{ backgroundColor: Colors.light.grayBg,
            height: 50,
            width: 50,
            borderRadius: 10,
            padding:2,justifyContent:"center",alignItems:"center"}}>
       <Entypo name="credit-card" size={24} color="blue" />
      </View>
      <View style={{width:"60%"}}>
        <Text style={{fontSize:16,fontWeight:"700"}}>Online payment ,Bkash</Text>
        <Text style={{fontSize:13,fontWeight:"700",color:Colors.light.lightText}}>Account : XXXX123 </Text>
      </View>
    </TouchableOpacity>
        </View>
  )
}

export default PaymentOverview