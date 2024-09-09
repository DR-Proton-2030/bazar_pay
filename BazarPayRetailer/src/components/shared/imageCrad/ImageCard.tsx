import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const ImageCard = ({ img, text }: any) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: img,
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 140,
    borderRadius: 6,
    overflow: "hidden",
    // margin: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    elevation:5
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  text: {
    color: "white",
    fontSize: 12,
  },
});

export default ImageCard;
