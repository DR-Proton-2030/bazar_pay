import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import RetailerrModel from "../../../../models/customer.model";

export const getRetailer = async (req: Request, res: Response) => {
	try {
		const filter: any = req.query;
		const currentPage = parseInt(String(filter.page || "1")); // Parse page as integer

		const limit = 5;

		const startIndex = (currentPage - 1) * limit;

		const sortField = filter.sortField ? filter.sortField : "updatedAt";

		delete filter.page;
		delete filter.sortField

		console.log("===>filter", filter);

		const totalCount = await RetailerrModel.countDocuments(filter);

		const customers = await RetailerrModel.find(filter).sort({[sortField]:-1}).skip(startIndex).limit(limit);

		res.status(200).json({
			message: MESSAGE.get.succ,
			pagination: {
				total: totalCount,
				currentPage: currentPage
			},
			result: customers
		});
	} catch (error) {
		console.error("Error fetching businesses:", error);
		res.status(400).json({
			message: MESSAGE.get.fail
		});
	}
};