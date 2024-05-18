import { Dimensions, StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../constants/HeightWidth";

export const bodyContentStyle = StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
      width: windowWidth / 1.1,
      height: windowHeight / 2,
      resizeMode: "contain",
    //   marginBottom: 20,
    },
    textContainer: {
      paddingHorizontal: 20,
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