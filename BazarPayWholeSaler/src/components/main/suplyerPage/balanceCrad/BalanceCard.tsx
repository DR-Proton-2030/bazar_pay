import React from 'react'
import { View, Text } from "react-native";
import Octicons from '@expo/vector-icons/Octicons';
import Colors from '../../../../constants/Colors';


const BalanceCard = () => {
  return (
    <View
    style={{
      height: "auto",
      width: "95%",
      backgroundColor: "#efefef",
      borderRadius: 10,
      paddingHorizontal:10,
      paddingVertical:25,
      marginLeft:"auto",
      marginRight:"auto"
    }}
  >
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap:20,
      }}
    >
      <View style={{alignItems:"center",width:"40%"}}>
        <Text style={{fontSize:16,fontWeight:600,marginBottom:10,color:"gray"}}>My Total Savings</Text>
        <Text style={{fontSize:19,fontWeight:500,color:Colors.light.green}}>0 Taka</Text>
      </View>
      <View style={{height:"100%",backgroundColor:"gray",width:2}}/>
      <View style={{alignItems:"center",width:"40%"}}>
        <Text style={{fontSize:16,fontWeight:600,marginBottom:10,color:"gray"}}>My Total Due</Text>
        <Text style={{fontSize:18,fontWeight:500,color:"red"}}>2000 taka</Text>
      </View>
    </View>
    <Text style={{textAlign:"center",marginTop:10,color:"gray"}}>
        Extra Amount will be given :
        <Text style={{color:"green",fontWeight:600}}>
        12300
            </Text> 
    </Text>
    <View style={{paddingHorizontal:18,paddingVertical:2,alignItems:"center",flexDirection:"row",justifyContent:"center",
        borderWidth:2,borderColor:"#4d94ff",width:"auto",marginLeft:"auto",marginRight:"auto",
        borderRadius:5,marginTop:15,gap:3,backgroundColor:"#4d94ff"}}>
            <Octicons name="history" size={16} color="white" />
        <Text style={{fontWeight:600,fontSize:17,color:"white"}}>
            History
        </Text>
    </View>
  </View>
  )
}

export default BalanceCard