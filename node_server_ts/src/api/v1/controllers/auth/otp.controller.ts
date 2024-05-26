// import { Request, Response } from "express";

// import axios from "axios";
// import { MESSAGE } from "../../../../constants/message";

// export const getOtp = async (req: Request, res: Response) => {
//   try {
//     const otp = Math.floor(1000 + Math.random() * 9000).toString();
//     const { phone_no } = req.body;
//     //added 91 + in frontend
//     // Prepare the request body for the external API
//     const requestBody = {
//       otp,
//     };

//     const response = await axios.post(
//       `https://control.msg91.com/api/v5/otp?template_id=65477be26a3a0637307969c1&mobile=${phone_no}&authkey=409386AGL9yWS2654773b2P1`,
//       requestBody
//     );

//     res
//       .status(response.status)
//       .json({ message: MESSAGE.post.succ, result: otp });
//   } catch (error) {
//     console.error("Error verifying OTP:", error);
//     res.status(400).json({ message: MESSAGE.post.fail });
//   }
// };

import { Request, Response } from "express";
import RetailerrModel from "../../../../models/customer.model";
import axios from "axios";
import { MESSAGE } from "../../../../constants/message";
import { generateOTP } from "../../../../services/generateOtp";
import WholeSalerEmployeeModel from "../../../../models/wholeSalerEmployee.model";

const apiUrl = "https://smsmassdata.massdata.xyz/api/sms/send";
const apiKey = "01840404003.a23cb6f2-cc90-4221-aaef-8f6f0aa4d641";
const type = "text";
const senderId = "8803590005376";

const default_profile_image_url =
  "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";

export const getOtp = async (req: Request, res: Response) => {
  const { phone_number } = req.query;
  try {
    // const userInstance = await WholeSalerEmployeeModel.findOne({ phone_number});
    // console.log("userInstance", userInstance);
    const otp = generateOTP();
    const generateMessage = () => {
      return `your OTP for BazarPay Wholesaler App is ${otp}, Do not share this OTP with anyone`;
    };
    const dynamicMessage = generateMessage();
    const employeeInstance: any = await WholeSalerEmployeeModel.findOne({phone_number});
    if (employeeInstance) {
      return res.status(404).json({
        message: MESSAGE.get.fail,
      });
    }
    const urlWithDynamicMessage = `${apiUrl}?apiKey=${apiKey}&type=${type}&contactNumbers=${
      "88" + phone_number
    }&senderId=${senderId}&textBody=${encodeURIComponent(dynamicMessage)}`;

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
    console.log("error");
  }
};

export const forgetPasswordOtp = async (req: Request, res: Response) => {
  const { phone_no } = req.query;
  try {
    const isUserExist = await RetailerrModel.findOne({ mobile: phone_no });
    if (!isUserExist) {
      return res.status(401).json({
        message: MESSAGE.get.custom("User Does Not Exists"),
      });
    }
    const otp = generateOTP();
    // Function to generate a dynamic message
    const generateMessage = () => {
      // Your message generation logic goes here
      return `your OTP for login in Muslim Matrimony is ${otp} `;
    };

    const dynamicMessage = generateMessage();
    const urlWithDynamicMessage = `${apiUrl}?apiKey=${apiKey}&type=${type}&contactNumbers=${
      "88" + phone_no
    }&senderId=${senderId}&textBody=${encodeURIComponent(dynamicMessage)}`;

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
    console.log(error);
  }
};
