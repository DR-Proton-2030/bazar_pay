import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import { QUERY_PARAMS } from "../../../../constants/query";
import SubcategoryModel from "../../../../models/subcategory.model";
import { StatusCodes } from "http-status-codes";

export const getSubcategory = async (req: Request, res: Response) => {
	try {
		const subCategoryFilter = req.query[QUERY_PARAMS.filter];

		const subCategoryInstance = await SubcategoryModel.find({ subCategoryFilter }).lean();

		if (!subCategoryInstance) {
			return res.status(StatusCodes.NOT_FOUND).json({
				message: MESSAGE.get.fail
			});
		}

		return res.status(StatusCodes.OK).json({
			message: MESSAGE.get.succ,
			result: subCategoryInstance
		});
	} catch (error) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			message: MESSAGE.get.fail,
			error
		});
	}
};
