import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
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
  // Add more products as needed
];

const StockScreen = () => {
  const handleButton1Press = () => {
    // Add functionality for button 1 here
    console.log("Button 1 pressed");
  };

  const handleButton2Press = () => {
    // Add functionality for button 2 here
    console.log("Button 2 pressed");
  };

  return (
    <ScrollView>
      <View style={styles.stockContainer}>
        <View style={styles.cardRow}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={[styles.card1, styles.leftBorderRadius]}
              onPress={handleButton1Press}
            >
              <Text style={styles.buttonText1}>স্টক খাতা</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={[styles.card2, styles.rightBorderRadius]}
              onPress={handleButton2Press}
            >
              <Text style={styles.buttonText2}>স্টক ইতিহাস</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Big Card */}
        <View style={styles.bigCard}>
          <View style={[styles.cell, styles.alignStart]}>
            <Text style={styles.title}>প্রোডাক্ট</Text>
            <Text style={[styles.subtitle, styles.middleAlign]}>৩</Text>
          </View>
          <View style={[styles.cell, styles.alignCenter]}>
            <Text style={styles.title}>মোট স্টক</Text>
            <Text style={[styles.subtitle, styles.middleAlign]}>৭৬১</Text>
          </View>
          <View style={[styles.cell, styles.alignEnd]}>
            <Text style={styles.title}>মোট স্টকমূল্য</Text>
            <Text style={[styles.subtitle, styles.middleAlign]}>৭,৫৮,৭৯০</Text>
          </View>
        </View>
        {/* Share */}
        <View style={styles.shareCard}>
          <View style={styles.sharePart}>
            <Feather name="share" size={24} color="green" style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.shareTitle}>এই মাসে স্টক ইন</Text>
              <Text style={styles.shareSubtitle}>৮,০০,০০০</Text>
            </View>
          </View>
          <View style={styles.sharePart}>
            <Feather name="share" size={24} color="red" style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.shareTitle}>এই মাসে স্টক আউট</Text>
              <Text style={styles.shareSubtitle}>৩৩, ৯৩০</Text>
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
            <SmallBox title={"লো স্টক"} icon={undefined} textColor={""} />
          </View>
          <View style={{ marginTop: 20 }}>
            <SmallBox title={"ড্যামেজ স্টক"} icon={undefined} textColor={""} />
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
        <View style={styles.checkCard}>
          <View style={styles.checkContainer}>
            <FontAwesome name="check" size={24} color={Colors.light.primary} />
            <Text style={styles.checkText}>রেডি সেল</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.fullWidthContainer}>
          <Text style={styles.fullWidthText}>সাম্প্রতিক লেনদেনসমূহ</Text>
        </View>
        <View style={styles.dateCard}>
          <View style={styles.dateContainer}>
            <Text>১৬ ডিসেম্বর, ২০২৩</Text>
          </View>
        </View>
        {/* <View style={styles.productDetails}>
          <View>
            <View>
              <Feather
                name="share"
                size={24}
                color="green"
                style={styles.icon}
              />
              <Text>Product</Text>
            </View>

            <View></View>
          </View>
        </View> */}
        <View style={styles.productsContainer}>
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
        <TouchableOpacity style={styles.accountHitory}>
          <View>
            <Text style={styles.accountHistoryText}>
              সকল লেনদেন ইতিহাস দেখুন
            </Text>
          </View>
        </TouchableOpacity>
        {/*Recent Transaction */}
        <View style={[styles.shareCard, { marginTop: 18 }]}>
          <View style={styles.sharePart}>
            <Text>সাম্প্রতিক লেনদেনসমূহ</Text>
          </View>
          <View style={[styles.sharePart, styles.buttonContainer]}>
            <TouchableOpacity style={styles.button3}>
              <View style={styles.button3Content}>
                <Text style={styles.button3Text}>আরো দেখুন</Text>
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
          <ProductCard title={""} buyingPrice={0} sellingPrice={0} stock={0} />
        </View>
        {/* See all Product */}
        <TouchableOpacity style={[styles.accountHitory, { marginBottom: 10 }]}>
          <Text style={styles.accountHistoryText}>সকল পণ্য দেখুন</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  stockContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },
  cardRow: {
    flexDirection: "row",
  },
  card1: {
    width: 170,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  card2: {
    width: 170,
    borderWidth: 1.5,
    height: 50,
    backgroundColor: Colors.light.cardColor,
    borderRadius: 8,
    justifyContent: "center",
    borderColor: Colors.light.border,
    alignItems: "center",
  },
  buttonText1: {
    color: "white",
    fontWeight: "bold",
  },
  buttonText2: {
    color: Colors.light.border,
    fontWeight: "bold",
  },
  buttonWrapper: {
    overflow: "hidden",
    borderRadius: 0,
  },
  leftBorderRadius: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  rightBorderRadius: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  bigCard: {
    backgroundColor: Colors.light.cardColor,
    borderColor: Colors.light.border,
    width: "85%",
    borderWidth: 1.5,
    marginVertical: 20,
    borderRadius: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  cell: {
    width: "30%",
    marginVertical: 5,
    padding: 5,
  },
  title: {
    fontWeight: "light",
    fontSize: 13,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  alignCenter: {
    alignItems: "center",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  middleAlign: {
    textAlign: "center",
  },
  shareCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
  },
  sharePart: {
    flexDirection: "row",
    alignItems: "center",
    width: "45%",
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    justifyContent: "center",
  },
  shareTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  shareSubtitle: {
    fontSize: 11,
    marginTop: 5,
    textAlign: "center",
  },
  checkCard: {
    width: "85%",
    marginTop: 15,
    backgroundColor: Colors.light.lightViolet,
    borderColor: Colors.light.border,
    borderRadius: 4,
    paddingVertical: 10,
    alignItems: "center",
  },
  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  checkText: {
    marginLeft: 8,
    fontSize: 16,
    color: Colors.light.primary,
  },

  fullWidthContainer: {
    width: "85%",
    alignItems: "flex-start",
    marginTop: 25,
  },
  fullWidthText: {
    fontSize: 14,
    fontWeight: "bold",
  },

  buttonContainer: {
    justifyContent: "flex-end",
  },
  button3: {
    backgroundColor: Colors.light.primary,
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  button3Content: {
    flexDirection: "row",
    alignItems: "center",
  },
  button3Text: {
    color: "white",
    fontSize: 12,
    marginRight: 4,
  },

  dateCard: {
    width: "85%",
    marginTop: 12,
    backgroundColor: Colors.light.lightViolet,
    borderColor: Colors.light.border,
    borderRadius: 4,
    paddingVertical: 4,
    // alignItems: "center",
    paddingHorizontal: 10,
    alignItems: "flex-start",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  productDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productsContainer: {
    width: "90%",
    marginTop: 3,
  },
  accountHitory: {
    width: "85%",
    marginTop: 15,
    backgroundColor: Colors.light.primary,
    color: Colors.dark.text,
    borderRadius: 4,
    paddingVertical: 10,
    alignItems: "center",
  },
  accountHistoryText: {
    color: "white",
  },
  productSectionContainer: {
    flexDirection: "column", // Display children vertically
    alignItems: "center", // Center children horizontally
    justifyContent: "flex-start", // Align children to the start vertically
  },
});

export default StockScreen;
