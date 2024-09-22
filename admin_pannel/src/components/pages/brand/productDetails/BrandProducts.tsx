import React, { useCallback, useContext, useEffect, useState } from "react";
import DataGrid from "../../../shared/dataGrid/DataGrid";
import { ProductColDefs } from "../../../../constants/products/productColDefs";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { api } from "../../../../utils/api";
import { IProduct } from "../../../../@types/interface/product.interface";
import UIContext from "../../../../contexts/uiContext/UIContext";
import { IProducts } from "../../../../@types/interface/products.interface";

const Products = () => {
  const navigate = useNavigate();
  const { setDashboardHeader } = useContext(UIContext);
  const [rowData, setRowData] = useState<IProducts[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const queryParams = new URLSearchParams(window.location.search);
  const brandId = queryParams.get("bid");

  const getProducts = useCallback(
    async (filterQuery: any) => {
      try {
        const filter = {
          ...filterQuery,
          page: currentPage,
          brand_object_id: brandId,
        };
        const response = await api.productbyId.getProductbyId(filter);
        if (response) {
          setRowData(response);
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    },
    [brandId, currentPage]
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    getProducts({});
  }, [getProducts]);

  useEffect(() => {
    setDashboardHeader("All products");
  }, [setDashboardHeader]);
  return (
    <div>
      <div className="add-btn">
        <Button
          variant="contained"
          className="blue-btn"
          onClick={() => navigate(`/add-products`)}
        >
          Add Products
        </Button>
      </div>
      <DataGrid rowData={rowData} colDefs={ProductColDefs} />
    </div>
  );
};

export default Products;
