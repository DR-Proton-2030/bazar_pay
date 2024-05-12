import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";
import { Params, Payload } from "../../../@types/api/api.types";

const { get,post,patch } = request;

const initialRoute = "bookings";
export const getBooking = async (filterQuery: any) => {
  try {
    const endpoint = `${initialRoute}/get-booking`;
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
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export const forwardEnqury = async(payload:Payload) =>{
  try {
    const endpoint = `${initialRoute}/forward-enqury`;
    const response = await post(
      endpoint,
      payload,
      {
        ...headers,
      }
    );
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
  } catch(error){
    console.log(error);
    throw error;
  }
}

export const getForwardEnquryList = async(filterQuery:Params) =>{
  try {
    const endpoint = `${initialRoute}/get-forward-enqury-list`;
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
          data: { result, pagination },
        } = response;
        return {result,pagination};
      }
    }
    throw new Error();
  } catch(error){
    console.log(error);
    throw error;
  }
}
export const updateEnquiryStatus = async(payload:Payload) =>{
  try {
    const endpoint = `${initialRoute}/update-enquiry-status`;
    const response = await patch(
      endpoint,
      payload,
      {
        ...headers,
      }
    );
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
  } catch(error){
    console.log(error);
    throw error;
  }
}
