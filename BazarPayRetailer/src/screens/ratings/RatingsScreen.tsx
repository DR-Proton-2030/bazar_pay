import React from "react";
import { TouchableOpacity, View, Text, ScrollView, Image } from "react-native";
import { globalStyle } from "../../globalStyles/globalStyles";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import RaatingsRenderScreen from "../../components/main/ratings/ratingsRenderScreen/RaatingsRenderScreen";
import DualBtn from "../../components/shared/dualButton/DualBtn";
import Qna from "../../components/main/ratings/q&a/Qna";
import ratingsImg from "../../../assets/images/rating.png";
import RatingChart from "../../components/main/ratings/ratingChart/RatingChart";
import RatingBar from "../../components/main/ratings/RatingBar/RatingBar";

const RatingsScreen = () => {
  const navigation: any = useNavigation();

  const handleNavigate = () => {
    navigation.goBack();
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Colors.light.background,
      }}
    >
      <View style={globalStyle.productHeader2}>
        <TouchableOpacity
          onPress={handleNavigate}
          style={{
            flexDirection: "column",
            paddingLeft: 20,
          }}
        >
          <Ionicons name="arrow-back" size={24} color={Colors.light.orange} />
        </TouchableOpacity>
        <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "500" }}>
          Ratings & Reviews
        </Text>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        {/* <Image style={{ height: 110, width: "1005" }} source={ratingsImg} /> */}
        {/* <RatingChart rating={4} />
        <RatingChart rating={1} /> */}
        <RatingBar />
        <RaatingsRenderScreen />
        <DualBtn text1={"Want to Review"} text2={"View All(186)"} />
        <Qna />
        <DualBtn text1={"Ask Question?"} text2={"See All(66)"} />
      </View>
    </ScrollView>
  );
};

export default RatingsScreen;
