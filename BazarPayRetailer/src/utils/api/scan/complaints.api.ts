import { request } from "../api";
import { MESSAGE } from "../../../constants/api/message";
import { headers } from "../../../config/config";
// import { AUTHORIZATION } from "../../../constants/api/auth";

const { post, patch, get } = request;

const initialRoute = "app";
export const PostComplaints = async (formdata: any) => {
	try {
		const endpoint = `${initialRoute}/create-complaints`;
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
export const PostResolution = async (formdata: any) => {
	try {
		const endpoint = `${initialRoute}/create-resolution`;
		// const token = localStorage.getItem("@jwt");
		const response = await patch(endpoint, formdata, {
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

export const assignComplaint = async (payload: any) => {
	try {
		const endpoint = `${initialRoute}/assign-complaints`;
		const response = await patch(endpoint, payload, {
			...headers
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

export const getComplaints = async () => {
	try {
		const endpoint = `${initialRoute}/get-all-complaints`;
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
