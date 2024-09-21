import React, { useContext, useEffect, useState } from 'react'
import UIContext from '../../../contexts/uiContext/UIContext'
import DataGrid from '../../shared/dataGrid/DataGrid';
import { IRetailers } from '../../../@types/interface/retailer.interface';
import { RetailerColDefs } from './retailerColDefs/retailerColDefs';
import { Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';




const Retailers = () => {
    const navigate = useNavigate();
    const {setDashboardHeader} = useContext(UIContext);
    const [retailerDetails, setRetailerDetails] = useState<IRetailers[]>([]);


    const handleRouteToAddRetailer = () => {
        navigate("/retailers/add-retailers")
    }
    useEffect(() => {
        setDashboardHeader("All Retailers")
    } , [setDashboardHeader])

  return (
    <div>
        <div className="add-btn">
        <Button
          variant="contained"
          className="blue-btn"
          style={{backgroundColor: "#387ADF", fontFamily: "Railway, sans-serif"}}
          onClick={handleRouteToAddRetailer}
          
        >
          Add Retailer
        </Button>
      </div>
        <DataGrid rowData={retailerDetails} colDefs={RetailerColDefs}/>
    </div>
  )
}

export default Retailers