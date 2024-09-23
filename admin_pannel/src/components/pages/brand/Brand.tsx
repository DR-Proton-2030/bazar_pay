import React, { useCallback, useContext, useEffect, useState } from "react";
import UIContext from "../../../contexts/uiContext/UIContext";
import DataGrid from "../../shared/dataGrid/DataGrid";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import { BrandColDefs } from "../../../constants/brand/brandColDefs";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IBrand } from "../../../@types/interface/brand.interface";
import { api } from "../../../utils/api";
import { IPagination } from "../../../@types/props/pagination";
import BasicPagination from "../../shared/basicPagination/BasicPagination";

const Brand = () => {
  const { setDashboardHeader } = useContext(UIContext);
  const [rowData, setRowData] = useState<IBrand[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const [pagination, setPagination] = useState<IPagination>({
    currentPage: 1,
    pageCount: 1,
  });

  const getBrandList = useCallback(
    async (filterQuery: any) => {
      try {
        setLoading(true);
        const filter = {
          ...filterQuery,
          page: pagination.currentPage,
        };
        const response = await api.brand.getBrand(filter);
        if (response) {
          setRowData(response.result);
          setPagination(response.pagination);
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      } finally {
        setLoading(false);
      }
    },
    [pagination.currentPage]
  );

  const handlePageChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPagination((prevPagination) => ({
        ...prevPagination,
        currentPage: value,
      }));
    },
    []
  );

  useEffect(() => {
    getBrandList({});
  }, [getBrandList]);

  useEffect(() => {
    setDashboardHeader("Brand List");
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
          onClick={() => navigate("/add-brand")}
          endIcon={<AddTaskOutlinedIcon />}
        >
          Add Brand
        </Button>
      </div>
      <DataGrid rowData={rowData} colDefs={BrandColDefs} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <BasicPagination
          currentPage={pagination.currentPage}
          pageCount={pagination.pageCount}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Brand;
