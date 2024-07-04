import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import { QUERY_PARAMS } from "../../../../constants/query";
import { uploadImageService } from "../../../../services/uploadImageService";
import CategoryModel from "../../../../models/category.model";

export const createCategory = async (req: Request, res: Response) => {
	try {
		if (!req.files || !("logo" in req.files)) {
			return res.status(404).json({
				message: MESSAGE.post.custom("logo not found")
			});
		}
		const { categoryDetails } = req.body;
		const categoryPayload = JSON.parse(categoryDetails);
		const existingBrand = await CategoryModel.findOne({ name: categoryPayload.name });
		if (existingBrand) {
			return res.status(409).json({
				message: MESSAGE.custom(`Brand with the same name already exists.`)
			});
		}

		const logo = req.files["logo"][0];
		const logoBuffer = logo.buffer;
		let logoUrl: string = "";
		try {
			logoUrl = await uploadImageService("logo", logoBuffer);
		} catch (error) {
			return res.status(400).json({
				message: MESSAGE.post.fail
			});
		}
		const payload = {
			...categoryPayload,
			logo: logoUrl
		};
		const categoryInstance = await new CategoryModel(payload).save();
		return res.status(200).json({
			message: MESSAGE.post.succ,
			result: categoryInstance
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.post.fail,
			error
		});
	}
};

export const getCategoryById = async (req: Request, res: Response) => {
	try {
		const brandId = req.query[QUERY_PARAMS.id];
		const category = await CategoryModel.findById(brandId);
		if (!category) {
			return res.status(404).json({
				message: MESSAGE.get.fail
			});
		}
		return res.status(200).json({
			message: MESSAGE.get.succ,
			result: category
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.get.fail,
			error
		});
	}
};

export const getCategories = async (req: Request, res: Response) => {
	try {
		const filter = req.query as unknown as any;

		let currentPage = 0;
		if (filter.page) {
			currentPage = parseInt(String(filter.page)); // Parse page as integer
		}

		const sortField = filter.sortField ? filter.sortField : "updatedAt";

		delete filter.page;
		delete filter.sortField;

		console.log("===>filter", filter);

		const totalCount = await CategoryModel.countDocuments(filter);

		const limit = currentPage > 0 ? 5 : totalCount;
		const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;

		const builders = await CategoryModel.find(filter)
			.sort({ [sortField]: -1 })
			.skip(startIndex)
			.limit(limit);

		res.status(200).json({
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
