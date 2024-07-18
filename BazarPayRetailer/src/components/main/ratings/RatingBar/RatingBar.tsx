import React from "react";
import { View, Text } from "react-native";
import Colors from "../../../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import RatingChart from "../ratingChart/RatingChart";

const RatingBar = () => {
  const ratings = [
    { stars: 5, count: 238 },
    { stars: 4, count: 38 },
    { stars: 3, count: 18 },
    { stars: 2, count: 10 },
    { stars: 1, count: 2 },
  ];

  return (
    <View
      style={{
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <View>
        <Text style={{ fontSize: 50, fontWeight: "700" }}>4.5</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            marginTop: -10,
            alignItems: "center",
          }}
        >
          {[...Array(5)].map((_, index) => (
            <FontAwesome
              key={index}
              name={index < 4 ? "star" : "star-o"}
              size={14}
              color={Colors.light.yellow}
            />
          ))}
        </View>
        <Text>287 Ratings</Text>
      </View>
      <View>
        {ratings.map((item, index) => (
          <View
            key={index}
            style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
          >
            <Text>{item.stars}</Text>
            <RatingChart rating={item.stars} />
            <Text>{item.count}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RatingBar;
