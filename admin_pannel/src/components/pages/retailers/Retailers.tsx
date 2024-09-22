import React, { useCallback, useContext, useEffect, useState } from "react";
import UIContext from "../../../contexts/uiContext/UIContext";
import DataGrid from "../../shared/dataGrid/DataGrid";
import { IRetailers } from "../../../@types/interface/retailer.interface";
import { RetailerColDefs } from "./retailerColDefs/retailerColDefs";
import { Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { api } from "../../../utils/api";
import { IPagination } from "../../../@types/props/pagination";
import BasicPagination from "../../shared/basicPagination/BasicPagination";

const Retailers = () => {
  const navigate = useNavigate();
  const { setDashboardHeader } = useContext(UIContext);
  const [retailerList, setRetailerList] = useState<IRetailers[]>([]);
  const [pagination, setPagination] = useState<IPagination>({
    currentPage: 1,
    pageCount: 1,
  });

  const handleRouteToAddRetailer = () => {
    navigate("/retailers/add-retailers");
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPagination({ ...pagination, currentPage: value });
  };

  const getRetailers = useCallback(async () => {
    try {
      const response = await api.retailer.getRetailers({});
      if (response) {
        setRetailerList(response.result);
        setPagination(response.pagination);
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  }, []);

  useEffect(() => {
    getRetailers();
  }, [getRetailers, pagination.currentPage]);

  useEffect(() => {
    setDashboardHeader("All Retailers");
  }, [setDashboardHeader]);

  return (
    <div>
      <div className="add-btn">
        <Button
          variant="contained"
          className="blue-btn"
          style={{
            backgroundColor: "#387ADF",
            fontFamily: "Railway, sans-serif",
          }}
          onClick={handleRouteToAddRetailer}
        >
          Add Retailer
        </Button>
      </div>
      <DataGrid rowData={retailerList} colDefs={RetailerColDefs} />
      <BasicPagination
        currentPage={pagination.currentPage}
        pageCount={pagination.pageCount}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Retailers;
