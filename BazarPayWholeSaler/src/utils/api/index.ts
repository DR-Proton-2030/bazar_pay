import {  createAdmin, createWholesalerEmployee } from "./auth/wholesalerEmployee";
import { createWholesaler } from "./auth/signUp";

export const api = {
	auth: {
		createWholesaler,
		createWholesalerEmployee
		
	},

};
