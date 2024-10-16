import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";
import { Payload } from "../../../@types/api/api.types";





const {del} = request;

const initialRoute = "products";

export const deleteProductById = async (productId: string) => {
    try {
      const endpoint = `${initialRoute}/delete-product-by-id?productId=${productId}`;
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
  