import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";
import { Payload } from "../../../@types/api/api.types";
import { request } from "../api";

const { post } = request;

const initialRoute = "auth";

export const getOtp = async (payload: Payload) => {
  try {
    const endpoint = `${initialRoute}/getOtp`;
    const response = await post(endpoint, payload, {
      ...headers,
    });
    if (response?.status === 200) {
      const { result } = response.data;
      return result;
    } else {
      throw new Error("Failed to get OTP");
    }
    // throw new Error();
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};
