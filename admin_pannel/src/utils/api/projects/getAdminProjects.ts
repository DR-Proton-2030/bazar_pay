import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";
import { Params } from "../../../@types/api/api.types";

const { get } = request;

const initialRoute = "project";
export const getAdminPlots = async (page: number, builderId: string) => {
  try {
    const endpoint = `${initialRoute}/get-project?page=${page}&builder_object_id=${builderId}`;

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

export const getProjectDetails = async (fiterQuery: Params) => {
  try {
    const endpoint = `${initialRoute}/get-project-details`;
    const response = await get(
      endpoint,
      {
        ...headers,
      },
      fiterQuery
    );
    if (response) {
      const {
        data: { message },
      } = response;
      if (message === MESSAGE.get.succ) {
        const {
          data: { result },
        } = response;
        return result[0];
      }
    }
    throw new Error();
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};

export const getAssignedProjectList = async (filter: any) => {
  try {
    const endpoint = `${initialRoute}/get-assign-project`;
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
