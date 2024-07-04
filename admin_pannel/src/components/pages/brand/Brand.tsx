import React, { useContext, useEffect, useState } from 'react'
import UIContext from '../../../contexts/uiContext/UIContext'
import DataGrid from '../../shared/dataGrid/DataGrid'
import { BrandColDefs } from '../../../constants/brand/brandColDefs'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Brand = () => {
    const {setDashboardHeader} = useContext(UIContext)
    const [rowData, setRowdata] = useState([])
    const navigate = useNavigate()

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
         
        >
          Add Brand
        </Button>
      </div>
        <DataGrid rowData={rowData} colDefs={BrandColDefs}/>
    </div>
  )
}

export default Brand