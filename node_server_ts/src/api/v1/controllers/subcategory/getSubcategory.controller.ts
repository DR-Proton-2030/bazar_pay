import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import { QUERY_PARAMS } from "../../../../constants/query";
import { StatusCodes } from "http-status-codes";
import SubcategoryModel from "../../../../models/subcategory.model";

export const getSubcategory = async (req: Request, res: Response) => {
	try {
		const { category_object_id } = req.query;

		const subCategoryInstance = await SubcategoryModel.find({ category_object_id });

		if (!subCategoryInstance) {
			return res.status(400).json({
				message: MESSAGE.custom("Subcategory not found for the provided category_object_id")
			});
		}

		return res.status(200).json({
			message: MESSAGE.get.succ,
			result: subCategoryInstance
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.get.fail,
			error
		});
	}
};
