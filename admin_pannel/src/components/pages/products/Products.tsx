import { useCallback, useContext, useEffect, useState } from "react";
import UIContext from "../../../contexts/uiContext/UIContext";
import { IPagination } from "../../../@types/props/pagination";
import { IProduct } from "../../../@types/interface/product.interface";
import { Box, Tab, Tabs } from "@mui/material";
import DataGrid from "../../shared/dataGrid/DataGrid";
import { ProductDefs } from "./productDefs/productDefs";
import a11yProps from "../../shared/tabPanel/tabPanelProps/ayProps";
import TabPanel from "../../shared/tabPanel/TabPanel";
import Download from "../../shared/downloadbtn/Download";
import BasicPagination from "../../shared/basicPagination/BasicPagination";
import { api } from "../../../utils/api";
import { PRODUCT_STATUS } from "../../../constants/productStatus/ProductStatus";
import { downloadExcel } from "../../../utils/commonFunction/downloadExcel";


const ProductList = () => {
  const { setDashboardHeader } = useContext(UIContext);
  // const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagination, setPagination] = useState<IPagination>({
    currentPage: 1,
    pageCount: 1,
  });
  const [allProductList, setAllProductList] = useState<IProduct[]>([]);
  const [pendingProductList, setPendingProductList] = useState<IProduct[]>([]);
  const [approvedProductList, setApprovedProductList] = useState<IProduct[]>(
    []
  );
  //for full data
  const [allProductListFullData, setAllProductListFullData] = useState<
    IProduct[]
  >([]);
  const [pendingProductListFullData, setPendingProductListFullData] = useState<
    IProduct[]
  >([]);
  const [approvedProductListFullData, setApprovedProductListFullData] =
    useState<IProduct[]>([]);
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getAllProjects = useCallback(async () => {
    try {
      const filter = {
        page: pagination.currentPage,
      };
      const response = await api.product.getProducts(filter);
      if (response) {
        setAllProductList(response);
        console.log("response", response);
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  }, [pagination.currentPage]);

  const getPendigProjects = useCallback(async () => {
    try {
      const filter = {
        page: pagination.currentPage,
        product_status: PRODUCT_STATUS.pending,
      };
      const response = await api.product.getProducts(filter);
      if (response) {
        setPendingProductList(response);
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  }, [pagination.currentPage]);

  const getApprovedProjects = useCallback(async () => {
    try {
      const filter = {
        page: pagination.currentPage,
        product_status: PRODUCT_STATUS.approved,
      };
      const response = await api.product.getProducts(filter);
      if (response) {
        setApprovedProductList(response);
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  }, [pagination.currentPage]);

  // for full data
  const getAllProjectsFullData = useCallback(async () => {
    try {
      const filter = {
        page: 0,
        product_status : {$ne: "DRAFT"}
      };
      const response = await api.product.getProducts(filter);
      if (response) {
        setAllProductListFullData(response);
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  }, []);

  const getPendigProjectsFullData = useCallback(async () => {
    try {
      const filter = {
        page: 0,
        product_status: PRODUCT_STATUS.pending,
      };
      const response = await api.product.getProducts(filter);
      if (response) {
        setPendingProductListFullData(response);
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  }, []);

  const getApprovedProjectsFullData = useCallback(async () => {
    try {
      const filter = {
        page: 0,
        product_status: PRODUCT_STATUS.approved,
      };
      const response = await api.product.getProducts(filter);
      if (response) {
        setApprovedProductListFullData(response);
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  }, []);

  const onDownloadClickForAll = downloadExcel(
    allProductListFullData,
    "product"
  );
  const onDownloadClickForPending = downloadExcel(
    pendingProductListFullData,
    "product"
  );
  const onDownloadClickForApproved = downloadExcel(
    approvedProductListFullData,
    "product"
  );

  useEffect(() => {
    getAllProjects();
    getPendigProjects();
    getApprovedProjects();
  }, [getAllProjects, getPendigProjects, getApprovedProjects]);

  // useEffect(() => {
  //   getAllProjectsFullData();
  //   getPendigProjectsFullData();
  //   getApprovedProjectsFullData();
  // }, [
  //   getAllProjectsFullData,
  //   getPendigProjectsFullData,
  //   getApprovedProjectsFullData,
  // ]);

  useEffect(() => {
    setDashboardHeader("All Products");
  }, [setDashboardHeader]);

  //page
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box>
        <div
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
              marginBottom: "20px",
            }}
          >
            <Download onClick={onDownloadClickForAll}/>
          </div>
          <DataGrid
            colDefs={ProductDefs}
            rowData={allProductList}
            key={2}
          ></DataGrid>
          <BasicPagination />
      </Box>
      </Box>
    </div>
  );
};

export default ProductList;
