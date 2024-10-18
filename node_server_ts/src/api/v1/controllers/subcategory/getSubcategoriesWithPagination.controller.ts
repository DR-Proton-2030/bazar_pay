import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import SubcategoryModel from "../../../../models/subcategory.model";
import { StatusCodes } from "http-status-codes";
import { IPagination } from "../../../../@types/types/pagination";

export const getSubcategories = async (req: Request, res: Response) => {
	try {
		const filter = req.query as unknown as any;

		let currentPage = 0;
		if (filter.page) {
			currentPage = parseInt(String(filter.page)); // Parse page as integer
		}

		const sortField = filter.sortField ? filter.sortField : "updatedAt";
		const _limit = filter.limit ? parseInt(String(filter.limit)) : 10;

		delete filter.page;
		delete filter.sortField;
		delete filter.limit;

		console.log("===>Sub Category Filter", filter);

		const totalCount = await SubcategoryModel.countDocuments(filter);

		const limit = currentPage > 0 ? _limit : totalCount;
		const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;

		const subcategories = await SubcategoryModel.find(filter)
			.sort({ [sortField]: -1 })
			.skip(startIndex)
			.limit(limit);

		const pagination: IPagination = {
			currentPage,
			pageCount: Math.ceil(totalCount / limit)
		}

		res.status(StatusCodes.OK).json({
			message: MESSAGE.get.succ,
			pagination: pagination,
			result: subcategories
		});
	} catch (error) {
		console.error("Error fetching categories:", error);
		res.status(400).json({
			message: MESSAGE.get.fail
		});
	}
};
