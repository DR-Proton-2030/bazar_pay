import { request } from "../api";
import { headers } from "../../../config/config";
import { MESSAGE } from "../../../constants/api/message";
import { AUTHORIZATION } from "../../../constants/api/auth";
import { Params } from "../../../@types/api/api.types";

const { get } = request;

const initialRoute = "subcategory";


export const getSubcategoryList = async () => {
    try {
      const endpoint = `${initialRoute}/get-aggregated-subcategory`;
      const response = await get(
        endpoint,
        {
          ...headers,
        },
        
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
  