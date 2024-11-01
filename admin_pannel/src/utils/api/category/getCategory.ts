import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";

const { get } = request;

const initialRoute = "category";
export const getCategory = async (filterQuery: any) => {
  try {
    const endpoint = `${initialRoute}/get-category-list`;
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

export const getCategoryById = async (filterQuery: any) => {
  try {
    const endpoint = `${initialRoute}/get-category-byId`;
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
