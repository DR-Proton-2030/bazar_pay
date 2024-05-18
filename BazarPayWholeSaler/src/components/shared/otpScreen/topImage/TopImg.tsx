import React from "react";
import { Image, View } from "react-native";
import topImg from "../../../../../assets/images/OtpImg.png";

const TopImg = () => {
  return (
    <View>
      <Image source={topImg}></Image>
    </View>
  );
};

export default TopImg;
