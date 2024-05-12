import { request } from "../../api";
import { headers } from "../../../../configs/config";
import { MESSAGE } from "../../../../constants/api/message";

const { get } = request;

const initialRoute = "builder";
export const getBuilderList = async (filterQuery: any) => {
  try {
    const endpoint = `${initialRoute}/get-builder-list`;
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
