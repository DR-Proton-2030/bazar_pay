import {  createAdmin, createWholesalerEmployee } from "./auth/wholesalerEmployee";
import { createWholesaler } from "./auth/signUp";
import { loginWholesaler } from "./auth/auth";

export const api = {
	auth: {
		createWholesaler,
		createWholesalerEmployee,
		loginWholesaler
	},

};
