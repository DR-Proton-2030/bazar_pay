import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import Colors from "../../constants/Colors";
import { Feather } from "@expo/vector-icons";
import SmallBox from "../../components/shared/smallBox/SmallBox";
import SmallBoxList from "../../components/shared/smallBoxList/SmallBoxList";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProductItem from "../../components/shared/productDetail/ProductItem";
import ProductCard from "../../components/shared/productCard/ProductCard";
import { stockScreenStyles } from "./StockScreen.styles";
import CommonHeader from "../../components/shared/commonHeader/CommonHeader";
import { useNavigation } from "expo-router";
// import { stockScreenstockScreenStyles } from "./StockScreen.stockScreenStyles";
// const data = [
//   { id: "1", title: "লো স্টক" },
//   { id: "2", title: "ড্যামেজ স্টক" },
//   { id: "3", title: "স্টক ট্রান্সফার" },
//   { id: "4", title: "পণ্য কিনুন" },
// ];

// const render4Item = ({ item }) => (
//   <View style={{ margin: 8 }}>
//     <SmallBox title={item.title} icon={undefined} textColor={""} />
//   </View>
// );
const products = [
  {
    id: "1",
    icon: <Feather name="share" size={24} color="green" />,
    title: "Product Headphone",
    subtitle: "Description of Product",
    price: "৩৩, ৭৯০",
  },
  {
    id: "2",
    icon: <Feather name="share" size={24} color="green" />,
    title: "Product Speaker",
    subtitle: "Description of Product",
    price: "৩৩, ৭৯০",
  },
];

