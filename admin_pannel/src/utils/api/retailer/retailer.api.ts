import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";
import { Params, Payload } from "../../../@types/api/api.types";

const { post, del } = request;

const initialRoute = "retailer";

export const createRetailer = async (payload: Payload) => {
  try {
    const endpoint = `${initialRoute}/add-retailer`;
    const response = await post(endpoint, payload, {
      ...headers,
      "Content-Type": "multipart/form-data",
    });
    if (response) {
      const {
        data: { message },
      } = response;
      if (message === MESSAGE.post.succ) {
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

export const getRetailers = async (params: Params) => {
  try {
    const endpoint = `${initialRoute}/get-retailer`;
    const response = await request.get(
      endpoint,
      {
        ...headers,
      },
      params,
      "API_GATEWAY"
    );
    if (response) {
      const {
        data: { message },
      } = response;
      if (message === MESSAGE.get.succ) {
        const {
          data: { result, pagination },
        } = response;
        return { result, pagination };
      }
    }
    throw new Error();
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export const deleteRetailer = async (retailerId: string) => {
  try {
    const endpoint = `${initialRoute}/delete-retailer-by-id/${retailerId}`;
    const response = await del(endpoint, {
      ...headers,
    });
    if (response) {
      const {
        data: { message },
      } = response;
      if (message === MESSAGE.delete.succ) {
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
