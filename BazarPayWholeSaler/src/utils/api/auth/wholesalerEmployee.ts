import { request } from "../api";
import { headers } from "../../../config/config";
import { MESSAGE } from "../../../constants/api/message";
import { AUTHORIZATION } from "../../../constants/api/auth";

const { post } = request;

const initialRoute = "wholesaler-employee";

export const createWholesalerEmployee = async (payload: any) => {
	try {
		const endpoint = `${initialRoute}/create-wholesaler-emloyee`;
		const response = await post(endpoint, payload, {
			...headers
		});
		if (response) {
			const {
				data: { message }
			} = response;
			if (message === MESSAGE.post.succ) {
				const {
					data: { result }
				} = response;
				return result;
			}
		}
		throw new Error();
	} catch (error: any) {
		console.log(error);
		throw error;
	}
};
export const createAdmin = async (payload: any) => {
	try {
		const endpoint = `${initialRoute}/create-admin`;
		const response = await post(endpoint, payload, {
			...headers
		});
		if (response) {
			const {
				data: { message }
			} = response;
			if (message === MESSAGE.post.succ) {
				const {
					data: { result }
				} = response;
				return result;
			}
		}
		throw new Error();
	} catch (error: any) {
		console.log(error);
		throw error;
	}
};
