import React, { useCallback, useContext, useEffect, useState } from 'react'
import DataGrid from '../../../shared/dataGrid/DataGrid'
import { ProductColDefs } from '../../../../constants/products/productColDefs'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../../utils/api'
import { IProduct } from '../../../../@types/interface/product.interface'
import UIContext from '../../../../contexts/uiContext/UIContext'
import { IProducts } from '../../../../@types/interface/products.interface'
import BasicPagination from '../../../shared/basicPagination/BasicPagination'
import { FilterModel } from 'ag-grid-community'
import { formatFilters } from '../../../../utils/commonFunction/formatApiFilters'
import { IPagination } from '../../../../@types/props/pagination'

const Products = () => {
const navigate = useNavigate()
const {setDashboardHeader} = useContext(UIContext)
  const [rowData, setRowData] = useState<IProducts[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const queryParams = new URLSearchParams(window.location.search);
  const categoryId = queryParams.get("cid");
  const subcategoryId = queryParams.get("scid");
  const brandId = queryParams.get("bid")
  const [productPagination, setProductPagination] = useState<IPagination>({
    currentPage: 1,
    pageCount: 1,
  });


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
  const getProducts = useCallback(
    async () => {
      try {
        const formattedFilter = formatFilters(filters);
        console.log("Formatted filters-->", formattedFilter);
          setLoading(true);
        const filter = {
          ...formattedFilter,
          page: productPagination.currentPage,
          category_object_id: categoryId,
          subcategory_object_id: subcategoryId,
          brand_object_id: brandId,
        };
        const response = await api.productbyId.getProductbyId(filter);
        if (response) {
          setRowData(response.result);
          setProductPagination(response.pagination);

        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    },
    [productPagination.currentPage, filters]
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    setDashboardHeader("All products")
  }, [setDashboardHeader])
  return (
    <div>
      <div className="add-btn">
        <Button
          variant="contained"
          className="blue-btn"
          onClick={() => navigate(`/add-products?bid=${brandId}&cid=${categoryId}&scid=${subcategoryId}`)}
        >
          Add Products
        </Button>
      </div>
      <DataGrid rowData={rowData} colDefs={ProductColDefs} onFilterChange={handleFilterChange}/>
      <BasicPagination pageCount={productPagination.pageCount} currentPage={productPagination.currentPage} handlePageChange={handlePageChange}/>
    </div>
  )
}

export default Products;