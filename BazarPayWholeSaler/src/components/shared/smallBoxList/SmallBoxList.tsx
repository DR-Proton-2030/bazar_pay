import { View, Text } from "react-native";
import React from "react";
import { IBoxlistProps } from "../../../@types/props/BoxList.props";
import { boxListStyle } from "./smallBox.style";
import SmallBox from "../smallBox/SmallBox";

const SmallBoxList = ({smallBoxList,heading}:IBoxlistProps) => {
  return (
    <View>
    <Text style={{fontSize:18, fontWeight:"600"}}>{heading}</Text>
      <View style={boxListStyle.workList}>
        {smallBoxList.map((item,index)=>
        <SmallBox key={index} {...item} />)}
      </View>
    </View>
  );
};

export default SmallBoxList;
