import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";
import { Payload } from "../../../@types/api/api.types";

const { post } = request;

const initialRoute = "admin";

export const createAdmin = async (payload: Payload) => {
  try {
    const endpoint = `${initialRoute}/create-admin`;
    const response = await post(endpoint, payload, {
      ...headers,
    });

    if (response?.status === 200) {
      const { message, result } = response.data;

      if (message === MESSAGE.post.succAuth) {
        return result; // Return the result
      } else {
        throw new Error("Login failed");
      }
    }
    throw new Error();
  } catch (error: any) {
    console.error("Error while login:", error);
    throw error;
  }
};


