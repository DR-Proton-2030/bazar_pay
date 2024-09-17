import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  Avatar,
  Drawer,
  List,
  Stack,
  Toolbar,
  IconButton,
  Collapse,
} from "@mui/material";
import { Menu, ChevronLeft } from "@mui/icons-material";
import assets from "../../../assets";
import colorConfigs from "../../../configs/colorConfigs";
import sizeConfigs from "../../../configs/sizeConfigs";
import appRoutes from "../../../routes/appRoutes";
import SidebarItem from "./sidebarItem/SidebarItem";
import SidebarItemCollapse from "./sidebarItemCollapse/SidebarItemCollapse";
import Topbar from "../../layout/topbar/Topbar";
import adminRoutes from "../../../routes/adminRoutes";
import { api } from "../../../utils/api";
import { IBuilder } from "../../../@types/interface/Builder.interface";
import BuilderContext from "../../../contexts/builderContext/BuilderContext";
import AuthContext from "../../../contexts/authContext/authContext";
import { ROLES } from "../../../constants/roles/Roles";
// import axios from "axios";

interface SideBarProps {
  toggleSidebar: () => void;
  opens: boolean;
}

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  const nameParts = name.split(" ");
  const initials =
    nameParts.length > 1 ? `${nameParts[0][0]}${nameParts[1][0]}` : name[0];
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: initials,
  };
}

const AdminSidebar: React.FC<SideBarProps> = ({ toggleSidebar, opens }) => {
  const [open, setOpen] = useState(true);
  const [builderData, setBuilderData] = useState<IBuilder>();
  const { setBuilderDetails } = useContext(BuilderContext);
  const {user} = useContext(AuthContext);

  const handleToggleSidebar = () => {
    setOpen(!open);
    toggleSidebar();
  };

  const fetchBuildersByID = useCallback(async () => {
    try {
      const queryParams = new URLSearchParams(window.location.search);
      const builderId = queryParams.get("cid");
      if (!builderId) {
        throw new Error("Builder ID is missing in the query parameters.");
      }
      // const response = await api.builder.getBuilderByID(builderId);
      // setBuilderData(response);
      // setBuilderDetails(response);
      // console.log("newResponse-->", response.builder_name);
    } catch (error) {
      console.log("Error while fetching builderByID:")
    }
  }, []);

  useEffect(() => {
    fetchBuildersByID();
  }, [fetchBuildersByID]);

  return (
    <>
      <Topbar sidebarOpen={open} toggleSidebar={handleToggleSidebar} />
      <Drawer
        variant="permanent"
        sx={{
          width: open ? sizeConfigs.sidebar.width : 0,
          flexShrink: 0,
          transition: "width 0.2s ease-in-out",
          "& .MuiDrawer-paper": {
            width: open ? sizeConfigs.sidebar.width : 0,
            boxSizing: "border-box",
            borderRight: "0px",
         backgroundColor: "#1B4242",
            color: colorConfigs.sidebar.color,
            overflowX: "hidden",
          },
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

          {/* abhishek will fix it */}
          {/* <IconButton onClick={handleToggleSidebar} style={{ color: "white" }}>
            {open ? <ChevronLeft /> : <Menu />}
          </IconButton> */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginTop: 30
              }}
            >
              <img
                src={builderData?.builder_logo}
                alt="logo"
                style={{
                  width: "100%",
                 objectFit: "cover"
                }}
              />
            </div>
          </div>
        </Toolbar>
        <h3 style={{ textAlign: "center",marginTop: 30, marginBottom: 30, letterSpacing:5 }}>
          Wholesaler Admin
        </h3>

        <Avatar
          style={{
            left: 110,
            
            marginBottom: "30px",
            height: "80px",
            width: "80px",
            textAlign: "center",
          }}
          {...stringAvatar(user?.full_name || "Admin User")}
        />

        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            marginTop: "-20px",
          }}
        >
          {user?.full_name || "Super Admin"}
        </h2>

        {/* Sidebar content */}
        <List disablePadding>
          {adminRoutes.map((route, index) =>
            route.sidebarProps ? (
              route.child ? (
                user?.role === ROLES.project_manager ? null :
                <SidebarItemCollapse
                  item={route}
                  id={builderData?._id || ""}
                  key={index}
                />
              ) :
              user?.role === ROLES.project_manager ?
              route.state ==="assigned_projects" || route.state ==="forwarded_enqury" ?
              <SidebarItem
              item={{
                ...route,
                path: `${route.path}?cid=${builderData?._id}`,
              }}
              key={index}
            /> :
               null :
               route.state ==="assigned_projects" || route.state ==="forwarded_enqury" ? null :
               route.state === "employee" || route.state ==="reports" ?
               user?.role === ROLES.builder_admin || user?.role === ROLES.super_admin  ?
                (
                <SidebarItem
                  item={{
                    ...route,
                    path: `${route.path}?cid=${builderData?._id}`,
                  }}
                  key={index}
                />
                ) : null : 
                (
                  <SidebarItem
                  
                    item={{
                      ...route,
                      path: `${route.path}?cid=${builderData?._id}`,
                    }}
                    key={index}
                  />
                )
            ) : null
          )}
        </List>
      </Drawer>
    </>
  );
};

export default AdminSidebar;
