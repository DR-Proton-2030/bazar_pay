import HomePage from "../components/pages/home/HomePage";
import { RouteType } from "./config";
import DashboardIndex from "../components/pages/bookings/DashboardIndex";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import PermissionPage from "../components/pages/permission/PermissionPage";
import TelecallerManagement from "../components/pages/permission/telecallerManagement/TelecallerManagement";

import Reports from "../components/pages/reports/Reports";
import Advertisement from "../components/pages/permission/advertisement/Advertisement";
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
import AdminManagement from "../components/pages/permission/adminManagement/AdminManagement";
import AddAdminForm from "../components/pages/permission/adminManagement/addAdminForm/AddAdminForm";
import ProductDetails_Form from "../components/pages/productDetails.tsx/ProductDetails";
import AddWholesalers from "../components/pages/wholesalers/addWholesalers/AddWholesalers";
import Retailers from "../components/pages/retailers/Retailers";
import AddRetailerForm from "../components/pages/retailers/addRetailerForm/AddRetailerForm";
import Wholesalers from "../components/pages/wholesalers/Wholesalers";
import WholesalerDetails from "../components/pages/wholesalers/wholesalerDetails/WholesalerDetails";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/retailers",
    element: <Retailers />,
    state: "retailers",
    sidebarProps: {
      displayText: "All Retailers",
      icon: <PeopleOutlineOutlinedIcon />,
    },
  },
  {
    path: "/retailers/add-retailers",
    element: <AddRetailerForm />,
    state: "retailers",
  },
  {
    path: "/wholesalers",
    element: <Wholesalers />,
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
      icon: <CategoryOutlinedIcon />,
    },
  },
  {
    path: "/brand",
    element: <Brand />,
    state: "brand",
    sidebarProps: {
      displayText: "Brand",
      icon: <SellOutlinedIcon />,
    },
  },
  {
    path: "/add-category",
    element: <AddCategoryForm />,
    state: "categories",
  },
  {
    path: "/wholesaler-details",
    element: <WholesalerDetails />,
    state: "wholesalers",
  },
  {
    path: "/add-subcategory",
    element: <AddSubcategoryForm />,
    state: "categories",
  },
  {
    path: "/tails",
    element: <Details />,
    state: "categories",
  },
  {
    path: "/add-brand",
    element: <AddBrandDetails />,
    state: "brand",
  },
  {
    path: "/add-products",
    element: <AddProductsForm />,
    state: "categories",
  },
  {
    path: "/add-wholesalers",
    element: <AddWholesalers />,
    state: "wholesalers",
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
    path: "product-detail-admin",
    element: <ProductDetails_Form />,
    state: "product",
  },
  {
    path: "/product-list",
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
      icon: <BookmarksOutlinedIcon />,
    },
  },

  {
    path: "/permission",
    element: <PermissionPage />,
    state: "permission",
    sidebarProps: {
      displayText: "Settings",
      icon: <SettingsOutlinedIcon />,
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "bookings.index",
      },
      {
        path: "/permission/admin-management",
        element: <AdminManagement />,
        state: "bookings.currentbooking",
        sidebarProps: {
          displayText: "Admin Management",
        },
      },
      {
        path: "/permission/add-admin",
        element: <AddAdminForm />,
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
