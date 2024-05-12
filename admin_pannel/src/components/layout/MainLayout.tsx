import React, { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../shared/sidebar/Sidebar";
import Topbar from "./topbar/Topbar";
import { Outlet, useLocation } from "react-router-dom";
import AdminSidebar from "../shared/sidebar/AdminSidebar";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarWidth = sizeConfigs.sidebar.width;
  const location = useLocation();

  const isOnAdminPage = location.pathname.startsWith("/admin");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* <Topbar toggleSidebar={toggleSidebar} open={sidebarOpen} /> */}
      <Topbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <Box
        component="nav"
        sx={{
          width: sidebarOpen ? sidebarWidth : 0,
          flexShrink: 0,
          transition: "width 0.2s ease-in-out",
        }}
      >
        {isOnAdminPage ? (
          <AdminSidebar toggleSidebar={toggleSidebar} opens={sidebarOpen} />
        ) : (
          <Sidebar toggleSidebar={toggleSidebar} opens={sidebarOpen} />
        )}
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: sidebarOpen ? `calc(100% - ${sidebarWidth}px)` : "100%",
          minHeight: "100vh",

          transition: "width 0.2s ease-in-out",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </div>
  );
};

export default MainLayout;
