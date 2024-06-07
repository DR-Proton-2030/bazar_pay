import { request } from "../api";
import { headers } from "../../../config/config";
import { MESSAGE } from "../../../constants/api/message";
import { AUTHORIZATION } from "../../../constants/api/auth";

const { get } = request;

const initialRoute = "app";

export const getDepartments = async () => {
	try {
		const endpoint = `${initialRoute}/getAll-department`;
		// const token = localStorage.getItem("@jwt");
		const response = await get(endpoint, {
			...headers
		});
		if (response) {
			const {
				data: { message }
			} = response;
			if (message === MESSAGE.get.succ) {
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
