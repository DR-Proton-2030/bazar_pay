import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import WholesalerModel from "../../../../models/wholesaler.model";

export const getOtpForSignup = async (req: Request, res: Response) => {
	try {
		const { phone } = req.query;
		const existingWholesaler = await WholesalerModel.findOne({ owner_phone: phone });
		if (existingWholesaler) {
			return res.status(409).json({
				message: MESSAGE.custom("Account Exist with Same Number")
			});
		}
		const otp = "1234";
		return res.status(200).json({
			message: MESSAGE.get.succ,
			result: otp
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.get.fail
		});
	}
};
export const getOtpForLogin = async (req: Request, res: Response) => {
	try {

		const { phone } = req.query;
		const existingWholesaler = await WholesalerModel.findOne({ owner_phone: phone });

		const otp = "1234";
		if (existingWholesaler) {
			return res.status(200).json({
				message: MESSAGE.get.succ,
				otp: otp,
				result: existingWholesaler
			});
		}
		return res.status(404).json({
			message: MESSAGE.get.fail,
		});

	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.get.fail
		});
	}
};
