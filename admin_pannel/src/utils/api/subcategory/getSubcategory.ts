import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";

const { get } = request;

const initialRoute = "subcategory";
export const getSubcategory = async (filterQuery: any) => {
  try {
    const endpoint = `${initialRoute}/get-paginated-subcategories`;
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
