import { request } from "../api";
import { headers } from "../../../configs/config";
import { MESSAGE } from "../../../constants/api/message";
import { Payload } from "../../../@types/api/api.types";

const { post } = request;

const initialRoute = "auth";

export const loginAdmin = async (payload: Payload) => {
  try {
    const endpoint = `${initialRoute}/login-admin`;
    const response = await post(endpoint, payload, {
      ...headers,
    });
    if (response) {
      const {
        data: { message },
      } = response;
      if (message === MESSAGE.post.succAuth) {
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
// import { request } from "../api";
// import { headers } from "../../../configs/config";
// import { MESSAGE } from "../../../constants/api/message";
// import { Payload } from "../../../@types/api/api.types";

// const { post } = request;

// const initialRoute = "auth";

// export const loginAdmin = async (payload: Payload) => {
//   try {
//     const endpoint = `${initialRoute}/login-admin`;
//     const response = await post(endpoint, payload, {
//       ...headers,
//     });

//     if (response?.status === 200) {
//       const { message, result } = response.data;

//       if (message === MESSAGE.post.succAuth) {
//         return result; // Return the result
//       } else {
//         throw new Error("Login failed");
//       }
//     }
//     throw new Error();
//   } catch (error: any) {
//     console.error("Error while login:", error);
//     throw error;
//   }
// };
// @builder-admin
