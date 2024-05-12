import HomePage from "../components/pages/home/HomePage";
import { RouteType } from "./config";
import DashboardIndex from "../components/pages/bookings/DashboardIndex";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import BookIcon from "@mui/icons-material/Book";
import AllCustomersPage from "../components/pages/allCustomers/AllCustomersPage";
import BookingPageLayout from "../components/pages/bookings/BookingPageLayout";
// import NewEnquiryPage from "../components/pages/bookings/newEnquiry/NewEnquiryPage";
import CurrentBookingPage from "../components/pages/bookings/currentBooking/CurrentBookingPage";
import BookingHistoryPage from "../components/pages/bookings/bookingHistory/BookingHistoryPage";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Builders from "../components/pages/builders/Builders";
import BuilderForm from "../components/pages/builders/builderForm/BuilderForm";
import PermissionPage from "../components/pages/permission/PermissionPage";
import TelecallerManagement from "../components/pages/permission/telecallerManagement/TelecallerManagement";
import BuilderManagement from "../components/pages/permission/advertisement/Advertisement";
import UserManagement from "../components/pages/permission/userManagement/UserManagement";
import UserForm from "../components/pages/permission/userManagement/userForm/UserForm";
import AdminPage from "../components/pages/admin/AdminPage";
import AdminPlots from "../components/pages/admin/plots/Plots";
import AddPlotsForm from "../components/pages/admin/plots/addPlots/AddPlotsForm";
import UploadLayout from "../components/pages/admin/plots/addPlots/UploadLayout";
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
import NewEnquiry from "../components/pages/admin/enquiry/NewEnquiry";
import AdminReports from "../components/pages/reports/AdminReports";
import Book from "@mui/icons-material/Book";
import EmployeeManagemnet from "../components/pages/admin/employeeManagment/EmployeeManagemnet";
import AddEmployee from "../components/pages/admin/employeeManagment/addEmployee/AddEmployee";
import ForwardedEnquiry from "../components/pages/admin/forwardedEnquiry/ForwardedEnquiry";
import AssignedProject from "../components/pages/admin/assignedProject/AssignedProject";

const adminRoutes: RouteType[] = [
  {
    path: "/admin",
    element: <AdminPage />,
    state: "admin",
  },
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
    path: "/admin/admin-enquiry",
    element: <NewEnquiry />,
    state: "customerEnquiry",
    sidebarProps: {
      displayText: "Orders",
      icon: <BookmarkAdd />,
    },
  },
  {
    path: "/admin/employee",
    element: <EmployeeManagemnet />,
    state: "employee",
    sidebarProps: {
      displayText: "Employee Management",
      icon: <AccountCircleOutlined />,
    },
  },
  
  {
    path: "/admin/Plots",
    element: <AdminPlots />,
    state: "allPlots",
    sidebarProps: {
      displayText: "All Categories",
      icon: <CategoryOutlined />,
    },
  },
  {
    path: "/admin/forwarded_enquiry",
    element: <ForwardedEnquiry />,
    state: "forwarded_enqury",
    sidebarProps: {
      displayText: "Forwared Enquiry",
      icon: <AdminPanelSettingsRounded />,
    },
  },
  {
    path: "/admin/assigned_project",
    element: <AssignedProject />,
    state: "assigned_projects",
    sidebarProps: {
      displayText: "Assigned Projects",
      icon: <ScatterPlotSharp />,
    },
  },

  {
    path: "/admin/add-plots",
    element: <AddPlotsForm />,
    state: "plots",
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
  {
    path: "/admin/select-plots",
    element: <UploadLayout />,
    state: "plots",
  },
  {
    path: "/admin/add-employee",
    element: <AddEmployee />,
    state: "admin",
  },

 
];

export default adminRoutes;
