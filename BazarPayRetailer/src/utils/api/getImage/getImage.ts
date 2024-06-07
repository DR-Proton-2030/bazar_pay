import { request } from "../api";
import { MESSAGE } from "../../../constants/api/message";
import { headers } from "../../../config/config";
// import { AUTHORIZATION } from "../../../constants/api/auth";

const { post, patch, get } = request;

const initialRoute = "app";

export const getComplaintsImage = async (filter: any) => {
	try {
		const endpoint = `${initialRoute}/get-image`;
		// const token = localStorage.getItem("@jwt");
		const response = await get(
			endpoint,
			{
				...headers
			},
			filter
		);
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
