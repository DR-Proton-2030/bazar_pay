import React, { ChangeEvent, useState } from "react";

import "./homePage.css";
import {
  Box,
  Card,
  Switch,
  Theme,
  createStyles,
  makeStyles,
} from "@mui/material";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import LandscapeIcon from "@mui/icons-material/Landscape";
import PeopleIcon from "@mui/icons-material/People";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { red } from "@mui/material/colors";
import DashboardCard from "../../shared/dashboardCard/DashboardCard";
import PieChart from "../../shared/charts/pieChart/PieChart";
import LineChart from "../../shared/charts/lineChart/LineChart";
import BarChart from "../../shared/charts/barChart/BarChart";

const HomePage = () => {
  const [switchValue, setSwitchValue] = useState<boolean>(false);

  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSwitchValue(event.target.checked);
  };

  const lead = [
    {
      id: "Retailer 1",
      label: "Retailer 1",
      value: 215,
      color: "hsl(272, 70%, 50%)",
    },
    {
      id: "Retailer 2",
      label: "Retailer 2",
      value: 497,
      color: "hsl(157, 70%, 50%)",
    },
    {
      id: "Retailer 3",
      label: "Retailer 3",
      value: 342,
      color: "hsl(52, 70%, 50%)",
    },
  ];
  const builder = [
    {
      id: "Wholesaler 1",
      label: "Wholesaler 1",
      value: 215,
      color: "hsl(272, 70%, 50%)",
    },
    {
      id: "Wholesaler 2",
      label: "Wholesaler 2",
      value: 497,
      color: "hsl(157, 70%, 50%)",
    },
    {
      id: "Wholesaler 3",
      label: "Wholesaler 3",
      value: 342,
      color: "hsl(52, 70%, 50%)",
    },
    {
      id: "Wholesaler 4",
      label: "Wholesaler 4",
      value: 373,
      color: "hsl(198, 70%, 50%)",
    },
    {
      id: "Wholesaler 5",
      label: "Wholesaler 5",
      value: 534,
      color: "hsl(222, 70%, 50%)",
    },
  ];
  const lineChart = [
    {
      id: "leads",
      color: "hsl(293, 70%, 50%)",
      data: [
        {
          x: "Day 1",
          y: 23,
        },
        {
          x: "Day 2",
          y: 170,
        },
        {
          x: "Day 3",
          y: 86,
        },
        {
          x: "Day 4",
          y: 228,
        },
        {
          x: "Day 5",
          y: 46,
        },
        {
          x: "Day 6",
          y: 112,
        },
        {
          x: "Day 7",
          y: 32,
        },
      ],
    },
  ];

  const barChart = [
    {
      day: "Day 1",
      value: 190,
      color: "hsl(326, 70%, 50%)",
    },
    {
      day: "Day 2",
      value: 141,
      color: "hsl(132, 70%, 50%)",
    },
    {
      day: "Day 3",
      value: 56,
      color: "hsl(227, 70%, 50%)",
    },
    {
      day: "Day 4",
      value: 191,
      color: "hsl(286, 70%, 50%)",
    },
    {
      day: "Day 5",
      value: 163,
      color: "hsl(227, 70%, 50%)",
    },
    {
      day: "Day 6",
      value: 120,
      color: "hsl(209, 70%, 50%)",
    },
    {
      day: "Day 7",
      value: 4,
      color: "hsl(346, 70%, 50%)",
    },
  ];
  return (
    <div className="home-page">
      <div className="cards-section">
        <DashboardCard
          cardTitle={"Total Retailers"}
          cardValue={"1110"}
          cardIcon={<LandscapeIcon sx={{ color: "#153448" }} />}
        />
        <DashboardCard
          cardTitle={"Total WholeSalers"}
          cardValue={"764"}
          cardIcon={<PeopleIcon sx={{ color: "#153448" }} />}
        />
        <DashboardCard
          cardTitle={"Total Customers"}
          cardValue={"1892"}
          cardIcon={<LeaderboardIcon sx={{ color: "#153448" }} />}
        />
        <DashboardCard
          cardTitle={"Total Earnings"}
          cardValue={"997"}
          cardIcon={<BookmarkIcon sx={{ color: "#153448" }} />}
        />
      </div>
      <div className="mid-section">
        <div className="bigchart-container">
          <div className="top-section">
            <h2>
              {switchValue ? "Earning from Retailer" : "Earning from Wholesaler"}
            </h2>
            <div className="switch-container">
              <Switch
                checked={switchValue}
                onChange={handleSwitchChange}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  "& .MuiSwitch-thumb": {
                    color: "#2a7662",
                  },
                  "& .Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "#153448",
                  },
                  "&  .MuiSwitch-track": {
                    backgroundColor: "#153448",
                  },
                }}
              />
            </div>
          </div>
          <div className="bottom-section">
            {switchValue ? (
              <PieChart pieChartData={lead} />
            ) : (
              <PieChart pieChartData={builder} />
            )}
            {/* <div className="minor-charts">
              <div className="minor-charts-top">
                <DonutChart />
              </div>
              <div className="minor-charts-bottom">
                <DonutChart />
              </div>
            </div> */}
          </div>
        </div>
        <div className="two-charts-container">
          <div className="top-chart">
            <div className="top-section">
              <h2>Payment Stats</h2>
            </div>
            <div className="bottom-section">
              <LineChart lineChartData={lineChart} />
            </div>
          </div>
          <div className="bottom-chart">
            <div className="top-section">
              <h2>Order Stats</h2>
            </div>
            <div className="bottom-section">
              <BarChart barChartData={barChart} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="map-section">
        <div className="top-section">
          <h2>Customer Location</h2>
        </div>
        <div className="bottom-section">
          <Map />
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
