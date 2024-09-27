import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";

const { get, patch, del } = request;

const initialRoute = "wholesaler";
export const getWholesaler = async (filterQuery: any) => {
  try {
    const endpoint = `${initialRoute}/get-wholesaler`;
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

export const updateWholesalerStatus = async (payload: any) => {
  try {
    const endpoint = `${initialRoute}/update-wholesaler-status`;
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

export const deleteWholesaler = async (wholesalerId: string) => {
  try {
    const endpoint = `${initialRoute}/delete-wholesaler-by-id/${wholesalerId}`;
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
