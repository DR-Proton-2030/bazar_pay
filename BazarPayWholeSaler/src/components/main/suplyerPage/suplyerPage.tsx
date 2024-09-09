import React from "react";
import { View, Text } from "react-native";
import Colors from "../../../constants/Colors";
import Octicons from '@expo/vector-icons/Octicons';
import BalanceCard from "./balanceCrad/BalanceCard";
import SearchBar from "./searchBar/SearchBar";
import { BalanceHistory } from "./balanceHistory/BalanceHistory";
import FabBtn from "./addSuplliers/AddSuppliersBtn";

const SuplyerPage = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: "white",
      }}
    >
     <BalanceCard/>
     <SearchBar/>
     <BalanceHistory/>
     <FabBtn/>
    </View>
  );
};

export default SuplyerPage;
