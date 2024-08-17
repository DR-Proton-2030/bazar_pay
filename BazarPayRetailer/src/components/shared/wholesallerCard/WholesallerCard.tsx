import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';
import { useNavigation } from 'expo-router';
import { Feather, FontAwesome } from '@expo/vector-icons';

const WholesallerCard = ({ wholesaler, index, categoryName }: any) => {
  const inStock = wholesaler.current_stock > 0;
  const navigation: any = useNavigation();
  const handleNavigate = () => {
    console.log(wholesaler?.wholesaler._id)
    navigation.navigate("productDetailsPage", { wholesalerId: wholesaler?.wholesaler?._id, categoryName: categoryName });
  };

  return (
    <View key={index} style={styles.card}>
      <Image
        source={{
          uri: wholesaler.wholesaler?.logo
        }}
        style={{
          backgroundColor: "gray",
          borderRadius: 5,
          borderWidth: 0.5,
          borderColor: "gray",
        }}
        height={65}
        width={65}
      />
      <View style={{ flexDirection: "row" }}>
        <View>

          <Text style={{ fontSize: 16, fontWeight: "700" }}>{wholesaler?.wholesaler?.owner_name}</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 2,
              marginTop: 2,
              alignItems: "center",
            }}
          >
            <FontAwesome name="star" size={12} color={Colors.light.orange} />
            <FontAwesome name="star" size={12} color={Colors.light.orange} />
            <FontAwesome name="star" size={12} color={Colors.light.orange} />
            <FontAwesome name="star" size={12} color={Colors.light.orange} />
            <FontAwesome name="star-o" size={12} color={Colors.light.orange} />
            <Text style={{ fontSize: 10 }}>{"(186)"}</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 5, }}>
            <Image
              source={{
                uri: wholesaler.wholesaler?.wholesaler_owner_photo
              }}
              style={{
                backgroundColor: "gray",
                borderRadius: 999,
                borderWidth: 0.5,
                marginTop: 3,
                marginBottom: -10
              }}
              height={23}
              width={23}
            />
            <Text style={{ marginBottom: -14 }}>{wholesaler?.wholesaler?.wholesaler_name}</Text>
          </View>
        </View>
        <View style={{ marginLeft: 50 }}>
          <TouchableOpacity style={{
            flexDirection: "row", alignItems: "baseline", gap: 2,
          }} onPress={handleNavigate}>

            <Text
              style={{
                fontSize: 14,
                color: Colors.light.orange,
                fontWeight: "600",
                marginTop: 4
              }}
            >
              View Details
            </Text>
            <View style={{
              backgroundColor: Colors.light.orange,
              width: 23, height: 23, borderRadius: 999, alignItems: "center", justifyContent: "center"
            }}>
              <Feather name="arrow-up-right" size={15} color={Colors.light.background} />
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "baseline", gap: 5, marginTop:5 }}>
            <Text>
              Price:
            </Text>
            <Text style={{ fontSize: 22 }}>{wholesaler?.selling_price}৳</Text>
          </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    gap: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 0,
    width: "100%"
  },
  logoContainer: {
    marginRight: 15,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: Colors.light.orange,
    marginBottom: 5,
  },
  stock: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  chip: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  inStock: {
    backgroundColor: '#d4edda',
  },
  outOfStock: {
    backgroundColor: '#f8d7da',
  },
  chipText: {
    fontSize: 12,
    color: '#155724',
  },
});

export default WholesallerCard;
