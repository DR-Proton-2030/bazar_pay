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
import { getCategoryList } from "./category/category";
import { getSubategoryList } from "./subcategory/subcategory";
import { getBrandList } from "./brands/brand";
import { WholesalerUploadProduct } from "./wholesalerListedProducts/wholesalerListedProducts";
import { getOrderList, updateOrderStatus } from "./order/order";
import { getWholesalerListedProducts } from "./wholesalerListedProducts/getWholesaleListedProduct";
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
  },
  subcategory: {
    getSubategoryList,
  },
  brands: {
    getBrandList,
  },
  wholesaler: {
    WholesalerUploadProduct,
  },
  wholesalerListedProducts: {
    getWholesalerListedProducts,
  },
  order: {
    getOrderList,
    updateOrderStatus,
  },
};
