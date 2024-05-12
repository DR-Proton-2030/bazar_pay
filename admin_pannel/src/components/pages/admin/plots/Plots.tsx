import React, { useCallback, useContext, useEffect, useState } from "react";
import { PlotsDefs } from "../../../../constants/plots/plotsDefs";
import DataGrid from "../../../shared/dataGrid/DataGrid";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./plots.css";
import { IProject } from "../../../../@types/interface/Projects";
import { api } from "../../../../utils/api";
import BuilderContext from "../../../../contexts/builderContext/BuilderContext";
import UIContext from "../../../../contexts/uiContext/UIContext";
import AuthContext from "../../../../contexts/authContext/authContext";
import { ROLES } from "../../../../constants/roles/Roles";

type Props = {};

const AdminPlots = (props: Props) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { builderDetails } = useContext(BuilderContext);
  const { setDashboardHeader } = useContext(UIContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowData, setRowData] = useState<IProject[]>([]);

  const handleNavigateToAddPlots = () => {
    navigate(`/admin/add-plots?cid=${builderDetails?._id}`);
  };

  // const fetchPlots = useCallback(async () => {
  //   try {
  //     if (!builderDetails || !builderDetails._id) return;
  //     const response = await api.project.getAdminPlots(
  //       currentPage,
  //       builderDetails._id
  //     );
  //     if (response) {
  //       setRowData(response);
  //     }
  //   } catch (error) {
  //     console.error("Error while fetching data:", error);
  //   }
  // }, [currentPage, builderDetails]);

  // useEffect(() => {
  //   fetchPlots();
  // }, [fetchPlots]);

  useEffect(() => {
    setDashboardHeader("All Products");
  }, [setDashboardHeader]);

  return (
    <div>
      {user?.role === ROLES.telecaller ? null : (
        <div className="add-plots-btn">
          <Button
            variant="contained"
            className="button"
            onClick={handleNavigateToAddPlots}
            style={{
              padding: "10px",
              width: "150px",
              backgroundColor: "#1DC51D",
              fontFamily: "Railway, sans-serif",
            }}
          >
            Add Product
          </Button>
        </div>
      )}
      <DataGrid colDefs={PlotsDefs} rowData={rowData} key={0} />
    </div>
  );
};

export default AdminPlots;
