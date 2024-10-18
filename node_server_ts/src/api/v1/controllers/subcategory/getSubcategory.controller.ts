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



export const searchBySubCategory = async (req: Request, res: Response) => {
	try {
		const { name, page = 1, limit = 10 } = req.query;

		const pageNumber = parseInt(page as string, 10) || 1;
		const limitNumber = parseInt(limit as string, 10) || 10;
		const skip = (pageNumber - 1) * limitNumber;

		let searchResult;
		let totalResults = 0;


		if (name) {
			const searchTerm = (name as string).trim();
			const regex = new RegExp(searchTerm, 'i');
			totalResults = await SubcategoryModel.countDocuments({ name: { $regex: regex } });
			searchResult = await SubcategoryModel.find({ name: { $regex: regex } })
				.skip(skip)
				.limit(limitNumber);
		} else {
			totalResults = await SubcategoryModel.countDocuments({});
			searchResult = await SubcategoryModel.find({})
				.skip(skip)
				.limit(limitNumber);
		}



		res.status(StatusCodes.OK).json({
			message: MESSAGE.get.succ,
			pagination: {
				page: pageNumber,
				limit: limitNumber,
				totalResults,
				totalPages: Math.ceil(totalResults / limitNumber),
			},
			result: searchResult
		});
	} catch (error) {
		console.error("Error searching for wholesaler products:", error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: MESSAGE.get.fail,
			error: "An error occurred while searching for products."
		});
	}
};