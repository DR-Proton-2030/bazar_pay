import { ResponsiveLine } from "@nivo/line";
import React from "react";
import { TLineChartDataProps } from "../../../../@types/props/Charts.props";

const data = [
  {
    id: "japan",
    color: "hsl(293, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 23,
      },
      {
        x: "helicopter",
        y: 270,
      },
      {
        x: "boat",
        y: 86,
      },
      {
        x: "train",
        y: 228,
      },
      {
        x: "subway",
        y: 46,
      },
      {
        x: "bus",
        y: 112,
      },
      {
        x: "car",
        y: 32,
      },
      {
        x: "moto",
        y: 226,
      },
      {
        x: "bicycle",
        y: 80,
      },
      {
        x: "horse",
        y: 183,
      },
      {
        x: "skateboard",
        y: 132,
      },
      {
        x: "others",
        y: 21,
      },
    ],
  },
];

const LineChart: React.FC<TLineChartDataProps> = ({ lineChartData }) => {
  return (
    <ResponsiveLine
      data={lineChartData}
      margin={{ top: 50, right: 40, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Days",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Leads",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      enableGridX={false}
      colors={{ scheme: "nivo" }}
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      //   legends={[
      //     {
      //       anchor: "bottom-right",
      //       direction: "column",
      //       justify: false,
      //       translateX: 100,
      //       translateY: 0,
      //       itemsSpacing: 0,
      //       itemDirection: "left-to-right",
      //       itemWidth: 80,
      //       itemHeight: 20,
      //       itemOpacity: 0.75,
      //       symbolSize: 12,
      //       symbolShape: "circle",
      //       symbolBorderColor: "rgba(0, 0, 0, .5)",
      //       effects: [
      //         {
      //           on: "hover",
      //           style: {
      //             itemBackground: "rgba(0, 0, 0, .03)",
      //             itemOpacity: 1,
      //           },
      //         },
      //       ],
      //     },
      //   ]}
    />
  );
};

export default LineChart;
