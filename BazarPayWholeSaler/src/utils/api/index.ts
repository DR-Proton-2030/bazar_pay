import {  createAdmin, createWholesalerEmployee } from "./auth/wholesalerEmployee";
import { createWholesaler } from "./auth/signUp";
import { loginWholesaler } from "./auth/auth";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getOtp } from "./auth/otp.api";
import { createProduct } from "./product/addProduct";
import { getProductList } from "./product/getProduct";
import { updateProduct } from "./product/updateProduct";

export const api = {
	auth: {
		createWholesaler,
		createWholesalerEmployee,
		loginWholesaler,
		getOtp
	},
	product:{
		createProduct,
		getProductList,
		updateProduct
	}

};
