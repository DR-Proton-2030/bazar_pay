import { Box, Tab, Tabs } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import SubcategoryDetails from '../../categoryDetails/subCategoryDetails/SubcategoryDetails'
import TabPanel from '../../../shared/tabPanel/TabPanel'
import UIContext from '../../../../contexts/uiContext/UIContext'
import a11yProps from "../../../shared/tabPanel/tabPanelProps/ayProps";
import ListedProducts from './listedProducts/ListedProducts'
import Orders from './orders/Orders'
import TsrList from './tsrList/TsrList'

const WholesalerDetails = () => {

    const [value, setValue] = useState<number>(0);
    const { setDashboardHeader } = useContext(UIContext);
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    
  
    
    useEffect(() => {
      setDashboardHeader("Wholesaler Details");
    }, [setDashboardHeader]);
  return (
    <div>
         <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                border: "none",
                backgroundColor: "#3876BF",
              },
            }}
            className="glb-tab-panel"
          >
            <Tab
              label="Wholesaler Details"
              {...a11yProps(0)}
              sx={{ fontFamily: "poppins, sans-serif" }}
            />
            
            <Tab
              label="Contact Person Details"
              {...a11yProps(1)}
              sx={{ fontFamily: "poppins, sans-serif" }}
            />
            <Tab
              label="Listed Products"
              {...a11yProps(2)}
              sx={{ fontFamily: "poppins, sans-serif" }}
            />
            
            <Tab
              label="Orders"
              {...a11yProps(3)}
              sx={{ fontFamily: "poppins, sans-serif" }}
            />
             <Tab
              label="SR/TSR List"
              {...a11yProps(4)}
              sx={{ fontFamily: "poppins, sans-serif" }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            
         
        </TabPanel>
        <TabPanel value={value} index={1}>
         
        </TabPanel>
        <TabPanel value={value} index={2}>
         <ListedProducts/>
        </TabPanel>
        <TabPanel value={value} index={3}>
         <Orders/>
        </TabPanel>
        <TabPanel value={value} index={4}>
         <TsrList/>
        </TabPanel>
        
      </Box>
    </div>
  )
}

export default WholesalerDetails