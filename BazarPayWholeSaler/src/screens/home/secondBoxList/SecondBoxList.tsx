import { View, Text } from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons, Ionicons, Feather,FontAwesome5, MaterialIcons, FontAwesome6 , Entypo, FontAwesome, Foundation} from "@expo/vector-icons";
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
          title: "পণ্য মজুদকরণ",
          icon: <MaterialIcons name="inventory" size={24} color="black" />,
          textColor: "black",
        },
        {
          title: "কেনা",
          icon: <Ionicons name="bag-handle-outline" size={24} color="black" />,
          textColor: "black",
        },
        {
          title: "বেচা",
          icon: <Ionicons name="pricetag-outline" size={24} color="black" />,
          textColor: "black",
        },
        {
          title: "কেনা/বেচার পরিমাণ",
          icon: <FontAwesome5 name="calculator" size={24} color="black" />,
          textColor: "black",
        },
        {
          title: "জমা/বাকীর হিসাব",
          icon: <FontAwesome5 name="money-bill-alt" size={24} color="black" />,
          textColor: "black",
        },
        {
          title: "রিপ্লেস/রিটার্ন",
          icon: <MaterialIcons name="assignment-returned" size={24} color="black" />,
          textColor: "black",
        },
        {
          title: "এক্সেস ম্যানেজমেন্ট",
          icon: <Entypo name="key" size={24} color="black" />,
          textColor: "black",
        },
        {
          title: "মেসেজেস",
          icon: <MaterialIcons name="message" size={24} color="black" />,
          textColor: "black",
        },
        {
          title: "ব্যবসার সার্বিক অবস্থা",
          icon: <FontAwesome name="line-chart" size={24} color="black" />,
          textColor: "black",
        },
        {
          title: "ক্যাম্পেইন",
          icon: <Ionicons name="rocket-outline" size={24} color="black" />,
          textColor: "black",
        },
        {
          title: "ডেলিভারি মাধ্যম",
          icon: <FontAwesome6 name="truck" size={24} color="black" />,
          textColor: "black",
        },
        {
          title: "যোগাযোগ",
          icon: <Foundation name="telephone" size={24} color="black" />,
          textColor: "black",
        },
      ]} />
    </View>
  );
};

export default SecondBoxList;
