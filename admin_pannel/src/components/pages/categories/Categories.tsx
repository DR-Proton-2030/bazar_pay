import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import { useCallback, useContext, useEffect, useState } from "react";
import { api } from "../../../utils/api";
import DataGrid from "../../shared/dataGrid/DataGrid";
import UIContext from "../../../contexts/uiContext/UIContext";
import { CategoryColDefs } from "../../../constants/categories/categoryColDefs";
import { ICategory } from "../../../@types/interface/category.interface";
import BasicPagination from "../../shared/basicPagination/BasicPagination";
import { IPagination } from "../../../@types/props/pagination";
import { FilterModel } from "ag-grid-community";
import { formatFilters } from "../../../utils/commonFunction/formatApiFilters";


const Categories = () => {
  const navigate = useNavigate();
  const { setDashboardHeader } = useContext(UIContext);
  const [rowData, setRowData] = useState<ICategory[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState([]);
  const [categoryPagination, setCategoryPagination] = useState<IPagination>({
    currentPage: 1,
    pageCount: 1,
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCategoryPagination((prev) => ({
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
  const getCategories = useCallback(
    async () => {
      try {
        const formattedFilter = formatFilters(filters);
        console.log("Formatted filters-->", formattedFilter);
          setLoading(true);
        const filter = {
          ...formattedFilter,
          page: categoryPagination.currentPage,
        };
        const response = await api.category.getCategory(filter);
        if (response) {
          setRowData(response.result);
          setCategoryPagination(response.pagination);
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    },
    [categoryPagination.currentPage , filters]
  );

  useEffect(() => {
    getCategories();
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
          style={{
            backgroundColor: "#387ADF",
            fontFamily: "Railway, sans-serif",
          }}
          onClick={() => navigate("/add-category")}
          endIcon={<AddToPhotosOutlinedIcon />}
        >
          Add Category
        </Button>
      </div>
      <DataGrid colDefs={CategoryColDefs} rowData={rowData} key={0} onFilterChange={handleFilterChange} />

      <BasicPagination
        pageCount={categoryPagination.pageCount}
        handlePageChange={handlePageChange}
        currentPage={categoryPagination.currentPage}
      />
    </div>
  );
};

export default Categories;
