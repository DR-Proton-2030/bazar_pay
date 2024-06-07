import { request } from "../api";
import { MESSAGE } from "../../../constants/api/message";
import { headers } from "../../../config/config";
// import { AUTHORIZATION } from "../../../constants/api/auth";

const { post, patch, get } = request;

const initialRoute = "app";
export const PostFeed = async (formdata: any) => {
	try {
		const endpoint = `${initialRoute}/upload-feed`;
		// const token = localStorage.getItem("@jwt");
		const response = await post(endpoint, formdata, {
			...headers,
			"Content-Type": "multipart/form-data"
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

export const getFeeds = async () => {
	try {
		const endpoint = `${initialRoute}/getAll-feed`;
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
