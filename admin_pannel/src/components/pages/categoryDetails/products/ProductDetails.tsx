import React, { useCallback, useEffect, useState } from 'react'
import DataGrid from '../../../shared/dataGrid/DataGrid'
import { ProductColDefs } from '../../../../constants/products/productColDefs'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../../utils/api'
import { IProduct } from '../../../../@types/interface/product.interface'

const Products = () => {
const navigate = useNavigate()
  const [rowData, setRowData] = useState<IProduct[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1);
  const queryParams = new URLSearchParams(window.location.search);
  const categoryId = queryParams.get("cid");
  const subcategoryId = queryParams.get("scid");

  const getProducts = useCallback(
    async (filterQuery: any) => {
      try {
        const filter = {
          ...filterQuery,
          page: currentPage,
          category_object_id: categoryId,
          subcategory_object_id: subcategoryId,
        };
        const response = await api.productbyId.getProductbyId(filter);
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
    getProducts({});
  }, [getProducts]);
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
      <DataGrid rowData={rowData} colDefs={ProductColDefs}/>
    </div>
  )
}

export default Products;