const StockScreen = () => {
  const handleButton1Press = () => {
    console.log("Button 1 pressed");
  };
  const navigation: any = useNavigation<any>();
  const handleNavigate = () => {
    navigation.navigate("lowStock");
  };

  const handleButton2Press = () => {
    console.log("Button 2 pressed");
  };

  return (
    <ScrollView>
      {/* <CommonHeader text="নতুন পণ্য যোগ করুন" /> */}
      <View style={stockScreenStyles.stockContainer}>
        <View style={stockScreenStyles.cardRow}>
          <View style={stockScreenStyles.buttonWrapper}>
            <TouchableOpacity
              style={[
                stockScreenStyles.card1,
                stockScreenStyles.leftBorderRadius,
              ]}
              onPress={handleButton1Press}
            >
              <Text style={stockScreenStyles.buttonText1}>স্টক খাতা</Text>
            </TouchableOpacity>
          </View>
          <View style={stockScreenStyles.buttonWrapper}>
            <TouchableOpacity
              style={[
                stockScreenStyles.card2,
                stockScreenStyles.rightBorderRadius,
              ]}
              onPress={handleButton2Press}
            >
              <Text style={stockScreenStyles.buttonText2}>স্টক ইতিহাস</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Big Card */}
        <View style={stockScreenStyles.bigCard}>
          <View style={[stockScreenStyles.cell, stockScreenStyles.alignStart]}>
            <Text style={stockScreenStyles.title}>প্রোডাক্ট</Text>
            <Text
              style={[
                stockScreenStyles.subtitle,
                stockScreenStyles.middleAlign,
              ]}
            >
              ৩
            </Text>
          </View>
          <View style={[stockScreenStyles.cell, stockScreenStyles.alignCenter]}>
            <Text style={stockScreenStyles.title}>মোট স্টক</Text>
            <Text
              style={[
                stockScreenStyles.subtitle,
                stockScreenStyles.middleAlign,
              ]}
            >
              ৭৬১
            </Text>
          </View>
          <View style={[stockScreenStyles.cell, stockScreenStyles.alignEnd]}>
            <Text style={stockScreenStyles.title}>মোট স্টকমূল্য</Text>
            <Text
              style={[
                stockScreenStyles.subtitle,
                stockScreenStyles.middleAlign,
              ]}
            >
              ৭,৫৮,৭৯০
            </Text>
          </View>
        </View>
        {/* Share */}
        <View style={stockScreenStyles.shareCard}>
          <View style={stockScreenStyles.sharePart}>
            <Feather
              name="share"
              size={24}
              color="green"
              style={stockScreenStyles.icon}
            />
            <View style={stockScreenStyles.textContainer}>
              <Text style={stockScreenStyles.shareTitle}>এই মাসে স্টক ইন</Text>
              <Text style={stockScreenStyles.shareSubtitle}>৮,০০,০০০</Text>
            </View>
          </View>
          <View style={stockScreenStyles.sharePart}>
            <Feather
              name="share"
              size={24}
              color="red"
              style={stockScreenStyles.icon}
            />
            <View style={stockScreenStyles.textContainer}>
              <Text style={stockScreenStyles.shareTitle}>এই মাসে স্টক আউট</Text>
              <Text style={stockScreenStyles.shareSubtitle}>৩৩, ৯৩০</Text>
            </View>
          </View>
        </View>
        {/* 4SmallCard */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <View style={{ marginTop: 20 }}>
            <SmallBox title={"লো স্টক"} icon={undefined} textColor={""} handleNavigate={handleNavigate} />
          </View>
          <View style={{ marginTop: 20 }}>
            <SmallBox title={"ড্যামেজ স্টক"} icon={undefined} textColor={""}
             handleNavigate={()=>navigation.navigate("stockPage")} />
          </View>
          <View style={{ marginTop: 15 }}>
            <SmallBox
              title={"স্টক ট্রান্সফার"}
              icon={undefined}
              textColor={""}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <SmallBox title={"পণ্য কিনুন"} icon={undefined} textColor={""} />
          </View>
        </View>
        {/* This is the shortest way to display that 4 boxes */}
        {/* <FlatList
          data={data}
          renderItem={render4Item}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ marginTop: 20 }}
        /> */}
        {/* Two SamllBoxList card*/}
        <View
          style={{
            marginTop: -18,
          }}
        >
          <SmallBoxList
            smallBoxList={[
              {
                title: "DSR/দোকান কে পণ্য বুঝিয়ে দিন",
                backgroundColor: Colors.light.secondary,
                textColor: "white",
                icon: <Octicons name="checklist" size={24} color="white" />,
              },
              {
                title: "পেমেন্ট ও রিটার্ণ পণ্য নিন",
                icon: (
                  <MaterialIcons
                    name="currency-exchange"
                    size={24}
                    color="white"
                  />
                ),
                backgroundColor: Colors.light.secondary,
                textColor: "white",
              },
            ]}
            heading={""}
          />
        </View>
        <TouchableOpacity style={stockScreenStyles.checkCard}>
          <View style={stockScreenStyles.checkContainer}>
            <FontAwesome name="check" size={24} color={Colors.light.primary} />
            <Text style={stockScreenStyles.checkText}>রেডি সেল</Text>
          </View>
        </TouchableOpacity>
        {/*  */}
        <View style={stockScreenStyles.fullWidthContainer}>
          <Text style={stockScreenStyles.fullWidthText}>
            সাম্প্রতিক লেনদেনসমূহ
          </Text>
        </View>
        <View style={stockScreenStyles.dateCard}>
          <View style={stockScreenStyles.dateContainer}>
            <Text>১৬ ডিসেম্বর, ২০২৩</Text>
          </View>
        </View>
        <View style={stockScreenStyles.productsContainer}>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              icon={product.icon}
              title={product.title}
              subtitle={product.subtitle}
              price={product.price}
            />
          ))}
        </View>
        <TouchableOpacity style={stockScreenStyles.accountHitory}>
          <View>
            <Text style={stockScreenStyles.accountHistoryText}>
              সকল লেনদেন ইতিহাস দেখুন
            </Text>
          </View>
        </TouchableOpacity>
        {/*Recent Transaction */}
        <View style={[stockScreenStyles.shareCard, { marginTop: 18 }]}>
          <View style={stockScreenStyles.sharePart}>
            <Text>সাম্প্রতিক লেনদেনসমূহ</Text>
          </View>
          <View
            style={[
              stockScreenStyles.sharePart,
              stockScreenStyles.buttonContainer,
            ]}
          >
            <TouchableOpacity style={stockScreenStyles.button3}>
              <View style={stockScreenStyles.button3Content}>
                <Text style={stockScreenStyles.button3Text}>আরো দেখুন</Text>
                <MaterialCommunityIcons
                  name="greater-than"
                  size={15}
                  color="white"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Product section  */}
        <View style={{ marginTop: 10 }}>
          {/* <ProductCard title={""} buyingPrice={0} sellingPrice={0} stock={0} /> */}
        </View>
        {/* See all Product */}
        <TouchableOpacity
          style={[stockScreenStyles.accountHitory, { marginBottom: 10 }]}
        >
          <Text style={stockScreenStyles.accountHistoryText}>
            সকল পণ্য দেখুন
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default StockScreen;
