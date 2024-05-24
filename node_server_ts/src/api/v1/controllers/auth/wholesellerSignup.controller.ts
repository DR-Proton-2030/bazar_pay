
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
