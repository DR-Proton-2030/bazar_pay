import React from "react";
import { View } from "react-native";
import OptionItem from "../optionItem/OptionItem";
import { options } from "../../../../database/profile/profileOptions";

const EditOptions = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 40,
        marginTop: 20,
        justifyContent: "space-between",
      }}
    >
      {options.map((option, index) => (
        <OptionItem key={index} {...option} />
      ))}
    </View>
  );
};

export default EditOptions;
