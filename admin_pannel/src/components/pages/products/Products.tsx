import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import UIContext from "../../../contexts/uiContext/UIContext";
import { IPagination } from "../../../@types/props/pagination";
import { IProduct } from "../../../@types/interface/product.interface";
import { Box, Button } from "@mui/material";
import DataGrid from "../../shared/dataGrid/DataGrid";
import { ProductDefs } from "./productDefs/productDefs";
import BasicPagination from "../../shared/basicPagination/BasicPagination";
import { api } from "../../../utils/api";
import { FilterModel } from "ag-grid-community";
import { formatFilters } from "../../../utils/commonFunction/formatApiFilters";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const { setDashboardHeader } = useContext(UIContext);
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const queryParams = new URLSearchParams(window.location.search);
  const categoryId = queryParams.get("cid");
  const subcategoryId = queryParams.get("scid");
  
  const [pagination, setPagination] = useState<IPagination>({
    currentPage: 1,
    pageCount: 1,
  });
  const [allProductList, setAllProductList] = useState<IProduct[]>([]);

const handleRouteToAddProduct = () => {
  navigate(`/add-products?cid=${categoryId}&scid=${subcategoryId}`)
}
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
  const getAllProjects = useCallback(async () => {
    try {
      const formattedFilter = formatFilters(filters);
        console.log("Formatted filters-->", formattedFilter);
          setLoading(true);
      const filter = {
        ...formattedFilter,
        page: pagination.currentPage,
      };
      const response = await api.product.getProducts(filter);
      if (response) {
        setAllProductList(response.result);
        setPagination(response.pagination);
        console.log("response", response);
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  }, [pagination.currentPage, filters]);

  useEffect(() => {
    getAllProjects();
  }, [getAllProjects]);

  useEffect(() => {
    setDashboardHeader("All Products");
  }, [setDashboardHeader]);

  //page
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box>
          <div style={{display:"flex", justifyContent: "right", alignItems: "right", marginBottom: "20px"}}>
            <Button variant="contained" className="blue-btn" onClick={handleRouteToAddProduct}>
              Add Products
            </Button>
          </div>
          <DataGrid
            colDefs={ProductDefs}
            rowData={allProductList}
            key={2} onFilterChange={handleFilterChange}></DataGrid>
          <BasicPagination
            pageCount={0}
            currentPage={0}
            handlePageChange={function (
              event: ChangeEvent<unknown>,
              value: number
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default ProductList;
