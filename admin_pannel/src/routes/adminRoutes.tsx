
import { RouteType } from "./config";
import AllCustomersPage from "../components/pages/allCustomers/AllCustomersPage";
import AdminPlots from "../components/pages/products/Products";

import {
  AccountCircleOutlined,
  AdminPanelSettingsRounded,
  BookmarkAdd,
  CategoryOutlined,
  MoneyOffCsredRounded,
  People,
  ScatterPlotSharp,
  Settings,
} from "@mui/icons-material";
import AdminReports from "../components/pages/reports/AdminReports";
import Book from "@mui/icons-material/Book";

const adminRoutes: RouteType[] = [
  {
    path: "/admin/all-customers",
    element: <AllCustomersPage />,
    state: "allcustomers",
    sidebarProps: {
      displayText: "All Retailers",
      icon: <People />,
    },
  },
  
  {
    path: "/admin/products",
    element: <AdminPlots />,
    state: "allPlots",
    sidebarProps: {
      displayText: "All Categories",
      icon: <CategoryOutlined />,
    },
  },
  {
    path: "/admin/reports",
    element: <AdminReports />,
    state: "reports",
   
    sidebarProps: {
      displayText: "Reports",
      icon: <Book/>,
    },
  },

 
];

export default adminRoutes;
