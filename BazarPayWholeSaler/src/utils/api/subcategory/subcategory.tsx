import { headers } from "../../../config/config";
import { MESSAGE } from "../../../constants/api/message";
import { AUTHORIZATION } from "../../../constants/api/auth";
import { Params } from "../../../@types/api/api.types";
import { request } from "../api";

const { get } = request;

const initialRoute = "subcategory";


export const getSubategoryList = async (filterQuery:any) => {
    try {
      const endpoint = `${initialRoute}/get-subcategory-with-filter`;
      const response = await get(
        endpoint,
        {
          ...headers,
        },
        filterQuery
      );
      if (response) {
        const {
          data: { message }
        } = response;
        if (message === MESSAGE.get.succ) {
          const {
            data: { result }
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
  