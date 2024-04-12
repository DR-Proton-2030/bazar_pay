// import { useNavigation } from "expo-router";
import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const ProductBlock = () => {
  // const navigation: any = useNavigation();
  const handleNavigate = () => {
    // navigation.navigate("productDetails");
  };
  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.container}>
      <Image
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/f142/da7e/66bcb28eadbb2bb2f24d6910553b47ec?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gekCOnKynONx5H5vNBd~zW-nOSvOe8c08ZjJAPKspjUzert9zeI~Mb3nn0vQbCz2eH4byPaXnlAn4C~HUsZ0J1lrcumahIHxpWOdg478-wm~KlTdqWhsFC-OQe24-DOm-KjtcQAvF4qj6GMtUdVUGcPC29rlDktdwB0DWrABqm~dfhjkiE0Z9jBcAoMF8skbsAazvN-jEdHIvsC76X0JsBNWcp96XEpl3lty7~E~tkSciLr9EUu9seM8-pNrII7DrExZi67y6htsARuC3VS6I5YddHVfYi3E4VJys3hk0Fw7QywMNCQeFqYbmeh69~RE~6GNTXlS0P~oZoUTVQvoQw__",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Chashi Chinigura Chal</Text>
      <Text style={styles.amount}>1kg packet</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    width: 350,
    height: 280,
    borderRadius: 10,
    marginTop: -40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 18,
  },
  description: {
    fontSize: 11,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 20,
    marginTop: 5,
  },
});

export default ProductBlock;
