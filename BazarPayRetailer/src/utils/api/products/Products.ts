import { request } from "../api";
import { headers } from "../../../config/config";
import { MESSAGE } from "../../../constants/api/message";
import { AUTHORIZATION } from "../../../constants/api/auth";
import { Params } from "../../../@types/api/api.types";

const { get ,post} = request;

const initialRoute = "product";


export const getProductList = async (filterQuery:Params) => {
    try {
      const endpoint = `${initialRoute}/get-paginated-products`;
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

  
  export const requestProduct = async (formdata: any) => {
    try {
      const endpoint = `products/request_product`;
  
      const response = await post(endpoint, formdata, {
        ...headers,
        "Content-Type": "multipart/form-data"
      });
      if (response) {
        const {
          data: { message }
        } = response;
        if (message === MESSAGE.post.succ) {
          const {
            data: { result }
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