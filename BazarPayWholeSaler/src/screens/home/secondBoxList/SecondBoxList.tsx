import { View, Text } from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons, Ionicons, Feather,FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import SmallBoxList from "../../../components/shared/smallBoxList/SmallBoxList";

const SecondBoxList = () => {
  return (
    <View style={{padding: 15,}}>
      <SmallBoxList heading="আপনার খাতাপত্র" smallBoxList={[
        {
          title: "পণ্য যোগ করুন",
          icon: <AntDesign name="shoppingcart" size={24} color="white" />,
          backgroundColor: Colors.light.secondary,
          textColor: "white",
        },
        {
          title: "নতুন অর্ডার",
          icon: <Feather name="box" size={24} color="black" />,
          backgroundColor: Colors.light.cardColor,
          textColor: "black",
        },
        {
          title: "পণ্যর লিস্ট",
          icon: <FontAwesome5 name="box-open" size={24} color="black" />,
          textColor: "black",
        },
        {
          title: "রেডি সেল",
          icon: <Ionicons name="checkmark-circle-outline" size={24} color="black" />,
          textColor: "black",
        },
      ]} />
    </View>
  );
};

export default SecondBoxList;
