import { Button } from "@mui/material";
import { BuildersColDefs } from "../../../constants/builders/buildersColDefs";
import { useNavigate } from "react-router-dom";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import { useCallback, useContext, useEffect, useState } from "react";
import { IBuilder } from "../../../@types/interface/Builder.interface";
import { api } from "../../../utils/api";
import DataGrid from "../../shared/dataGrid/DataGrid";
import UIContext from "../../../contexts/uiContext/UIContext";
import { CategoryColDefs } from "../../../constants/categories/categoryColDefs";
import { ICategory } from "../../../@types/interface/category.interface";

const Categories = () => {
  const navigate = useNavigate();
  const { setDashboardHeader } = useContext(UIContext);
  const [rowData, setRowData] = useState<ICategory[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getCategories = useCallback(
    async (filterQuery: any) => {
      try {
        const filter = {
          ...filterQuery,
          page: currentPage,
        };
        const response = await api.category.getCategory(filter);
        if (response) {
          setRowData(response);
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    },
    [currentPage]
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    getCategories({});
  }, [getCategories]);

  useEffect(() => {
    setDashboardHeader("Categories");
  }, [setDashboardHeader]);
  return (
    <div className="builders-container">
      <div className="add-btn">
        <Button
          variant="contained"
          className="blue-btn"
          style={{backgroundColor: "#387ADF", fontFamily: "Railway, sans-serif"}}
          onClick={() => navigate("/add-category")}
          endIcon={<AddToPhotosOutlinedIcon />}
        >
          Add Category
        </Button>
      </div>
      <DataGrid colDefs={CategoryColDefs} rowData={rowData} key={0} />
    </div>
  );
};

export default Categories;
