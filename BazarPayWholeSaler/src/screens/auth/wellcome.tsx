import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import BodyContent from "../../components/main/bodyContent/BodyContent";
import { SkipBtn } from "../../components/shared/skipBtn/skipBtn";

export default function WellcomeScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingBottom:40}}>
      {/* <SkipBtn /> */}
      <BodyContent />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
  },
});
