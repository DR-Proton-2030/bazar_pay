import { Login, OtpLogin, createAdmin } from "./auth/login";
import { getLoginOtp, getOtp } from "./auth/otp";
import { SignUp } from "./auth/signUp";
import { getOrderHIstory, placeOrder, updateOrderStatus } from "./order/order";
import { getProductList } from "./products/Products";
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
		getWholesalerProductDetails
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
