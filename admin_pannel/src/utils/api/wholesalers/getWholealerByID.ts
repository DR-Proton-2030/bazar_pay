import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";

const { get } = request;

const initialRoute = "wholesaler";
export const getBuilderByID = async (wholesaler_id: string | null) => {
  try {
    if (!wholesaler_id) {
      throw new Error("Wholesaler ID is required.");
    }
    const endpoint = `${initialRoute}/get-wholesaler-by-id?wholesaler_id=${wholesaler_id}`;
    const response = await get(endpoint, {
      ...headers,
    });
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
    throw new Error("Failed to fetch builder by ID.");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
