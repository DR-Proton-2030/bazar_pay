import { request } from "../api";
import { headers } from "../../../config/config";
import { MESSAGE } from "../../../constants/api/message";
import { AUTHORIZATION } from "../../../constants/api/auth";

const { post } = request;

const initialRoute = "wholesaler";

export const WholesalerUploadProduct = async (payload: any) => {
	try {
		const endpoint = `${initialRoute}/upload-product`;

		const response = await post(endpoint, payload, {
			...headers
		});
		if (response) {
			const {
				data: { message }
			} = response;
			if ( message === MESSAGE.post.succ) {
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