import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";

const { get } = request;

const initialRoute = "product";
export const getProductbyId = async (filterQuery: any) => {
  try {
    const endpoint = `${initialRoute}/get-paginated-products`;
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
