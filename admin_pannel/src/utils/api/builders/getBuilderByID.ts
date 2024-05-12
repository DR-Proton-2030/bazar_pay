import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";

const { get } = request;

const initialRoute = "builder";
export const getBuilderByID = async (builder_id: string | null) => {
  try {
    if (!builder_id) {
      throw new Error("Builder ID is required.");
    }
    const endpoint = `${initialRoute}/get-builder-by-id?builder_id=${builder_id}`;
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
