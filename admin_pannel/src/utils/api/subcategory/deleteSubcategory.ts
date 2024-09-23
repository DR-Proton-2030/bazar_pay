import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";


const { del } = request;

const initialRoute = "subcategory";
export const deleteSubcategory = async (subcategoryId: string) => {
    try {
      const endpoint = `${initialRoute}/delete-subcategory-by-id/${subcategoryId}`;
      const response = await del(endpoint, {
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
  