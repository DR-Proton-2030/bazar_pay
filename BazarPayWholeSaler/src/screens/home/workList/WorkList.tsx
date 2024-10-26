import { View, Text } from "react-native";
import React from "react";
import SmallBox from "../../../components/shared/smallBox/SmallBox";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import SmallBoxList from "../../../components/shared/smallBoxList/SmallBoxList";

const WorkList = () => {
  return (
    <View style={{ padding: 15 }}>
      <SmallBoxList
        heading="আপনার কাজসমূহ"
        smallBoxList={[
          {
            title: "DSR/মার্কেটশপ কে পণ্য বুঝিয়ে দিন",
            icon: <AntDesign name="book" size={24} color="black" />,
            textColor: "black",
          },
          {
            title: "পেমেন্ট ও রিটার্ন পণ্য নিন",
            icon: (
              <MaterialCommunityIcons
                name="cash-refund"
                size={24}
                color="black"
              />
            ),
            textColor: "black",
          },
          {
            title: "পণ্য কিনুন",
            icon: <Ionicons name="bag-outline" size={24} color="black" />,
            textColor: "black",
          },
          {
            title: "রেডি সেল",
            icon: (
              <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color="black"
              />
            ),
            textColor: "black",
          },
        ]}
      />
    </View>
  );
};

export default WorkList;
