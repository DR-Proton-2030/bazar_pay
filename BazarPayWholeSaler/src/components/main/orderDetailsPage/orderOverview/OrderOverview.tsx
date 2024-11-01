import React from 'react'
import { View,Text } from 'react-native'
import Colors from '../../../../constants/Colors'

const OrderOverview = ({order}:any) => {
  return (
<View style={{marginTop:20 ,paddingHorizontal:5}}>
    <Text style={{fontSize:20,fontWeight:"700",color:Colors.light.text,marginBottom:7}}>
        Order Info
    </Text>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text  style={{fontSize:15,fontWeight:"700",color:Colors.light.lightText}}>
            Subtotal
        </Text>
        <Text style={{fontSize:15,fontWeight:"700",color:Colors.light.lightText}}>
        ৳{order?.order_quantity*order?.wholesalerListedProduct?.selling_price}
        </Text>
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text  style={{fontSize:15,fontWeight:"700",color:Colors.light.lightText}}>
            Shipping Cost
        </Text>
        <Text style={{fontSize:15,fontWeight:"700",color:Colors.light.lightText}}>
        ৳20
        </Text>
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
        <Text  style={{fontSize:15,fontWeight:"700",color:Colors.light.lightText}}>
            Total Cost
        </Text>
        <Text style={{fontSize:20,fontWeight:"700",color:Colors.light.text}}>
        ৳{order?.order_quantity*order?.wholesalerListedProduct?.selling_price+20}
        </Text>
    </View>
</View>
  )
}

export default OrderOverview