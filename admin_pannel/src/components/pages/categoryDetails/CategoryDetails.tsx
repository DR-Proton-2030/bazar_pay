import React, { useContext, useEffect, useState } from "react";
import { ICategory } from "../../../@types/interface/category.interface";
import { Box, Tab, Tabs } from "@mui/material";
import a11yProps from "../../shared/tabPanel/tabPanelProps/ayProps";
import TabPanel from "../../shared/tabPanel/TabPanel";
import DataGrid from "../../shared/dataGrid/DataGrid";
import UIContext from "../../../contexts/uiContext/UIContext";
import SubcategoryDetails from "./subCategoryDetails/SubcategoryDetails";
import Products from "../products/Products";
import ProductDetails from "./products/ProductDetails";
import { EditCategory } from "./editCategory/EditCategory";

const CategoryDetails = () => {
  const [value, setValue] = useState<number>(0);
  const { setDashboardHeader } = useContext(UIContext);
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  const url = new URL(window.location.href);
  const cid = url.searchParams.get("cid");
  console.log(cid); 
  
  
  useEffect(() => {
    setDashboardHeader("Category Details");
    
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
              label="Sub Category"
              {...a11yProps(0)}
              sx={{ fontFamily: "poppins, sans-serif" }}
            />
            <Tab
              label="Products"
              {...a11yProps(1)}
              sx={{ fontFamily: "poppins, sans-serif" }}
            />
             <Tab
              label="Category Details"
              {...a11yProps(2)}
              sx={{ fontFamily: "poppins, sans-serif" }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <SubcategoryDetails/>
         
        </TabPanel>
        <TabPanel value={value} index={1}>
            <ProductDetails/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <EditCategory cat_id={cid}/>
        </TabPanel>
      </Box>
    </div>
  );
};

export default CategoryDetails;
