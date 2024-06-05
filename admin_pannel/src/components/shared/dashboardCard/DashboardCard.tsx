import { Box, Card } from "@mui/material";
import React from "react";

import "./dashboardCard.css";
import { TDashboardCardProps } from "../../../@types/props/Dashboard.props";

const DashboardCard: React.FC<TDashboardCardProps> = ({
  cardTitle,
  cardValue,
  cardIcon,
}) => {
  return (
    <Box sx={{ minWidth: 220, width: "25%", padding: "0.5rem" }}>
      <Card
        variant="outlined"
        sx={{
          padding: "1rem",
          width: "100%",
        }}
      >
        <div className="card-top-section">
          <h3 className="card-title">{cardTitle}</h3>
          <div className="card-icon">{cardIcon}</div>
        </div>
        <div className="card-bottom-section">
          <h1 className="card-value">{cardValue}</h1>
          {/* <div className="card-growth-percent">10%</div> */}
        </div>
      </Card>
    </Box>
  );
};

export default DashboardCard;
