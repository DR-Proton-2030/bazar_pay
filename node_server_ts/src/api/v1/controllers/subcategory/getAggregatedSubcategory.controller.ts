import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CategoryModel from "../../../../models/category.model"
import { MESSAGE } from "../../../../constants/message";

export const getAggregatedSubcategory = async (req: Request, res: Response) => {
	try {
		const limit = 10;
		const subCategory = {};

		const aggregatedSubcategoryInstance: any[] = await CategoryModel.aggregate([
			{ $match: subCategory },
			{
				$lookup: {
					from: "sub_categories",
					localField: "_id",
					foreignField: "category_object_id",
					as: "subcategoryInstance"
				}
			},
			// { $unwind: { path: "$subcategoryInstance", preserveNullAndEmptyArrays: true } },
			{ $limit: limit }
		])

		return res.status(StatusCodes.OK).json({
			message: MESSAGE.get.succ,
			result: aggregatedSubcategoryInstance
		});

	}
	catch (err) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			message: MESSAGE.get.fail,
			result: null
		});
	}
}