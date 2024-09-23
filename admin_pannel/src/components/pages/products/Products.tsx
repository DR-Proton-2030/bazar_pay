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
import { Box } from "@mui/material";
import DataGrid from "../../shared/dataGrid/DataGrid";
import { ProductDefs } from "./productDefs/productDefs";
import BasicPagination from "../../shared/basicPagination/BasicPagination";
import { api } from "../../../utils/api";

const ProductList = () => {
  const { setDashboardHeader } = useContext(UIContext);
  const [pagination, setPagination] = useState<IPagination>({
    currentPage: 1,
    pageCount: 1,
  });
  const [allProductList, setAllProductList] = useState<IProduct[]>([]);

  const getAllProjects = useCallback(async () => {
    try {
      const filter = {
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
  }, [pagination.currentPage]);

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
          <DataGrid
            colDefs={ProductDefs}
            rowData={allProductList}
            key={2}
          ></DataGrid>
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
