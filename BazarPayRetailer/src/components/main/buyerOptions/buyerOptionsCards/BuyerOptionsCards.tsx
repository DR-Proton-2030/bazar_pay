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
const BuyerOptionsCards = ({ productdetails }: any) => {

  const context = useContext(ProductCartContext);
  const navigation = useNavigation<any>();

  const handleNavigate = async () => {
    if (context?.addProduct) {
      context.addProduct(productdetails);
    }
    navigation.navigate("cart", { productdetails });
  };

  return (
    <View
      style={{
        backgroundColor: "#F4F4F4",
        height: "auto",
        width: "auto",
        borderRadius: 10,
        padding: 10,
        gap: 8,
        marginRight: 12,
      }}
    >
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Image
          source={{
            uri: "https://imgs.search.brave.com/5-piIW2ggZigrFKTSXEgYBBR56lkRl9zkSmpHTEUuDg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vZTNkZGM0/YTUtMTU3YS00Mzc3/LTk1NDQtNzEyZjUx/MjRhY2JlL2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0x/JnY9NjM4MTU3Njcy/MTkxNjAwMDAw",
          }}
          style={{
            backgroundColor: "gray",
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: "gray",
          }}
          height={40}
          width={40}
        />
        <View>
          <Text style={{ fontSize: 12, fontWeight: "700", marginBottom: 3 }}>
            BD24 Shop for COD
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
              COD
            </Text>
            <Text
              style={{
                backgroundColor: Colors.light.background,
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 20,
                fontSize: 12,
                borderWidth: 1,
                borderColor: "gray",
              }}
            >
              6&nbsp;Sold
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
          <Ionicons name="location-outline" size={14} color="black" />
          &nbsp; Hanai,Dhaka
        </Text>
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
          &nbsp; stock:998
        </Text>
        <Text style={{ fontSize: 14, color: "red", marginVertical: 5 }}>
          {productdetails?.product_saling_price} BDT
        </Text>
        <View style={{ flexDirection: "row", gap: 8 }}>

          <TouchableOpacity onPress={handleNavigate}>

            <Text
              style={{
                backgroundColor: Colors.light.orange,
                paddingHorizontal: 50,
                paddingVertical: 5,
                borderRadius: 5,
                fontSize: 13,
                color: "white",
              }}
            >
              Buy now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BuyerOptionsCards;
