import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import BodyContent from "../../components/main/bodyContent/BodyContent";
import { SkipBtn } from "../../components/shared/skipBtn/skipBtn";
import * as Location from 'expo-location';

export default function WellcomeScreen({ navigation }: any) {

  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);

  
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingBottom:40}}>
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
