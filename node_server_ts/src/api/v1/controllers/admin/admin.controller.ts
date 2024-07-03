import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import AdminModel from "../../../../models/admin.model";
import { MESSAGE } from "../../../../constants/message";

export const createAdmin = async (req: Request, res: Response) => {
	try {
		const userDetails = req.body;
		const adminInstance = await AdminModel.findOne({ phone_number: userDetails.phone_number });
		if (adminInstance) {
			return res.status(409).json({
				message: MESSAGE.post.sameEntry
			});
		}
		bcrypt.hash(userDetails.password, 10, async (err, hash) => {
			if (err) {
				console.error("Error hashing password:", err);
			} else {
				const userInstance = await new AdminModel({ ...userDetails, password: hash }).save();
				if (userInstance) {
					return res.status(200).send({
						message: MESSAGE.post.succ,
						result: userInstance
					});
				}
			}
		});
	} catch (error) {
		console.log("error", error);
		res.status(400).json({
			message: MESSAGE.post.fail,
			error
		});
	}
};

export const getEmployeeList = async (req: Request, res: Response) => {
	try {
		const filter: any = req.query;
		const currentPage = parseInt(String(filter.page || "1"));
		const limit = 5;
		const startIndex = (currentPage - 1) * limit;
		const sortField = filter.sortField ? filter.sortField : "updatedAt";

		delete filter.page;
		delete filter.sortField;

		const totalCount = await AdminModel.countDocuments(filter);

		const adminDtails = await AdminModel.find(filter)
			.sort({ [sortField]: -1 })
			.skip(startIndex)
			.limit(limit);

		res.status(200).json({
			message: MESSAGE.get.succ,
			pagination: {
				total: totalCount,
				currentPage: currentPage
			},
			result: adminDtails
		});
	} catch (error) {
		console.error("Error fetching bookings:", error);
		res.status(400).json({
			message: MESSAGE.get.fail
		});
	}
};
