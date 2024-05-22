import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import Colors from "../../constants/Colors";
import { Feather } from "@expo/vector-icons";
import SmallBox from "../../components/shared/smallBox/SmallBox";
import SmallBoxList from "../../components/shared/smallBoxList/SmallBoxList";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

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
});

export default StockScreen;
