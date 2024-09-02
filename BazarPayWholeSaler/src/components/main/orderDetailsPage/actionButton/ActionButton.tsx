import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Colors from "../../../../constants/Colors";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { api } from "../../../../utils/api";

const ActionButton = ({order}:any) => {
  const navigation: any = useNavigation();
  const handleNavigate = () => {
updateOrderStatus("CONFIRMED")
    navigation.navigate("orderSuccess");
  };

  const updateOrderStatus = async(status:any)=>{
    try {
      const payload ={
        order_id:order?._id,
        order_status:status
      }
      const updateStatus = await api.order.updateOrderStatus(payload)
      console.log(updateStatus)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.overlay}>
      <View style={{flexDirection:"row",gap:10}}>
{
order?.order_status === "CONFIRMED"?
<TouchableOpacity
onPress={()=>{
  updateOrderStatus("SHIPPED") 
  navigation.navigate("homePage");
}}
>
<View style={styles.btn3}>
  <MaterialCommunityIcons  name="truck-delivery-outline" size={24} color="white" />
  <Text style={styles.btnText}>&nbsp;Order Shipped</Text>
</View>
</TouchableOpacity>

:
order?.order_status === "SHIPPED"?

<TouchableOpacity >
<View style={styles.btn}>
  <Entypo name="check" size={24} color="white" />
  <Text style={styles.btnText}>Download Pdf</Text>
</View>
</TouchableOpacity>
:
<TouchableOpacity onPress={handleNavigate}>
<View style={styles.btn}>
  <Entypo name="check" size={24} color="white" />
  <Text style={styles.btnText}>Accept Order</Text>
</View>
</TouchableOpacity>
}
{
  order?.order_status === "PENDING"  ?
  <TouchableOpacity
       
  >
    <View style={styles.btn2}>
      <Entypo name="cross" size={24} color="white" />
      <Text style={styles.btnText}>Cancel Order</Text>
    </View>
  </TouchableOpacity>

  :  null
}
     
     
      </View>
   
      
    </View>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.light.cardColor,
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    gap: 10,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  /** Placeholder */
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 60,
    padding: 24,
    backgroundColor: "#F3F4F6",
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: "#CFD1D4",
    borderStyle: "dashed",
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#5FBC39",
    borderColor: "#5FBC39",
  },
  btn2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "red",
    borderColor: "red",
  },
  btn3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "blue",
    borderColor: "blue",
   
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
    
  },
});
