import HomePage from "../components/pages/home/HomePage";
import { RouteType } from "./config";
import DashboardIndex from "../components/pages/bookings/DashboardIndex";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AllCustomersPage from "../components/pages/allCustomers/AllCustomersPage";
import CategoryIcon from '@mui/icons-material/Category';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Builders from "../components/pages/builders/Builders";
import BuilderForm from "../components/pages/builders/builderForm/BuilderForm";
import PermissionPage from "../components/pages/permission/PermissionPage";
import TelecallerManagement from "../components/pages/permission/telecallerManagement/TelecallerManagement";
import BuilderManagement from "../components/pages/permission/advertisement/Advertisement";
import UserManagement from "../components/pages/permission/userManagement/UserManagement";
import UserForm from "../components/pages/permission/userManagement/userForm/UserForm";
import {
  AdminPanelSettings,
  Book,
  Construction,
  People,
  PermIdentity,
  ScatterPlotSharp,
  Settings,
  SettingsAccessibility,
  SettingsAccessibilityRounded,
  ShoppingBag,
  ShoppingCart,
  WheelchairPickup,
} from "@mui/icons-material";
import Reports from "../components/pages/reports/Reports";
import Advertisement from "../components/pages/permission/advertisement/Advertisement";
import AddAdvertisement from "../components/pages/permission/advertisement/addBanner/AddBanner";
import AddBanner from "../components/pages/permission/advertisement/addBanner/AddBanner";
import ProductList from "../components/pages/products/Products";
import Categories from "../components/pages/categories/Categories";
import AddCategoryForm from "../components/pages/categories/addCategory/AddCategoryForm";
import Brand from "../components/pages/brand/Brand";
import AddBrandDetails from "../components/pages/brand/addBrand/AddBrandDetails";
import CategoryDetails from "../components/pages/categoryDetails/CategoryDetails";
import AddSubcategoryForm from "../components/pages/categoryDetails/subCategoryDetails/addSubcategory/AddSubcategoryForm";
import SubcategoryDetails from "../components/pages/categoryDetails/subCategoryDetails/SubcategoryDetails";
import Details from "../components/pages/categoryDetails/subCategoryDetails/details/Details";
import AddProductsForm from "../components/pages/categoryDetails/products/addProducts/AddProductsForm";
import ProductDetails from "../components/pages/categoryDetails/products/ProductDetails";
import BrandProducts from "../components/pages/brand/productDetails/BrandProducts";
import Wholesalers from "../components/pages/builders/Builders";

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
      displayText: "All Retailers",
      icon: <PeopleOutlineOutlinedIcon/>,
    },
  },
  {
    path: "/wholesalers",
    element: <Builders/>,
    state: "Wholesalers",
    sidebarProps: {
      displayText: "Wholesalers",
      icon: <AdminPanelSettingsOutlinedIcon />,
    },
  },
  {
    path: "/categories",
    element: <Categories />,
    state: "categories",
    sidebarProps: {
      displayText: "Categories",
      icon: <CategoryOutlinedIcon/>,
    },
  },
  {
    path: "/brand",
    element: <Brand/>,
    state: "brand",
    sidebarProps: {
      displayText: "Brand",
      icon: <SellOutlinedIcon/>,
    },
  },
  {
    path: "/add-category",
    element: <AddCategoryForm/>,
    state: "categories",
  },
  {
    path: "/wholesaler-details",
    element: <AddCategoryForm/>,
    state: "wholesalers",
  },
  {
    path: "/add-subcategory",
    element: <AddSubcategoryForm/>,
    state: "categories",
  },
  {
    path: "/tails",
    element: <Details/>,
    state: "categories",
  },
  {
    path: "/add-brand",
    element: <AddBrandDetails/>,
    state: "brand",
  },
  {
    path: "/add-products",
    element: <AddProductsForm />,
    state: "categories",
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
    path: "/categories/category-details",
    element: <CategoryDetails />,
    state: "category",
  },
  {
    path: "/product-details",
    element: <ProductDetails />,
    state: "category",
  },
  {
    path: "/subcategory-details",
    element: <SubcategoryDetails />,
    state: "category",
  },
  {
    path: "/brand-details",
    element: <BrandProducts />,
    state: "brand",
  },

  {
    path: "/products",
    element: <ProductList />,
    state: "plots",
    sidebarProps: {
      displayText: "All Products",
      icon: <ShoppingCartOutlinedIcon />,
    },
  },
  {
    path: "/reports",
    element: <Reports />,
    state: "reports",

    sidebarProps: {
      displayText: "Reports",
      icon: <BookmarksOutlinedIcon/>,
    },
  },

  {
    path: "/permission",
    element: <PermissionPage />,
    state: "permission",
    sidebarProps: {
      displayText: "Settings",
      icon: <SettingsOutlinedIcon/>,
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
          displayText: "Admin Management",
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
        state: "advertisement",
        sidebarProps: {
          displayText: "Advertisement",
        },
      },
      {
        path: "/permission/telecaller-management",
        element: <TelecallerManagement />,
        state: "telecaller",
        sidebarProps: {
          displayText: "Telecaller Management",
        },
      },
    ],
  },
];

export default appRoutes;
