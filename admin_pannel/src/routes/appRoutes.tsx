import HomePage from "../components/pages/home/HomePage";
import { RouteType } from "./config";

import DashboardIndex from "../components/pages/bookings/DashboardIndex";

import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";



import AllCustomersPage from "../components/pages/allCustomers/AllCustomersPage";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Builders from "../components/pages/builders/Builders";
import BuilderForm from "../components/pages/builders/builderForm/BuilderForm";
import PermissionPage from "../components/pages/permission/PermissionPage";
import TelecallerManagement from "../components/pages/permission/telecallerManagement/TelecallerManagement";
import BuilderManagement from "../components/pages/permission/advertisement/Advertisement";
import UserManagement from "../components/pages/permission/userManagement/UserManagement";
import UserForm from "../components/pages/permission/userManagement/userForm/UserForm";
import PlotsPage from "../components/pages/plots/Plots";
import { Book, Construction, PermIdentity, ScatterPlotSharp, Settings, SettingsAccessibility, SettingsAccessibilityRounded } from "@mui/icons-material";
import AddPlotsForm from "../components/pages/admin/plots/addPlots/AddPlotsForm";
import Reports from "../components/pages/reports/Reports";
import Advertisement from "../components/pages/permission/advertisement/Advertisement";
import AddAdvertisement from "../components/pages/permission/advertisement/addBanner/AddBanner";
import AddBanner from "../components/pages/permission/advertisement/addBanner/AddBanner";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/all-customers",
    element: <AllCustomersPage />,
    state: "allcustomers",
    sidebarProps: {
      displayText: "All Customers",
      icon: <SupervisedUserCircleIcon />,
    },
  },
  {
    path: "/builders",
    element: <Builders />,
    state: "builders",
    sidebarProps: {
      displayText: "Builders",
      icon: <Construction />,
    },
  },
  {
    path: "/add-builders",
    element: <BuilderForm />,
    state: "builders",
  },
  {
    path: "/add-banner",
    element: <AddBanner />,
    state: "advertisement",
  },

  {
    path: "/plots",
    element: <PlotsPage />,
    state: "plots",
    sidebarProps: {
      displayText: "All Plots",
      icon: <ScatterPlotSharp />,
    },
  },
  {
    path: "/reports",
    element: <Reports />,
    state: "reports",
   
    sidebarProps: {
      displayText: "Reports",
      icon: <Book />,
    },
  },

  {
    path: "/permission",
    element: <PermissionPage />,
    state: "permission",
    sidebarProps: {
      displayText: "Settings",
      icon: <Settings />,
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "bookings.index",
      },
      {
        path: "/permission/user-management",
        element: <UserManagement />,
        state: "bookings.currentbooking",
        sidebarProps: {
          displayText: "User Management",
        },
      },
      {
        path: "/permission/add-user",
        element: <UserForm />,
        state: "permission",
      },
      {
        path: "/permission/advertisement",
        element: <Advertisement />,
        state: "bookings.history",
        sidebarProps: {
          displayText: "Advertisement",
        },
      },
      {
        path: "/permission/telecaller-management",
        element: <TelecallerManagement />,
        state: "bookings.history",
        sidebarProps: {
          displayText: "Telecaller Management",
        },
      },
    ],
  },
];

export default appRoutes;
