import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ImageBanner = ({ backgroundColor, imageUri }: any) => {
  return (
    <View style={[styles.container, { backgroundColor: "#FEDE27" }]}>
      <Image
        source={{ uri: imageUri }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 10,
  },
  image: {
    width: "70%",
    height: 100,
    borderRadius: 10,
  },
});

export default ImageBanner;
