import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import BodyContent from "../../components/main/bodyContent/BodyContent";
import { SkipBtn } from "../../components/shared/skipBtn/skipBtn";
import * as Location from 'expo-location';

export default function WellcomeScreen({ navigation }: any) {

  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location)
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  
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
