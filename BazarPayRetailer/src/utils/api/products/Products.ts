import { request } from "../api";
import { headers } from "../../../config/config";
import { MESSAGE } from "../../../constants/api/message";
import { AUTHORIZATION } from "../../../constants/api/auth";
import { Params } from "../../../@types/api/api.types";

const { get } = request;

const initialRoute = "product";


export const getProductList = async (filterQuery:Params) => {
    try {
      const endpoint = `${initialRoute}/get-product-list`;
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
            data: { result,pagination },
          } = response;
          return {result,pagination};
        }
      }
      throw new Error();
    } catch (error: unknown) {
      console.log(error);
      throw error;
    }
  };
  