import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import Colors from "../../../../constants/Colors";
import { useNavigation } from "expo-router";

const SocialLink = () => {
  const navigation: any = useNavigation();
  const handleNavigateToEmailLogin = () => {
    navigation.navigate("signInPage");
  };
  return (
    <>
      <Text
        style={{
          color: "gray",
          fontSize: 12,
          textAlign: "center",
          marginTop: 10,
          // paddingLeft: 10,
        }}
      >
        Or connect with social media
      </Text>
      <TouchableOpacity onPress={handleNavigateToEmailLogin}>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: Colors.light.primary,
            marginBottom: 25,
            marginTop: 17,
            alignItems: "center",
          }}
        >
          <Feather name="mail" size={18} color={Colors.light.primary} />
          &nbsp; ENTER YOUR EMAIL
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <TouchableOpacity
          style={{
            width: "40%",
            height: 50,
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={{
              uri: "https://img.icons8.com/?size=512&id=V5cGWnc9R4xj&format=png",
            }}
            style={{
              width: "18%",
              height: 23,
              marginRight: 10,
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 19,
              fontWeight: "600",
            }}
          >
            Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#4A66AC",
            width: "40%",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <EvilIcons name="sc-facebook" size={25} color="white" />
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "600",

              color: Colors.light.background,
            }}
          >
            Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SocialLink;
