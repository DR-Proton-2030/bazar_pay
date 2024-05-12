import { Button } from "@mui/material";
import { BuildersColDefs } from "../../../constants/builders/buildersColDefs";
import { useNavigate } from "react-router-dom";
import "./builders.css";
import { useCallback, useContext, useEffect, useState } from "react";
import { IBuilder } from "../../../@types/interface/Builder.interface";
import { api } from "../../../utils/api";
import DataGrid from "../../shared/dataGrid/DataGrid";
import UIContext from "../../../contexts/uiContext/UIContext";

const Builders = () => {
  const navigate = useNavigate();
  const { setDashboardHeader } = useContext(UIContext);
  const [rowData, setRowData] = useState<IBuilder[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // const fetchbuilders = useCallback(
  //   async (filterQuery: any) => {
  //     try {
  //       const filter = {
  //         ...filterQuery,
  //         page: currentPage,
  //       };
  //       const response = await api.builder.getBuilder(filter);
  //       if (response) {
  //         setRowData(response);
  //       }
  //     } catch (error) {
  //       console.error("Error while fetching data:", error);
  //     }
  //   },
  //   [currentPage]
  // );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  // useEffect(() => {
  //   fetchbuilders({});
  // }, [fetchbuilders]);

  useEffect(() => {
    setDashboardHeader("Wholesalers");
  }, []);
  return (
    <div className="builders-container">
      <div className="add-btn">
        <Button
          variant="contained"
          className="btn"
          style={{backgroundColor: "#1DC51D", fontFamily: "Railway, sans-serif"}}
          onClick={() => navigate("/add-builders")}
        >
          Add Wholesaler
        </Button>
      </div>
      <DataGrid colDefs={BuildersColDefs} rowData={rowData} key={0} />
    </div>
  );
};

export default Builders;
