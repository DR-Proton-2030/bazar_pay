import React from "react";
import { View, Image, Text } from "react-native";
import Colors from "../../../../constants/Colors";

const Productverview = () => {
  return (
    <View style={{flexDirection:"row",gap:10}}>
      <View style={{ backgroundColor: Colors.light.grayBg,
            height: 130,
            width: 130,
            borderRadius: 20,
            padding:2,justifyContent:"center",alignItems:"center"}}>
        <Image
          source={{ uri: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1682591585/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/268637_0_vh0nkj.png?tr=w-480" }}
          style={{
            height: 110,
            width: 110,
            borderRadius: 20,
            padding:2
          }}
        />
      </View>
      <View style={{width:"60%"}}>
        <Text style={{fontSize:18,fontWeight:"700",marginBottom:2}}>SAMSUNG GALAXY S23</Text>
        <Text style={{fontSize:15,fontWeight:"700",color:Colors.light.lightText}}>Mobile Phone</Text>
        <View style={{backgroundColor:"#f2f2f2",padding:8,borderRadius:10,marginTop:8}}>
        <Text style={{fontSize:14,fontWeight:"500",color:Colors.light.text}}>Available Stock : 200</Text>
        <Text style={{fontSize:14,fontWeight:"500",color:Colors.light.text}}>Unit Ordered: 20</Text>
        <Text style={{fontSize:14,fontWeight:"500",color:Colors.light.text}}>Order Date 20 Aug 2024</Text>
        </View>
        
        {/* <Text style={{fontSize:17,fontWeight:"700",color:Colors.light.blue,marginTop:5}}>
            $ 2000 ($4.00 Tax)
        </Text> */}
      </View>
    </View>
  );
};

export default Productverview;
