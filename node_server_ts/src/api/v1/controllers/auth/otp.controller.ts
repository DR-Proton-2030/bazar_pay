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

const apiUrl = "https://smsmassdata.massdata.xyz/api/sms/send";
const apiKey = "01866049600.ab4b8829-0375-4048-bb33-eddfb739c58e";
const type = "text";
const senderId = "8809612440728";

const default_profile_image_url =
  "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";

export const getOtp = async (req: Request, res: Response) => {
  const { phone_no } = req.body;
  try {
    const userInstance = await RetailerrModel.findOne({ mobile: phone_no });
    console.log("userInstance", userInstance);
    if (userInstance) {
      if (userInstance.profilePhoto !== default_profile_image_url) {
        return res.status(409).json({
          message: MESSAGE.get.custom("User Exists"),
        });
      } else {
        await RetailerrModel.deleteOne({ mobile: phone_no });
      }
    }
    const otp = generateOTP();
    const generateMessage = () => {
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
