import { request } from "../api";
import { headers } from "../../../config/config";
import { MESSAGE } from "../../../constants/api/message";

const { patch } = request;

const initialRoute = "product";

export const updateProduct = async (formdata: any) => {
	try {
		const endpoint = `${initialRoute}/update_product`;

		const response = await patch(endpoint, formdata, {
			...headers,
			"Content-Type": "multipart/form-data"
		});
		if (response) {
			const {
				data: { message }
			} = response;
			if (message === MESSAGE.patch.succ) {
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