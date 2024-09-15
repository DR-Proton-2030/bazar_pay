import React, { useContext, useState } from "react";
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
import AuthContext from "../../../contexts/authContext/authContext";
import logo from "../../../assets/logo/bazarpay-logo.svg";
import scriptures from "../../../assets/images/Scriptures.png";

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
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Sidebar: React.FC<SideBarProps> = ({ toggleSidebar, opens }) => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(true);
  const [collapseOpen, setCollapseOpen] = useState(false);

  const handleToggleSidebar = () => {
    setOpen(!open);
    toggleSidebar();
  };

  // const handleToggleCollapse = () => {
  //   setCollapseOpen(!collapseOpen);
  // };

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
            backgroundColor: "#e6f7ff",
            color: colorConfigs.sidebar.color,
            overflowX: "hidden",
            boxShadow: "0 1px 4px 1px gray",
          },
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "right",
          }}
        >
          <IconButton
            onClick={handleToggleSidebar}
            style={{
              color: "white",
              backgroundColor: "#000066",
              width: "22px",
              height: "22px",
            }}
          >
            {open ? <ChevronLeft /> : <Menu />}
          </IconButton>
          {/* <Stack
                        sx={{ width: "100%", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}
                        direction="row"
                        justifyContent="center"
                    >
                      
                        <h2 style={{ fontWeight: "semibold",  fontFamily: "poppins, sans-serif", fontSize: "20px"}}>
                            Super Admin
                        </h2>
                    </Stack> */}
        </Toolbar>

        <div className="logo-container" >
          <img src={logo} alt="logo" />
        </div>
        <Avatar
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "30px",

            height: "90px",
            width: "90px",
          }}
          {...stringAvatar(user?.full_name || "Super Admin")}
        />

        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontWeight: "bold",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          {/* {builderData?.builder_name} */}
          {user?.full_name || "Super Admin"}
        </h1>

        {/* Sidebar content */}
        <List disablePadding>
          {appRoutes.map((route, index) =>
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null
          )}
        </List>

        {/* Collapsible Section */}
        {/* <Collapse in={!open} unmountOnExit>
          <div
            style={{ padding: "16px", color: "white", backgroundColor: "red" }}
          >
            <div>{collapseOpen && <div>Collapsed Content</div>}</div>
          </div>
        </Collapse> */}

<div className="logo-column">
					<p style={{ color: "gray", fontStyle: "italic", fontWeight: "bold" }}>Powered By</p>
					<div
						className="logo-content"
						style={{
							borderRadius: "6px",
							cursor: "pointer"
						}}
					>
						<a href="https://scripturesresearch.com/" target="_blank" rel="noreferrer">
							<img
								src={scriptures}
								alt="scriptures"
								style={{
									width: "80%",
									objectFit: "cover",
									borderRadius: "10px"
								}}
							/>
						</a>
					</div>
				</div>
      </Drawer>
    </>
  );
};

export default Sidebar;
