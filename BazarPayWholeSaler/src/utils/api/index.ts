import {  createAdmin, createWholesalerEmployee } from "./auth/wholesalerEmployee";
import { createWholesaler } from "./auth/signUp";
import { loginWholesaler } from "./auth/auth";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getOtp } from "./auth/otp.api";

export const api = {
	auth: {
		createWholesaler,
		createWholesalerEmployee,
		loginWholesaler,
		getOtp
	},

};
