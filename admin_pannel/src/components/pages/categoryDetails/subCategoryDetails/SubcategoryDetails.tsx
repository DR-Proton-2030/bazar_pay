import React, { useCallback, useContext, useEffect, useState } from "react";
import DataGrid from "../../../shared/dataGrid/DataGrid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SubcategoryColDefs } from "../../../../constants/subCategory/subCategoryColDefs";
import { ISubcategory } from "../../../../@types/interface/subcategory.interface";
import { api } from "../../../../utils/api";
import UIContext from "../../../../contexts/uiContext/UIContext";
import BasicPagination from "../../../shared/basicPagination/BasicPagination";
import { IPagination } from "../../../../@types/props/pagination";
import { FilterModel } from "ag-grid-community";
import { formatFilters } from "../../../../utils/commonFunction/formatApiFilters";

const SubcategoryDetails = () => {
  const navigate = useNavigate();
  const { setDashboardHeader } = useContext(UIContext);
  const [rowData, setRowData] = useState<ISubcategory[]>([]);
  const [subcategoryPagination, setSubcategoryPagination] =
    useState<IPagination>({
      currentPage: 1,
      pageCount: 1,
    });
    const [loading, setLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState([]);
  

  const queryParams = new URLSearchParams(window.location.search);

  const categoryId = queryParams.get("cid");
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setSubcategoryPagination((prev) => ({
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

  const getSubcategories = useCallback(async () => {
    try {
      const queryParams = new URLSearchParams(window.location.search);
      const categoryId = queryParams.get("cid");
      if (!categoryId) {
        //add alert
        throw new Error("Builder ID is missing in the query parameters.");
      }

      const formattedFilter = formatFilters(filters);
      console.log("Formatted filters-->", formattedFilter);
        setLoading(true);
      const filter = {
        ...formattedFilter,
        page: subcategoryPagination.currentPage,
        category_object_id: categoryId,
      };
      const response = await api.subcategory.getSubcategory(filter);
      if (response) {
        setRowData(response.result);
        setSubcategoryPagination(response.pagination);
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  }, [subcategoryPagination.currentPage, filters]);


  useEffect(() => {
    getSubcategories();
  }, [getSubcategories]);

  useEffect(() => {
    setDashboardHeader("All subcategories");
  }, [setDashboardHeader]);
  return (
    <div>
      <div className="add-btn">
        <Button
          variant="contained"
          className="blue-btn"
          onClick={() => navigate(`/add-subcategory?cid=${categoryId}`)}
        >
          Add Sub Category
        </Button>
      </div>
      <DataGrid rowData={rowData} colDefs={SubcategoryColDefs} onFilterChange={handleFilterChange} />
      <BasicPagination
        pageCount={subcategoryPagination.pageCount}
        handlePageChange={handlePageChange}
        currentPage={subcategoryPagination.currentPage}
      />
    </div>
  );
};

export default SubcategoryDetails;
