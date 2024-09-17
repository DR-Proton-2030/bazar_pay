import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import { StatusCodes } from "http-status-codes";
import ProductModel from "../../../../models/product.model";

export const getProducts = async (req: Request, res: Response) => {
	try {
		const filter = req.query as unknown as any;

		let currentPage = 0;
		if (filter.page) {
			currentPage = parseInt(String(filter.page)); // Parse page as integer
		}

		const sortField = filter.sortField ? filter.sortField : "updatedAt";

		delete filter.page;
		delete filter.sortField;

		console.log("===>Sub Category Filter", filter);

		const totalCount = await ProductModel.countDocuments(filter);

		const limit = currentPage > 0 ? 10 : totalCount;
		const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;

		const builders = await ProductModel.find(filter)
			.sort({ [sortField]: -1 })
			.skip(startIndex)
			.limit(limit);

		res.status(StatusCodes.OK).json({
			message: MESSAGE.get.succ,
			pagination: {
				total: totalCount,
				currentPage: currentPage
			},
			result: builders
		});
	} catch (error) {
		console.error("Error fetching categories:", error);
		res.status(400).json({
			message: MESSAGE.get.fail
		});
	}
};


export const getProductById = async (req: Request, res: Response) => {
	try {
		const { id } = req.query;

		if (!id) {
			return res.status(StatusCodes.BAD_REQUEST).json({
				message: MESSAGE.get.fail,
				error: "Product ID is required."
			});
		}

		const product = await ProductModel.findById(id);

		if (!product) {
			return res.status(StatusCodes.NOT_FOUND).json({
				message: MESSAGE.get.fail,
				error: "Product not found."
			});
		}

		res.status(StatusCodes.OK).json({
			message: MESSAGE.get.succ,
			result: product
		});
	} catch (error) {
		console.error("Error fetching product by ID:", error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: MESSAGE.get.fail,
			error: "An error occurred while fetching the product."
		});
	}
};
