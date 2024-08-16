import { request } from "../api";
import { headers } from "../../../config/config";
import { MESSAGE } from "../../../constants/api/message";
import { AUTHORIZATION } from "../../../constants/api/auth";
import { Params } from "../../../@types/api/api.types";

const { get,patch } = request;

const initialRoute = "order";


export const getOrderList = async (filterQuery:Params) => {
    try {
      const endpoint = `${initialRoute}/get-order`;
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
    } catch (error: unknown) {
      console.log(error);
      throw error;
    }
  };
  
export const updateOrderStatus = async (payload: any) => {
    try {
      const endpoint = `${initialRoute}/update-order-status`;
      const response = await patch(
        endpoint,
        payload,
        {
          ...headers,
        },
      );
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
    } catch (error: unknown) {
      console.log(error);
      throw error;
    }
  };
  