import { loginAdmin } from "./auth/loginAdmin";
import { getOtp } from "./auth/otpAdmin";
import {
  forwardEnqury,
  getBooking,
  getForwardEnquryList,
  updateEnquiryStatus,
} from "./booking/booking";
import { getBuilderByID } from "./wholesalers/getWholealerByID";
import { addWholesaler } from "./wholesalers/postWholesaler";
import { getCategory, getCategoryById } from "./category/getCategory";
import { createCategory, editCategory } from "./category/postCategory";
import { getCustomer } from "./customer/getCustomer";
import { getEmployeeList } from "./employee/getEmployee";
import { getOrderList } from "./order/order";
import { createAdmin } from "./permission/userManagement/createAdmin";
import { getBuilderList } from "./permission/userManagement/getBuilderList";
import { adminAssignProject } from "./products/assignProject";
import {
  getProductDetail,
  getProducts,
  updateProductStatus,
} from "./products/getProducts";
import { getWholesalerListedProducts } from "./products/wholesalersProducts";
import {
  createProductById,
  updateProduct,
} from "./productsByid/addProductById";
import { getProductbyId } from "./productsByid/getProductById";
import { getSubcategory } from "./subcategory/getSubcategory";
import { createSubcategory } from "./subcategory/postSubcategory";
import {
  deleteWholesaler,
  getWholesaler,
  updateWholesalerStatus,
} from "./wholesaler/WholeSaler";
import { createRetailer, getRetailers } from "./retailer/retailer.api";
import { deleteCategory } from "./category/category.api";
import { createBrand, getBrand, deleteBrand } from "./brand/brand.api";

export const api = {
  customer: {
    getCustomer,
  },
  retailer: {
    createRetailer,
    getRetailers,
  },
  wholesaler: {
    getWholesaler,
    addWholesaler,
    getBuilderByID,
    updateWholesalerStatus,
    deleteWholesaler,
  },
  admin: {
    createAdmin,
    adminAssignProject,
    getEmployeeList,
  },
  auth: {
    loginAdmin,
    getOtp,
  },
  permission: {
    getBuilderList: getBuilderList,
  },
  product: {
    getProducts,
    updateProductStatus,
    getWholesalerListedProducts,
    getProductDetail,
  },
  booking: {
    getBooking,
    forwardEnqury,
    getForwardEnquryList,
    updateEnquiryStatus,
  },
  category: {
    getCategory,
    createCategory,
    editCategory,
    getCategoryById,
    deleteCategory,
  },
  subcategory: {
    getSubcategory,
    createSubcategory,
  },
  brand: {
    getBrand,
    createBrand,
    deleteBrand,
  },
  productbyId: {
    getProductbyId,
    createProductById,
    updateProduct,
  },
  order: {
    getOrderList,
  },
};
