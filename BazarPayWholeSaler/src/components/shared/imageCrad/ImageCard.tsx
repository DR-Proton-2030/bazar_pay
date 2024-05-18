import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const ImageCard = ({ backgroundImage, text }: any) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: "https://imgs.search.brave.com/mRap17Hf_cZEbimZ_bQytBmGOXmygxffHD_7NJ-_LBo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8xMC8xNi8xNS9i/YWctODM5NjAyXzY0/MC5qcGc",
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
