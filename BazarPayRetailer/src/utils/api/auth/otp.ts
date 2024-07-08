import { request } from "../api";
import { headers } from "../../../config/config";
import { MESSAGE } from "../../../constants/api/message";
import { AUTHORIZATION } from "../../../constants/api/auth";

const { get } = request;

const initialRoute = "retailer";

export const getOtp = async (filterQuery: any) => {
  try {
    const endpoint = `${initialRoute}/registerOtp-retailer`;

    const response = await get(
      endpoint,
      {
        ...headers,
      },
      filterQuery
    );
    if (response) {
      const {
        data: { message },
      } = response;
      if (message === MESSAGE.get.succ) {
        const {
          data: { result },
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
export const getLoginOtp = async (filterQuery: any) => {
  try {
    const endpoint = `${initialRoute}/loginOtp-retailer`;

    const response = await get(
      endpoint,
      {
        ...headers,
      },
      filterQuery
    );
    if (response) {
      const {
        data: { message },
      } = response;
      if (message === MESSAGE.get.succ) {
        const {
          data: { result,otp },
        } = response;
        return {result,otp};
      }
    }
    throw new Error();
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};
