import React, { useContext } from "react";
import { Image, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Colors from "../../../../constants/Colors";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ProductCartContext } from "../../../../contexts/productCartContext/Provider";
const BuyerOptionsCards = ({ wholesaler ,categoryName}: any) => {

  const context = useContext(ProductCartContext);
  const navigation: any = useNavigation();
  const handleNavigate = () => {
    console.log(wholesaler?.wholesaler._id)
    navigation.navigate("productDetailsPage", { wholesalerId: wholesaler?.wholesaler?._id ,categoryName:categoryName});
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        height: "auto",
        width: "48%",
        borderRadius: 10,
        padding: 10,
      }}
    >
      <View style={{ flexDirection: "row", gap: 8 }}>
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
          height={50}
          width={50}
        />
        <View>
          <Text style={{ fontSize: 12, fontWeight: "700", marginBottom: 3 }}>
            {wholesaler?.wholesaler?.owner_name}
          </Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Text
              style={{
                backgroundColor: Colors.light.orange,
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 20,
                fontSize: 12,
                color: "white",
              }}
            >
              {wholesaler?.wholesaler?.wholesaler_name}
            </Text>

          </View>
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
        </View>
      </View>
      <View>

        <Text style={{ fontSize: 13 }}>
          <MaterialCommunityIcons
            name="truck-delivery-outline"
            size={15}
            color="black"
          />
          &nbsp;80 BDT
        </Text>
        <Text style={{ fontSize: 13 }}>
          <Feather name="layers" size={14} color="black" />
          &nbsp; stock: {wholesaler?.current_stock}
        </Text>
        <Text style={{ fontSize: 16, color: "red", marginVertical: 5 }}>
          {wholesaler?.selling_price} BDT
        </Text>
        <View style={{ flexDirection: "row", gap: 8 }}>

          <TouchableOpacity style={{
            backgroundColor: Colors.light.orange,
            paddingHorizontal: 38,
            paddingVertical: 7,
            borderRadius: 5,
          }} onPress={handleNavigate}>

            <Text
              style={{
                fontSize: 14,
                color: "white",
              }}
            >
              View Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BuyerOptionsCards;
