import { request } from "../api";
import { headers } from "../../../config/config";
import { MESSAGE } from "../../../constants/api/message";
import { Params } from "../../../@types/api/api.types";

const { get,post } = request;

const initialRoute = "wholesaler";

export const createInventory = async (payload: any) => {
	try {
		const endpoint = `${initialRoute}/create-inventory`;

		const response = await post(endpoint, payload, {
			...headers
		});
		if (response) {
			const {
				data: { message }
			} = response;
			if ( message === MESSAGE.post.succ) {
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

export const getInventoryList = async (filterQuery: any) => {
    try {
      const endpoint = `${initialRoute}/get-inventory`;
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