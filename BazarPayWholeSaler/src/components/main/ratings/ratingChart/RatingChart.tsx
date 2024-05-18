import React from "react";
import { View, StyleSheet } from "react-native";

const RatingChart = ({ rating }: any) => {
  const calculateColor = (percentage: any) => {
    if (percentage >= 80) {
      return "#58A55C"; // Green for 4 and 5 stars
    } else if (percentage >= 60) {
      return "#58A55C"; // Light green for 3 stars
    } else if (percentage >= 40) {
      return "#CCCCCC"; // Light gray for 2 stars
    } else if (percentage >= 20) {
      return "#FF0000"; // Dark gray for 1 star
    } else {
      return "#FF0000"; // Red for 0 stars
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.chart,
          {
            width: `${rating * 20}%`,
            backgroundColor: calculateColor(rating * 20),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 10,
    backgroundColor: "#EEEEEE",
    borderRadius: 5,
    overflow: "hidden",
  },
  chart: {
    height: "100%",
    borderRadius: 5,
  },
});

export default RatingChart;
