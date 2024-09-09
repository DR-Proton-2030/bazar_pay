import { ScrollView, View } from "react-native";
import React from "react";
import SmallCard from "../../../components/shared/smallCard/SmallCard";
import { FontAwesome, FontAwesome6, Feather } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import { globalStyle } from "../../../globalStyles/globalStyles";
import LongCard from "../../../components/shared/longCard/LongCard";
import { useNavigation } from "expo-router";

const TopItems = () => {
  const navigation: any = useNavigation<any>();
  const handleNavigate = () => {
    navigation.navigate("stockPage");
  };
  return (
    <>
      <ScrollView
        style={{ paddingLeft: 10, marginTop: 20 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <SmallCard
          title={"Low Stock 10 Items"}
          subTitle="See Details"
          icon={
            <View
              style={[
                globalStyle.iconView,
                { backgroundColor: Colors.light.lightViolet },
              ]}
            >
              <FontAwesome
                name="bell"
                size={22}
                color={Colors.light.secondary}
              />
            </View>
          }
          handlePress={handleNavigate}
        />
        <SmallCard
          title={"Balance ৳1450"}
          subTitle="See Details"
          handlePress={()=>  navigation.navigate("dueSavings")}
          icon={
            <View
              style={[
                globalStyle.iconView,
                { backgroundColor: Colors.light.lightGreen },
              ]}
            >
              <FontAwesome6
                name="bangladeshi-taka-sign"
                size={22}
                color={Colors.light.green}
              />
            </View>
          }
        />
        <SmallCard
          title={"Debt From Customer"}
          subTitle="৳1450"
          icon={
            <View
              style={[
                globalStyle.iconView,
                { backgroundColor: Colors.light.lightBlue },
              ]}
            >
              <FontAwesome name="user-o" size={22} color={Colors.light.blue} />
            </View>
          }
        />
      </ScrollView>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <LongCard
          title={"Pending Chalan List"}
          subTitle="৳1450"
          icon={
            <View
              style={[
                globalStyle.iconView,
                { backgroundColor: Colors.light.lightOrange },
              ]}
            >
              <Feather name="truck" size={22} color={Colors.light.orange} />
            </View>
          }
        />
      </View>
    </>
  );
};

export default TopItems;
