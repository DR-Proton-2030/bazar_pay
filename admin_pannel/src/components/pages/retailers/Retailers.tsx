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
import { formatFilters } from "../../../utils/commonFunction/formatApiFilters";
import { FilterModel } from "ag-grid-community";

const Retailers = () => {
  const navigate = useNavigate();
  const { setDashboardHeader } = useContext(UIContext);
  const [retailerList, setRetailerList] = useState<IRetailers[]>([]);
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
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
    setPagination((prev) => ({
      ...prev,
      currentPage: value,
    }));
  };

  const handleFilterChange = (filterModel: FilterModel) => {
		setFilters((prevFilters) => {
			const sanitizedFilters = { ...prevFilters };
			Object.keys(sanitizedFilters).forEach((key: any) => {
				if (!filterModel[key]) {
					delete sanitizedFilters[key];
				}
			});
			const updatedFilters = { ...sanitizedFilters, ...filterModel };
			console.log("Updated Filters-->", updatedFilters);
			return updatedFilters;
		});
	};

  const getRetailers = useCallback(async () => {
    try {
      const formattedFilter = formatFilters(filters);
        console.log("Formatted filters-->", formattedFilter);
          setLoading(true);
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
      <DataGrid rowData={retailerList} colDefs={RetailerColDefs} onFilterChange={handleFilterChange} />
      <BasicPagination
        currentPage={pagination.currentPage}
        pageCount={pagination.pageCount}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Retailers;
