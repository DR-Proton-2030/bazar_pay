import React, { useState } from "react";
import { Image, Text, TouchableOpacity, ScrollView, View } from "react-native";
import Button from "../../shared/button/Button";
import text from "../../../database/login/wellcomeScreen.json";
import wellcomeImg from "../../../../assets/images/welcome.png";
import wellcomeImg2 from "../../../../assets/images/welcome2.png";
import { useNavigation } from "expo-router";
import { bodyContentStyle } from "./BodyContent.style";
import { windowWidth } from "../../../constants/HeightWidth";
import { globalStyle } from "../../../globalStyles/globalStyles";

const BodyContent = () => {
  const [displayText, setDisplayText] = useState(false);
  const [displayImage, setDisplayImage] = useState(wellcomeImg);
  const navigation: any = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("signInPage", { isSignup: false });
  };
  
  const handlePress = () => {
    if (displayText) {
      navigation.navigate("signUp");
    }else{
      setDisplayText(!displayText);
      setDisplayImage(displayImage === wellcomeImg ? wellcomeImg2 : wellcomeImg);

    }
  };

  return (
    <ScrollView style={bodyContentStyle.container} contentContainerStyle={bodyContentStyle.contentContainer}>
      <Image
        style={[bodyContentStyle.image]}
        source={displayImage}
      />
      <View style={bodyContentStyle.textContainer}>
        <Text style={bodyContentStyle.headerText}>
          {displayText ? text.texts2.header : text.texts1.header}
        </Text>
        {!displayText && (
          <Text style={bodyContentStyle.subheaderText}>{text.texts1.subheader}</Text>
        )}
        <Text style={bodyContentStyle.descriptionText}>
          {displayText ? text.texts2.description : text.texts1.description}
        </Text>
      </View>
      <View style={bodyContentStyle.buttonContainer}>
        {displayText ? (
          <Button
            style={globalStyle.loginButton}
            textStyle={globalStyle.loginButtonText}
            key={0}
            handlePress={handleNavigate}
            content={text.texts2.btnText1}
          />
        ) : null}
        <Button
          style={globalStyle.nextButton}
          handlePress={handlePress}
          content={!displayText ? text.texts1.nextButtonText : text.texts2.btnText2 }
          textStyle={globalStyle.nextButtonText}
        />
      </View>
    </ScrollView>
  );
};


export default BodyContent;
