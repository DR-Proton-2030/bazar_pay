import { ResponsiveBar } from "@nivo/bar";
import React from "react";
import { TBarChartDataProps } from "../../../../@types/props/Charts.props";

const data = [
  {
    country: "AD",
    "hot dog": 190,
    "hot dogColor": "hsl(326, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 141,
    "hot dogColor": "hsl(132, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 56,
    "hot dogColor": "hsl(227, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 191,
    "hot dogColor": "hsl(286, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 163,
    "hot dogColor": "hsl(227, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 120,
    "hot dogColor": "hsl(209, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 4,
    "hot dogColor": "hsl(346, 70%, 50%)",
  },
];

const BarChart: React.FC<TBarChartDataProps> = ({ barChartData }) => {
  return (
    <ResponsiveBar
      data={barChartData}
      keys={["value"]}
      indexBy="day"
      margin={{ top: 50, right: 40, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      // fill={[
      //   {
      //     match: {
      //       id: "fries",
      //     },
      //     id: "dots",
      //   },
      //   {
      //     match: {
      //       id: "sandwich",
      //     },
      //     id: "lines",
      //   },
      // ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Days",
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Bookings",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      //   legends={[
      //     {
      //       dataFrom: "keys",
      //       anchor: "top-right",
      //       direction: "column",
      //       justify: false,
      //       translateX: 120,
      //       translateY: 0,
      //       itemWidth: 100,
      //       itemHeight: 20,
      //       itemsSpacing: 2,
      //       symbolSize: 20,
      //       itemDirection: "left-to-right",
      //     },
      //   ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};

export default BarChart;
