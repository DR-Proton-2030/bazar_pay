import React from "react";
import StockScreen from "../src/screens/stockScreen/stockScreen";
import CommonHeader from "../src/components/shared/commonHeader/CommonHeader";
import { ScrollView } from "react-native";
import Colors from "../src/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const stockPage = () => {
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: Colors.light.background }}
      >
        <CommonHeader text="স্টক খাতা" />
        <StockScreen />
      </SafeAreaView>
    </>
  );
};

export default stockPage;
