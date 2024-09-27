import { Box, Tab, Tabs } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SubcategoryDetails from "../../categoryDetails/subCategoryDetails/SubcategoryDetails";
import TabPanel from "../../../shared/tabPanel/TabPanel";
import UIContext from "../../../../contexts/uiContext/UIContext";
import a11yProps from "../../../shared/tabPanel/tabPanelProps/ayProps";
import ListedProducts from "./listedProducts/ListedProducts";
import Orders from "./orders/Orders";
import TsrList from "./tsrList/TsrList";
import WholesalerDetailsComponent from "../../../shared/wholesalerDetails/WholesalerDetails";
import WholesalerContactPerson from "../../../shared/wholesalerContactPerson/WholesalerContactPerson";
import { api } from "../../../../utils/api";
import { useLocation } from "react-router-dom";

const WholesalerDetails = () => {
  const [wholesalerDetail, setWholesalerDetail] = useState<any>(null);
  const [orderList, setOrderList] = useState<any>(null);
  const [productList, setProductList] = useState<any>(null);
  const [value, setValue] = useState<number>(0);
  const { setDashboardHeader } = useContext(UIContext);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const wid = queryParams.get("wid");

  const wholesalerDetails = async () => {
    try {
      const filter = {
        _id: wid,
      };
      const wholesalerList = await api.wholesaler.getWholesaler(filter);
      const wholesaler = wholesalerList.result[0];
      setWholesalerDetail(wholesaler);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrderList = async () => {
    try {
      const filter = {
        wholesaler_object_id: wid,
      };
      const response = await api.order.getOrderList(filter);
      setOrderList(response);
    } catch (error) {
      console.log(error);
    }
  };

  // const getOrderList = async () => {
  //   try {
  //     const filter = {
  //       wholesaler_object_id: wid,
  //     };
  //     const response = await api.order.getOrderList(filter);
  //     setOrderList(response);
  //   } catch (error) {}
  // };
  const getProductList = async () => {
    try {
      const filter = {
        wholesaler_object_id: wid,
      };
      const response = await api.product.getWholesalerListedProducts(filter);
      console.log("=======>details", response);
      setProductList(response);
    } catch (error) {}
  };
  useEffect(() => {
    setDashboardHeader("Wholesaler Details");
  }, [setDashboardHeader]);
  useEffect(() => {
    wholesalerDetails();
    getOrderList();
    getProductList();
  }, []);
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
          <WholesalerDetailsComponent wholesalerDetail={wholesalerDetail} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <WholesalerContactPerson wholesalerDetail={wholesalerDetail} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ListedProducts productList={productList} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Orders orderList={orderList} />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <TsrList />
        </TabPanel>
      </Box>
    </div>
  );
};

export default WholesalerDetails;
