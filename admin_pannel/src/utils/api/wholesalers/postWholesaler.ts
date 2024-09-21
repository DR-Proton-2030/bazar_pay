import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";
import { Payload } from "../../../@types/api/api.types";

const { post } = request;

const initialRoute = "wholesaler";

export const addWholesaler = async (payload: Payload) => {
  try {
    const endpoint = `${initialRoute}/add-wholesaler`;
    const response = await post(endpoint, payload, {
      ...headers,
      "Content-Type": "multipart/form-data",
    });
    if (response) {
      const {
        data: { message },
      } = response;
      if (message === MESSAGE.post.succ) {
        const {
          data: { result },
        } = response;
        return result;
      }
    }
    throw new Error();
  } catch (error: any) {
    console.log("===>error", error);
    if (error.response.status === 409) {
      alert("Wholesaler with this trade licensce already exists");
    }
    throw error;
  }
};
