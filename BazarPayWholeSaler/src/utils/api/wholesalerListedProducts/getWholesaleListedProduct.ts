import { request } from "../api";
import { headers } from "../../../config/config";
import { MESSAGE } from "../../../constants/api/message";
import { Params } from "../../../@types/api/api.types";

const { get } = request;

const initialRoute = "wholesaler-listed-product";

export const getWholesalerListedProducts = async (filter: Params) => {
  try {
    const endpoint = `${initialRoute}/get-all-wholesaler-listed-product`;

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
