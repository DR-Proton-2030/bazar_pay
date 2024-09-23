import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";
import { Payload } from "../../../@types/api/api.types";

const { post ,patch} = request;

const initialRoute = "category";

export const createCategory = async (payload: Payload) => {
  try {
    const endpoint = `${initialRoute}/create-category`;
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
    console.log(error);
    throw error;
  }
};

export const editCategory = async (payload: Payload) => {
  try {
    const endpoint = `${initialRoute}/edit-category`;
    const response = await patch(endpoint, payload, {
      ...headers,
      "Content-Type": "multipart/form-data",
    });
    if (response) {
      const {
        data: { message },
      } = response;
      if (message === MESSAGE.patch.succ) {
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

const { get } = request;


export const getCategory = async (filterQuery: any) => {
  try {
    const endpoint = `${initialRoute}/get-category-list`;
    const response = await get(
      endpoint,
      {
        ...headers,
      },
      filterQuery,
      
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

export const getCategoryById = async (filterQuery: any) => {
  try {
    const endpoint = `${initialRoute}/get-category-byId`;
    const response = await get(
      endpoint,
      {
        ...headers,
      },
      filterQuery,
      
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

const {del} = request;
export const deleteCategory = async (categoryId: string) => {
    try {
      const endpoint = `${initialRoute}/delete-category/${categoryId}`;
      const response = await del(endpoint,{
        ...headers,
        
      });
      if (response) {
        const {
          data: { message },
        } = response;
        if (message === MESSAGE.delete.succ) {
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