import { Request, Response } from "express";

import axios from "axios";
import { MESSAGE } from "../../../../constants/message";

export const getOtp = async (req: Request, res: Response) => {
  try {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const { phone_no } = req.body;

    // Prepare the request body for the external API
    const requestBody = {
      otp,
    };

    const response = await axios.post(
      `https://control.msg91.com/api/v5/otp?template_id=65477be26a3a0637307969c1&mobile=${phone_no}&authkey=409386AGL9yWS2654773b2P1`,
      requestBody
    );

    res
      .status(response.status)
      .json({ message: MESSAGE.post.succ, result: otp });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(400).json({ message: MESSAGE.post.fail });
  }
};
