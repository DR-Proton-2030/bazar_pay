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
    const {user} = useContext(AuthContext);
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
                        backgroundColor: "#1B4242",
                        color: colorConfigs.sidebar.color,
                        overflowX: "hidden",
                    },
                }}
            >
                <Toolbar>
                    <IconButton
                        onClick={handleToggleSidebar}
                        style={{ color: "white" }}
                    >
                        {open ? <ChevronLeft /> : <Menu />}
                    </IconButton>
                    <Stack
                        sx={{ width: "100%", alignItems: "center" }}
                        direction="row"
                        justifyContent="center"
                    >
                        {/* <Avatar src={assets.images.logo} /> */}
                        <h2 style={{ fontWeight: "800", margin: 0 }}>
                            Super Admin
                        </h2>
                    </Stack>
                </Toolbar>
                <Avatar
                    style={{
                        left: 110,
                        marginTop: "10px",
                        marginBottom: "30px",
                        height: "80px",
                        width: "80px",
                    }}
                    // src="https://pbs.twimg.com/media/CnBrlSEVIAAsh04.jpg"
                    {...stringAvatar(user?.full_name || "Super Admin")}
                />

                <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
                    {/* {builderData?.builder_name} */}
                    {user?.full_name}
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
            </Drawer>
        </>
    );
};

export default Sidebar;
