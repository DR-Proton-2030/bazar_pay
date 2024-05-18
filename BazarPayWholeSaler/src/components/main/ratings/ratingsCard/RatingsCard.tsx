import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import Colors from "../../../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

const RatingsCard = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.light.cardColor,
        width: "100%",
        height: "auto",
        marginTop: 10,
        borderRadius: 5,
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            source={{
              uri: "https://imgs.search.brave.com/7nzKZdYazHiRTwVj5hdZiEj4EQFjTgHziwvoQXs_FFM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xNDkvMTQ5MDcx/LnBuZw",
            }}
            style={{
              backgroundColor: "gray",
              height: 53,
              width: 53,
              borderRadius: 50,
            }}
          />
          <View>
            <Text style={{ fontSize: 14, fontWeight: "700" }}>Munim Rudro</Text>

            <Text style={{ fontSize: 11, fontWeight: "400" }}>
              18 hours ago
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            marginTop: -10,
            alignItems: "center",
          }}
        >
          <FontAwesome name="star" size={16} color={Colors.light.cardColor} />
          <FontAwesome name="star" size={16} color={Colors.light.cardColor} />
          <FontAwesome name="star" size={16} color={Colors.light.cardColor} />
          <FontAwesome name="star" size={16} color={Colors.light.cardColor} />

          <FontAwesome name="star-o" size={16} color={Colors.light.cardColor} />
        </View>
      </View>
      <Text
        style={{
          fontSize: 13,
          fontWeight: "400",
          marginTop: 5,
          marginBottom: 15,
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus,
        neque consequuntur obcaecati modi maiores dicta porro vel! Obcaecati
        sapiente ea optio iusto.
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginBottom: 10,
        }}
      >
        <Image
          source={{
            uri: "https://imgs.search.brave.com/zoquYXwGbW11jyTzCMaBFlweiTi8ErrXFWhpfxotnNA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/bGl2ZXN0cm9uZy5j/b20vMzc1L2NtZS1k/YXRhL2dldHR5LzVm/MzI5MTVhMWEyOTQ2/OTNhNTViOTgyMzBm/MTU3ZmI5LmpwZw",
          }}
          style={{
            backgroundColor: "#D9D9D9",
            height: 63,
            width: 63,
            borderRadius: 5,
            marginRight: 10,
          }}
        />
        <Image
          source={{
            uri: "https://imgs.search.brave.com/JW0kzSBMdxtalJ2UXsZ1hXtvfFan-hXrSReAWeGI-8g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjcx/NTgwMjg2L3Bob3Rv/L3JpY2UuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUVvNHFm/WFFWeGltZEN5cDVP/QmZERWk1ZU9iQk0x/N3pwaFB2X1ZfRE91/T2c9",
          }}
          style={{
            backgroundColor: "#D9D9D9",
            height: 63,
            width: 63,
            borderRadius: 5,
            marginRight: 10,
          }}
        />
        <Image
          source={{
            uri: "https://imgs.search.brave.com/OM_RYc5k56qQHUU-Z5q_C0BIk9jjhVQQpEJO2hov2LQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzI3LzU0LzE4/LzM2MF9GXzEyNzU0/MTg4NF9kWm1qbzBQ/Y0d4allSVWdwcXJi/VDRuem1FY3RlOEc1/Yy5qcGc",
          }}
          style={{
            backgroundColor: "#D9D9D9",
            height: 63,
            width: 63,
            borderRadius: 5,
            marginRight: 10,
          }}
        />
        <Image
          source={{
            uri: "https://imgs.search.brave.com/at7yJe1IpLmknvlKkL_5lwHKo16WAYMDMkqr3hoN2UU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc1/NTEzNzQ1L3Bob3Rv/L3JpY2UtYmFja2dy/b3VuZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9YXBQZXlf/OFphU1ZBSHZQaDAx/UVc5a1Y0RkxQdTJo/all4NHMyM1JHTlo0/WT0",
          }}
          style={{
            backgroundColor: "#D9D9D9",
            height: 63,
            width: 63,
            borderRadius: 5,
            marginRight: 10,
          }}
        />
      </View>
    </View>
  );
};

export default RatingsCard;
