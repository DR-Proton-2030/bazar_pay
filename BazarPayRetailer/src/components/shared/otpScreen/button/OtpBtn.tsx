import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { globalStyle } from "../../../../globalStyles/globalStyles";
import Colors from "../../../../constants/Colors";

const OtpBtn = ({ onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={globalStyle.nextButton}>
      <Text
        style={{
          textAlign: "center",
          color: Colors.light.background,
          fontWeight: "700",
          fontSize: 17,
        }}
      >
        SEND OTP
      </Text>
    </TouchableOpacity>
  );
};

export default OtpBtn;
