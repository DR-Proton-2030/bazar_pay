import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";
import { Payload } from "../../../@types/api/api.types";

const { get, post, del } = request;

const initialRoute = "brands";
export const getBrand = async (filterQuery: any) => {
  try {
    const endpoint = `${initialRoute}/get-brand-list`;
    const response = await get(
      endpoint,
      {
        ...headers,
      },
      filterQuery,
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

export const createBrand = async (payload: Payload) => {
  try {
    const endpoint = `${initialRoute}/create-brand`;
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

export const deleteBrand = async (brandId: string) => {
  try {
    const endpoint = `${initialRoute}/delete-brand-by-id/${brandId}`;
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
