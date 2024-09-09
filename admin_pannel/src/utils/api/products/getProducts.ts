import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";
import { Params, Payload } from "../../../@types/api/api.types";

const { get, patch } = request;

const initialRoute = "product";
export const getProducts = async (filter: Params) => {
  try {
    const endpoint = `${initialRoute}/get-paginated-products`;

    const response = await get(
      endpoint,
      {
        ...headers,
      },
      filter
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

export const updateProductStatus = async (payload: Payload) => {
  try {
    const endpoint = `${initialRoute}/update-product-status`;

    const response = await patch(endpoint, payload, {
      ...headers,
    });
    if (response) {
      const {
        data: { message },
      } = response;
      if (message === MESSAGE.patch.succ) {
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
