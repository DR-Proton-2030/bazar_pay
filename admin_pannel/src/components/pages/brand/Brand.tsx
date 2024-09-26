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
import { FilterModel } from "ag-grid-community";
import { formatFilters } from "../../../utils/commonFunction/formatApiFilters";

const Brand = () => {
  const { setDashboardHeader } = useContext(UIContext);
  const [rowData, setRowData] = useState<IBrand[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filters, setFilters] = useState([]);
  const navigate = useNavigate();

  const [pagination, setPagination] = useState<IPagination>({
    currentPage: 1,
    pageCount: 1,
  });

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


  const getBrandList = useCallback(
    async () => {
      try {
        const formattedFilter = formatFilters(filters);
			console.log("Formatted filters-->", formattedFilter);
        setLoading(true);

       
        const filter = {
          ...formattedFilter,
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
    [pagination.currentPage, filters]
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
    getBrandList();
  }, [getBrandList]);

  useEffect(() => {
    setDashboardHeader("Brand List");
  }, [setDashboardHeader]);

  console.log("brandlist",rowData)
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
      <DataGrid rowData={rowData} colDefs={BrandColDefs} onFilterChange={handleFilterChange} />
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
