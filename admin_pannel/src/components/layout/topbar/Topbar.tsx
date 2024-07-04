import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../../../configs/colorConfigs";
import sizeConfigs from "../../../configs/sizeConfigs";
import { ChevronLeft, Logout } from "@mui/icons-material";
import { useContext } from "react";
import UIContext from "../../../contexts/uiContext/UIContext";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import image from "../../../assets/images/house.jpg";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import MenuList from "@mui/material/MenuList";
import { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/system";
import AuthContext from "../../../contexts/authContext/authContext";
import BuilderContext from "../../../contexts/builderContext/BuilderContext";
import { ROLES } from "../../../constants/roles/Roles";
import Dropdown from "../../shared/dropDown/Dropdown";

interface TopbarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void; // Add a toggleSidebar prop of type function
}

const Topbar: React.FC<TopbarProps> = ({ sidebarOpen, toggleSidebar }) => {
  const { dashboardHeader } = useContext(UIContext);
  const {user} = useContext(AuthContext);
  const {builderDetails} = useContext(BuilderContext)

  return (
    <AppBar
      position="fixed"
      elevation={3}
      sx={{
        width: sidebarOpen
          ? `calc(100% - ${sizeConfigs.sidebar.width})`
          : "100%",
        ml: sidebarOpen ? sizeConfigs.sidebar.width : 0,
        backgroundColor: "#F8F8FF",
        color: colorConfigs.topbar.color,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" style={{color: "#333333"}}>{dashboardHeader}</Typography>
        {/* Add a toggle button for the sidebar */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
        >
          {!sidebarOpen && <ChevronLeft />}
        </IconButton>

        {/* <Button variant="contained" sx={{ backgroundColor: "#004d99", fontFamily: "Railway, sans-serif"}}>Builder</Button> */}
        {user?.role === ROLES.super_admin  ? <Dropdown/> : (
        //   <div
        //   className="button-group"
        //   style={{
        //     display: "flex",
           
        //     justifyContent: "center",
        //     alignItems: "center",
        //   }}
        // >
          
        //     <Button className="green-contained-button" variant="outlined">
        //       {builderDetails?.builder_name}
        //     </Button>
        //     <Dropdown/>
          
          
        // </div>
        <Dropdown/>
        ) }
       
        
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
