import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";
import { Params, Payload } from "../../../@types/api/api.types";
import { request } from "../api";

const { post, get } = request;

const initialRoute = "auth";

export const getOtp = async (filterQuery: Params) => {
  try {
    const endpoint = `${initialRoute}/get-otp`;
    const response = await get(
      endpoint,
      {
        ...headers,
      },
      filterQuery
    );
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
