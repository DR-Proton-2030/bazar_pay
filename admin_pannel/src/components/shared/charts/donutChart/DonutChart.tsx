
// import React from "react";
// import { ResponsivePie } from "@nivo/pie";
// const data = [
//   {
//     id: "elixir",
//     label: "elixir",
//     value: 215,
//     color: "hsl(272, 70%, 50%)",
//   },
//   {
//     id: "rust",
//     label: "rust",
//     value: 497,
//     color: "hsl(157, 70%, 50%)",
//   },
//   {
//     id: "python",
//     label: "python",
//     value: 342,
//     color: "hsl(52, 70%, 50%)",
//   },
//   {
//     id: "scala",
//     label: "scala",
//     value: 373,
//     color: "hsl(198, 70%, 50%)",
//   },
//   {
//     id: "erlang",
//     label: "erlang",
//     value: 534,
//     color: "hsl(222, 70%, 50%)",
//   },
// ];
// const DonutChart = () => {
//   return (
//     <ResponsivePie
//       enableArcLinkLabels={false}
//       data={data}
//       //   margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//       innerRadius={0.5}
//       padAngle={0.7}
//       cornerRadius={1}
//       activeOuterRadiusOffset={8}
//       borderWidth={1}
//       borderColor={{
//         from: "color",
//         modifiers: [["darker", 0.2]],
//       }}
//       arcLinkLabelsSkipAngle={10}
//       arcLinkLabelsTextColor="#333333"
//       //   arcLinkLabelsThickness={2}
//       arcLinkLabelsColor={{ from: "color" }}
//       arcLabelsSkipAngle={10}
//       arcLabelsTextColor={{
//         from: "color",
//         modifiers: [["darker", 2]],
//       }}

//         defs={[
//           {
//             id: "dots",
//             type: "patternDots",
//             background: "inherit",
//             color: "rgba(255, 255, 255, 0.3)",
//             size: 4,
//             padding: 1,
//             stagger: true,
//           },
//           {
//             id: "lines",
//             type: "patternLines",
//             background: "inherit",
//             color: "rgba(255, 255, 255, 0.3)",
//             rotation: -45,
//             lineWidth: 6,
//             spacing: 10,
//           },
//         ]}
//         fill={[
//           {
//             match: {
//               id: "ruby",
//             },
//             id: "dots",
//           },
//           {
//             match: {
//               id: "c",
//             },
//             id: "dots",
//           },
//           {
//             match: {
//               id: "go",
//             },
//             id: "dots",
//           },
//           {
//             match: {
//               id: "python",
//             },
//             id: "dots",
//           },
//           {
//             match: {
//               id: "scala",
//             },
//             id: "lines",
//           },
//           {
//             match: {
//               id: "lisp",
//             },
//             id: "lines",
//           },
//           {
//             match: {
//               id: "elixir",
//             },
//             id: "lines",
//           },
//           {
//             match: {
//               id: "javascript",
//             },
//             id: "lines",
//           },
//         ]}
//         legends={[
//           {
//             anchor: "bottom",
//             direction: "row",
//             justify: false,
//             translateX: 0,
//             translateY: 56,
//             itemsSpacing: 0,
//             itemWidth: 100,
//             itemHeight: 18,
//             itemTextColor: "#999",
//             itemDirection: "left-to-right",
//             itemOpacity: 1,
//             symbolSize: 18,
//             symbolShape: "circle",
//             effects: [
//               {
//                 on: "hover",
//                 style: {
//                   itemTextColor: "#000",
//                 },
//               },
//             ],
//           },
//         ]}
//     />
//   );
// };

// export default DonutChart;

import React from 'react'

const DonutChart = () => {
  return (
    <div>DonutChart</div>
  )
}

export default DonutChart