import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import { globalStyle } from "../../globalStyles/globalStyles";
import Colors from "../../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";

const ConfirmationPage = () => {
  const navigation = useNavigation<any>();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingTop: 50 }}>
      {/* Background gradient */}
      <LinearGradient
        colors={[Colors.light.lightBlue, "white"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "40%",
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40%",
        }}
      >
        <View
          style={{
            backgroundColor: Colors.light.lightBlue,
            height: 200,
            width: 200,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 50,
          }}
        >
          {/* <MaterialCommunityIcons
            name="check-decagram"
            size={114}
            color={Colors.light.blue}
          /> */}
          <Image
            source={{
              uri: "https://threedio-cdn.icons8.com/tdmJY4ALehREenFfIBn1tpXgu2HiSC8rPvCT6_kPpNU/rs:fit:1024:1024/czM6Ly90aHJlZWRp/by1wcm9kL3ByZXZp/ZXdzLzgyNS9iZDNj/ZjU2Zi1mYWI0LTQw/YTgtYTQ0OS1lZTY1/ZjllMDRiOGIucG5n.png",
            }}
            style={{ height: 300, width: 300 }}
          />
        </View>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 23,
            color: Colors.light.text,
            textAlign: "center",
            width: "60%",
            marginBottom: 10,
            paddingTop: 30,
          }}
        >
          Account in Progress
        </Text>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 14,
            color: Colors.light.lightText,
            textAlign: "center",
            width: "90%",
          }}
        >
          Your account is submitted successfully and in progress. When it is
          approved, we will notify you.
        </Text>
      </View>
      <View style={{ paddingHorizontal: 50, marginTop: 40, gap: 20 }}>
        <Button style={globalStyle.blueButton} onPress={goBack}>
          <Text style={globalStyle.signInButtonText}>Go Back</Text>
        </Button>
      </View>
    </View>
  );
};

export default ConfirmationPage;
