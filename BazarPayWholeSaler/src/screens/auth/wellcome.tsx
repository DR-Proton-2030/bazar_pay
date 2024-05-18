import React from "react";
import { StyleSheet, View } from "react-native";
import BodyContent from "../../components/main/bodyContent/BodyContent";
import { SkipBtn } from "../../components/shared/skipBtn/skipBtn";

export default function WellcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <SkipBtn />
      <BodyContent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
