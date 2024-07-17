import React, { useCallback, useContext, useEffect, useState } from "react";
import DataGrid from "../../../shared/dataGrid/DataGrid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SubcategoryColDefs } from "../../../../constants/subCategory/subCategoryColDefs";
import { ISubcategory } from "../../../../@types/interface/subcategory.interface";
import { api } from "../../../../utils/api";
import UIContext from "../../../../contexts/uiContext/UIContext";

const SubcategoryDetails = () => {
  const navigate = useNavigate();
  const {setDashboardHeader} = useContext(UIContext)
  const [rowData, setRowData] = useState<ISubcategory[]>([]);
  // const [builderData, setBuilderData] = useState<I>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const queryParams = new URLSearchParams(window.location.search);
  const categoryId = queryParams.get("cid");


  const getSubcategories = useCallback(
    async () => {
      try {
        const queryParams = new URLSearchParams(window.location.search);
        const categoryId = queryParams.get("cid");
        if (!categoryId) {
          //add alert
          throw new Error("Builder ID is missing in the query parameters.");
        }
        const filter = {
          page: currentPage,
          category_object_id: categoryId
        };
        const response = await api.subcategory.getSubcategory(filter);
        if (response) {
          setRowData(response);
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    },
    [currentPage, categoryId]
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    getSubcategories();
  }, []);


  useEffect(() => {
    setDashboardHeader("All subcategories")
  }, [setDashboardHeader])
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
    </div>
  );
};

export default SubcategoryDetails;
