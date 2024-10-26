import {
  createAdmin,
  createWholesalerEmployee,
} from "./auth/wholesalerEmployee";
import { createWholesaler } from "./auth/signUp";
import { loginWholesaler } from "./auth/auth";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getLoginOtp, getOtp } from "./auth/otp.api";
import { createProduct } from "./product/addProduct";
import { getProductList } from "./product/getProduct";
import { updateProduct } from "./product/updateProduct";
import { createCategory, getCategoryList } from "./category/category";
import { createSubCategory, getSubategoryList } from "./subcategory/subcategory";
import { createBrand, getBrandList } from "./brands/brand";
import { WholesalerUploadProduct } from "./wholesalerListedProducts/wholesalerListedProducts";
import { getOrderList, updateOrderStatus } from "./order/order";
import { getWholesalerListedProducts, getWholesalerStockListedProducts } from "./wholesalerListedProducts/getWholesaleListedProduct";
import { getByAnyProduct } from "./product/searchByProduct";

export const api = {
  auth: {
    createWholesaler,
    createWholesalerEmployee,
    loginWholesaler,
    getOtp,
    getLoginOtp,
  },
  product: {
    createProduct,
    getProductList,
    updateProduct,
    getByAnyProduct
  },
  category: {
    getCategoryList,
    createCategory,
  },
  subcategory: {
    getSubategoryList,
    createSubCategory,
  },
  brands: {
    getBrandList,
    createBrand,
  },
  wholesaler: {
    WholesalerUploadProduct,
  },
  wholesalerListedProducts: {
    getWholesalerListedProducts,
    getWholesalerStockListedProducts
  },
  order: {
    getOrderList,
    updateOrderStatus,
  },
};
