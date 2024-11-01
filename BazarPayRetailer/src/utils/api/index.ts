import { Login, OtpLogin, createAdmin } from "./auth/login";
import { getLoginOtp, getOtp } from "./auth/otp";
import { SignUp } from "./auth/signUp";
import { getOrderHIstory, placeOrder, updateOrderStatus } from "./order/order";
import { getProductList, requestProduct } from "./products/Products";
import { getProductListBySearch } from "./products/searchedProducts";
import { getSubcategoryList } from "./subcategory/getSubcategory";
import { getWholesalerProductDetails } from "./wholesallerProduct/productDetaiils";
import { getWholesalerProductList } from "./wholesallerProduct/wholesalerProduct";

export const api = {
	auth: {
		SignUp,
		Login,
		getOtp,
		getLoginOtp
	},
	product: {
		getProductList,
		getWholesalerProductList,
		getWholesalerProductDetails,
		getProductListBySearch,
		requestProduct
	},
	subcategory: {
		getSubcategoryList
	},
	order:{
		placeOrder,
		getOrderHIstory,
		updateOrderStatus
	}

};
