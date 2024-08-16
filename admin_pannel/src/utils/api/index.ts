import { loginAdmin } from "./auth/loginAdmin";
import { getOtp } from "./auth/otpAdmin";
import {
  forwardEnqury,
  getBooking,
  getForwardEnquryList,
  updateEnquiryStatus,
} from "./booking/booking";
import { getBrand } from "./brand/getBrand";
import { createBrand } from "./brand/postBrand";
import { getBuilder } from "./builders/getBuilder";
import { getBuilderByID } from "./builders/getBuilderByID";
import { addBuilder } from "./builders/postBuilder";
import { getCategory } from "./category/getCategory";
import { createCategory } from "./category/postCategory";
import { getCustomer } from "./customer/getCustomer";
import { getEmployeeList } from "./employee/getEmployee";
import { getOrderList } from "./order/order";
import { createAdmin } from "./permission/userManagement/createAdmin";
import { getBuilderList } from "./permission/userManagement/getBuilderList";
import { adminAssignProject } from "./products/assignProject";
import {
  getAdminPlots,
  getAssignedProjectList,
  getProjectDetails,
} from "./products/getAdminProjects";
import { getProducts, updateProductStatus } from "./products/getProducts";
import { updatePlotPostion } from "./products/updatePlotPosition";
import { getWholesalerListedProducts } from "./products/wholesalersProducts";
import { createProductById } from "./productsByid/addProductById";
import { getProductbyId } from "./productsByid/getProductById";
import { getSubcategory } from "./subcategory/getSubcategory";
import { createSubcategory } from "./subcategory/postSubcategory";
import { getWholesaler, updateWholesalerStatus } from "./wholesaler/WholeSaler";

export const api = {
  customer: {
    getCustomer,
  },
  builder: {
    getBuilder,
    addBuilder,
    getBuilderByID,
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
    getWholesalerListedProducts
  },
  booking: {
    getBooking,
    forwardEnqury,
    getForwardEnquryList,
    updateEnquiryStatus,
  },
  wholesaler: {
    getWholesaler,
    updateWholesalerStatus,
  },
  category: {
    getCategory,
    createCategory
  },
  subcategory: {
getSubcategory,
createSubcategory
  },
  brand: {
    getBrand,
    createBrand
  },
  productbyId:{
    getProductbyId,
    createProductById
  },
  order:{
    getOrderList
  }
};
