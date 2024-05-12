import { Payload } from "../../../../@types/api/api.types";
import { headers } from "../../../../configs/config";
import { MESSAGE } from "../../../../constants/api/message";
import { request } from "../../api";

const { post } = request;

const initialRoute = "admin";

export const createAdmin = async (payload: Payload) => {
  try {
    const endpoint = `${initialRoute}/create-admin`;
    const response = await post(endpoint, payload, {
      ...headers,
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
    console.log(error);
    throw error;
  }
};
