import React from "react";
import { View, Image, Text } from "react-native";
import Colors from "../../../../constants/Colors";

const Productverview = ({product,order_quantity,stock}:any) => {
  console.log(product)
  return (
    <View style={{flexDirection:"row",gap:10}}>
      <View style={{ backgroundColor: Colors.light.grayBg,
            height: 130,
            width: 130,
            borderRadius: 20,
            padding:2,justifyContent:"center",alignItems:"center"}}>
        <Image
          source={{ uri: product?.product_image }}
          style={{
            height: 110,
            width: 110,
            borderRadius: 20,
            padding:2
          }}
        />
      </View>
      <View style={{width:"60%"}}>
        <Text style={{fontSize:18,fontWeight:"700",marginBottom:2}}>{product?.product_name}</Text>
        <Text style={{fontSize:15,fontWeight:"700",color:Colors.light.lightText}}>Electronics</Text>
        <View style={{backgroundColor:"#f2f2f2",padding:8,borderRadius:10,marginTop:8}}>
        <Text style={{fontSize:14,fontWeight:"500",color:Colors.light.text}}>Available Stock : {stock}</Text>
        <Text style={{fontSize:14,fontWeight:"500",color:Colors.light.text}}>Unit Ordered: {order_quantity}</Text>
        <Text style={{fontSize:14,fontWeight:"500",color:Colors.light.text}}>Order Date 2 Sept 2024</Text>
        </View>
        
        {/* <Text style={{fontSize:17,fontWeight:"700",color:Colors.light.blue,marginTop:5}}>
            $ 2000 ($4.00 Tax)
        </Text> */}
      </View>
    </View>
  );
};

export default Productverview;
