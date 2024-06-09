import { Request, Response } from "express";
import axios from "axios";
import { MESSAGE } from "../../../../constants/message";
import { generateOTP } from "../../../../services/generateOtp";
import WholeSalerEmployeeModel from "../../../../models/wholeSalerEmployee.model";
import {
  msg_apiKey,
  msg_apiUrl,
  msg_senderId,
  msg_type,
} from "../../../../config/config";
import retailerModel from "../../../../models/retailer.model";

export const getOtp = async (req: Request, res: Response) => {
  const { phone_number } = req.query;
  try {
    // const userInstance = await WholeSalerEmployeeModel.findOne({ phone_number});
    // console.log("userInstance", userInstance);
    const employeeInstance: any = await WholeSalerEmployeeModel.findOne({
      phone_number,
    });
    if (employeeInstance) {
      return res.status(404).json({
        message: MESSAGE.get.fail,
      });
    }
    const otp = generateOTP();
    const generateMessage = () => {
      return `your OTP for BazarPay Wholesaler App is ${otp}, Do not share this OTP with anyone`;
    };
    const dynamicMessage = generateMessage();

    const urlWithDynamicMessage = `${msg_apiUrl}?apiKey=${msg_apiKey}&type=${msg_type}&contactNumbers=${
      phone_number?.length === 10 ? "880" + phone_number : phone_number
    }&senderId=${msg_senderId}&textBody=${encodeURIComponent(dynamicMessage)}`;

    console.log("===>", urlWithDynamicMessage);

    axios
      .get(urlWithDynamicMessage)
      .then((response: { data: any }) => {
        console.log(response);
        return res.status(200).json({
          message: MESSAGE.get.succ,
          result: otp,
        });
      })
      .catch((error: { message: any }) => {
        return res.status(400).json({
          message: MESSAGE.get.fail,
          result: error,
        });
      });
  } catch (error) {
    console.log("error", error);
  }
};
export const getOtpForRetailer = async (req: Request, res: Response) => {
  const { phone_number } = req.query;
  try {

    const employeeInstance: any = await retailerModel.findOne({
      contact_phone_number:  phone_number,
    });
    if (employeeInstance) {
      return res.status(404).json({
        message: MESSAGE.get.fail,
      });
    }
    const otp = generateOTP();
    const generateMessage = () => {
      return `your OTP for BazarPay Retailer App is ${otp}, Do not share this OTP with anyone`;
    };
    const dynamicMessage = generateMessage();

    const urlWithDynamicMessage = `${msg_apiUrl}?apiKey=${msg_apiKey}&type=${msg_type}&contactNumbers=${
      phone_number?.length === 10 ? "880" + phone_number : phone_number
    }&senderId=${msg_senderId}&textBody=${encodeURIComponent(dynamicMessage)}`;

    console.log("===>", urlWithDynamicMessage);

    axios
      .get(urlWithDynamicMessage)
      .then((response: { data: any }) => {
        console.log(response);
        return res.status(200).json({
          message: MESSAGE.get.succ,
          result: otp,
        });
      })
      .catch((error: { message: any }) => {
        return res.status(400).json({
          message: MESSAGE.get.fail,
          result: error,
        });
      });
  } catch (error) {
    console.log("error", error);
  }
};

// export const forgetPasswordOtp = async (req: Request, res: Response) => {
//   const { phone_no } = req.query;
//   try {
//     const isUserExist = await RetailerrModel.findOne({ mobile: phone_no });
//     if (!isUserExist) {
//       return res.status(401).json({
//         message: MESSAGE.get.custom("User Does Not Exists"),
//       });
//     }
//     const otp = generateOTP();
//     // Function to generate a dynamic message
//     const generateMessage = () => {
//       // Your message generation logic goes here
//       return `your OTP for login in Muslim Matrimony is ${otp} `;
//     };

//     const dynamicMessage = generateMessage();
//     const urlWithDynamicMessage = `${apiUrl}?apiKey=${apiKey}&type=${type}&contactNumbers=${
//       "88" + phone_no
//     }&senderId=${senderId}&textBody=${encodeURIComponent(dynamicMessage)}`;

//     axios
//       .get(urlWithDynamicMessage)
//       .then((response: { data: any }) => {
//         console.log(response);
//         return res.status(200).json({
//           message: MESSAGE.get.succ,
//           result: otp,
//         });
//       })
//       .catch((error: { message: any }) => {
//         return res.status(400).json({
//           message: MESSAGE.get.fail,
//           result: error,
//         });
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };
