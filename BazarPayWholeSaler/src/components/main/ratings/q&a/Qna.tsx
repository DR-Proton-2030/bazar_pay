import React from "react";
import { View, Text } from "react-native";
import QuestionCard from "./questionCard/QuestionCard";
import Colors from "../../../../constants/Colors";

const Qna = () => {
  return (
    <View style={{ marginTop: 15, marginBottom: 15 }}>
      <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 15 }}>
        Question & Answers
      </Text>
      <QuestionCard
        color={Colors.light.primary}
        text={"Original?"}
        name={"Rahul"}
        time={"17 nov,2023"}
      />
      <QuestionCard
        color={Colors.light.text}
        text={"Yes sir"}
        name={"Rani Electric"}
        time={"17 nov,2023"}
      />
    </View>
  );
};

export default Qna;
