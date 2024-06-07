
import { request } from "../api";
import { MESSAGE } from "../../../constants/api/message";
import { headers } from "../../../config/config";
// import { AUTHORIZATION } from "../../../constants/api/auth";

const { get } = request;

const initialRoute = "history";
export const getScanHistoryForTeacher = async (filter: any) => {
	try {
		const endpoint = `${initialRoute}/allStudentScansForTeacher`;
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
