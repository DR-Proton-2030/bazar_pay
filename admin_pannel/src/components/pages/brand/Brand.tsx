import React, { useCallback, useContext, useEffect, useState } from 'react'
import UIContext from '../../../contexts/uiContext/UIContext'
import DataGrid from '../../shared/dataGrid/DataGrid'
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import { BrandColDefs } from '../../../constants/brand/brandColDefs'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { IBrand } from '../../../@types/interface/brand.interface'
import { api } from '../../../utils/api'

const Brand = () => {
    const {setDashboardHeader} = useContext(UIContext)
    const [rowData, setRowData] = useState<IBrand[]>([])
    const navigate = useNavigate()

    const [currentPage, setCurrentPage] = useState<number>(1);

    const getBrandList = useCallback(
      async (filterQuery: any) => {
        try {
          const filter = {
            ...filterQuery,
            page: currentPage,
          };
          const response = await api.brand.getBrand(filter);
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
      getBrandList({});
    }, [getBrandList]);

    useEffect(() => {
        setDashboardHeader("Brand Details")
    }, [setDashboardHeader])
  return (
    <div>
        <div className="add-btn">
        <Button
          variant="contained"
          className="blue-btn"
          style={{backgroundColor: "#387ADF", fontFamily: "Railway, sans-serif"}}
          onClick={() => navigate("/add-brand")}
          endIcon={<AddTaskOutlinedIcon/>}
         
        >
          Add Brand
        </Button>
      </div>
        <DataGrid rowData={rowData} colDefs={BrandColDefs}/>
    </div>
  )
}

export default Brand