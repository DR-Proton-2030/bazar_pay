import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";

const { get } = request;

const initialRoute = "project";
export const getPlots = async (page: number) => {
  try {
    const endpoint = `${initialRoute}/get-project?page=${page}`;

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
    throw new Error();
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export const getAllProjects = async (filter: any) => {
  try {
    const endpoint = `${initialRoute}/get-all-project-id-list`;

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
