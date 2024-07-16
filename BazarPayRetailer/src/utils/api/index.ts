import { Login, OtpLogin, createAdmin } from "./auth/login";
import { getLoginOtp, getOtp } from "./auth/otp";
import { SignUp } from "./auth/signUp";
import { getProductList } from "./products/Products";
import { getSubcategoryList } from "./subcategory/getSubcategory";
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
		getWholesalerProductList
	},
	subcategory: {
		getSubcategoryList
	}

};
