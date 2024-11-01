import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import { verifyPassword } from "../../../../services/verifyPassword";
import AdminModel from "../../../../models/admin.model";
import WholesalerModel from "../../../../models/wholesaler.model";

export const loginWholesaler = async (req: Request, res: Response) => {
	try {
		const { phone_number, password } = req.body;
		console.log("==>", phone_number, password);

		const employeeInstance: any = await WholesalerModel.findOne({ phone_number }).populate("wholesaler");
		// console.log("===>", employeeInstance);

		if (!employeeInstance) {
			return res.status(404).json({
				message: MESSAGE.post.failAuth
			});
		}

		const verify = await verifyPassword(password, employeeInstance.password);

		if (verify) {
			const wholesaler = employeeInstance.wholesaler;
			delete employeeInstance.wholesaler;
			return res.status(200).json({
				message: MESSAGE.post.succAuth,
				result: {
					user: employeeInstance,
					wholesaler
				}
			});
		}
		console.log("===>not found");
		return res.status(404).json({
			message: MESSAGE.post.failAuth
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.post.fail,
			error
		});
	}
};

export const loginAdmin = async (req: Request, res: Response) => {
	try {
		const { userId, password } = req.body;
		const filterQuery = userId.includes("@") ? { email: userId } : { phone_number: userId };
		console.log("===>filter", filterQuery);
		const adminInstance = await AdminModel.findOne(filterQuery);
		if (!adminInstance) {
			return res.status(404).json({
				message: MESSAGE.post.failAuth
			});
		}
		const verify = await verifyPassword(password, adminInstance.password);
		if (verify) {
			return res.status(200).json({
				message: MESSAGE.post.succAuth,
				result: adminInstance
			});
		}
		return res.status(404).json({
			message: MESSAGE.post.failAuth
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.post.fail,
			error
		});
	}
};
