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

const SubcategoryDetails = () => {
  const navigate = useNavigate();
  const { setDashboardHeader } = useContext(UIContext);
  const [rowData, setRowData] = useState<ISubcategory[]>([]);
  const [subcategoryPagination, setSubcategoryPagination] =
    useState<IPagination>({
      currentPage: 1,
      pageCount: 1,
    });
  const queryParams = new URLSearchParams(window.location.search);
  const categoryId = queryParams.get("cid");

  const getSubcategories = useCallback(async () => {
    try {
      const queryParams = new URLSearchParams(window.location.search);
      const categoryId = queryParams.get("cid");
      if (!categoryId) {
        //add alert
        throw new Error("Builder ID is missing in the query parameters.");
      }
      const filter = {
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
  }, [subcategoryPagination.currentPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setSubcategoryPagination((prev) => ({
      ...prev,
      currentPage: value,
    }));
  };

  useEffect(() => {
    getSubcategories();
  }, []);

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
      <DataGrid rowData={rowData} colDefs={SubcategoryColDefs} />
      <BasicPagination
        pageCount={1}
        handlePageChange={handlePageChange}
        currentPage={1}
      />
    </div>
  );
};

export default SubcategoryDetails;
