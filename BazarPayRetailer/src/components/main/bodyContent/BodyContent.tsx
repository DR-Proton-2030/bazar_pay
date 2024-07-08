import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../../shared/button/Button";
import text from "../../../database/login/wellcomeScreen.json";
import wellcomeImg from "../../../../assets/images/wellcome.png";
import wellcomeImg2 from "../../../../assets/images/wellcome2.png";
import logo from "../../../../assets/images/logo.png";
import { useNavigation } from "expo-router";

const BodyContent = () => {
  const [displayText, setDisplayText] = useState(false);
  const [displayImage, setDisplayImage] = useState(wellcomeImg);
  const navigation: any = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("otpPage");
  };
  // const handleToggle = () => {
  //   setDisplayText(!displayText);
  //   if (displayText) {
  //     navigation.navigate("signUp");
  //   }
  //   console.log("first");
  //   setDisplayImage(displayImage === wellcomeImg ? wellcomeImg2 : wellcomeImg);
  // };
  const handleToggle = () => {
    if (displayText) {
      navigation.navigate("signUp");
    }else{
      setDisplayText(!displayText);
      setDisplayImage(displayImage === wellcomeImg ? wellcomeImg2 : wellcomeImg);

    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, { marginTop: displayText ? 100 : 120 }]}
        source={displayImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>
          {displayText ? text.texts2.header : text.texts1.header}
        </Text>
        {!displayText && (
          <Text style={styles.subheaderText}>{text.texts1.subheader}</Text>
        )}
        <Text style={styles.descriptionText}>
          {displayText ? text.texts2.description : text.texts1.description}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        {displayText ? (
          <Button
            handleToggle={handleNavigate}
            content={text.texts2.btnText1}
          />
        ) : null}
        <Button
          handleToggle={handleToggle}
          content={text.texts1.nextButtonText}
          isLoginStyle={displayText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "32%",
    marginBottom: 40,
  },
  textContainer: {
    paddingHorizontal: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 28,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },
  subheaderText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  descriptionText: {
    fontSize: 14,
    paddingHorizontal: 9,
    textAlign: "center",
  },
  logo: {
    width: "40%",
    height: 50,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default BodyContent;
