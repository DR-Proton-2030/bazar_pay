// import { useNavigation } from "expo-router";
import { useNavigation } from "expo-router";
import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const ProductCard = () => {
  const navigation: any = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("productDetailsPage");
  };
  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.container}>
      <Image
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/f142/da7e/66bcb28eadbb2bb2f24d6910553b47ec?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gekCOnKynONx5H5vNBd~zW-nOSvOe8c08ZjJAPKspjUzert9zeI~Mb3nn0vQbCz2eH4byPaXnlAn4C~HUsZ0J1lrcumahIHxpWOdg478-wm~KlTdqWhsFC-OQe24-DOm-KjtcQAvF4qj6GMtUdVUGcPC29rlDktdwB0DWrABqm~dfhjkiE0Z9jBcAoMF8skbsAazvN-jEdHIvsC76X0JsBNWcp96XEpl3lty7~E~tkSciLr9EUu9seM8-pNrII7DrExZi67y6htsARuC3VS6I5YddHVfYi3E4VJys3hk0Fw7QywMNCQeFqYbmeh69~RE~6GNTXlS0P~oZoUTVQvoQw__",
        }}
        style={styles.image}
      />
      <Text style={styles.price}>৳10</Text>
      <Text style={styles.description}>Chashi Chinigura Chal</Text>
      <Text style={styles.amount}>1kg</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "flex-start",
    width: 130,
  },
  image: {
    width: 70,
    height: 140,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 9,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default ProductCard;
