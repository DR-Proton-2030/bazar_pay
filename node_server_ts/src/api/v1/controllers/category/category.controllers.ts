import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import { QUERY_PARAMS } from "../../../../constants/query";
import { uploadImageToS3Service } from "../../../../services/uploadImageService";
import CategoryModel from "../../../../models/category.model";
import SubcategoryModel from "../../../../models/subcategory.model";
import ProductModel from "../../../../models/product.model";
import { IPagination } from "../../../../@types/types/pagination";
import { StatusCodes } from "http-status-codes";

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
			logoUrl = (await uploadImageToS3Service("logo", logoBuffer)) || "";
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

export const editCategoryById = async (req: Request, res: Response) => {
	try {
		const { categoryId, categoryDetails } = req.body;
		const categoryPayload = JSON.parse(categoryDetails);

		const existingCategory = await CategoryModel.findById(categoryId);
		if (!existingCategory) {
			return res.status(404).json({
				message: MESSAGE.custom(`Category not found.`),
			});
		}

		if (req.files && "logo" in req.files) {
			const logo = req.files["logo"][0];
			const logoBuffer = logo.buffer;
			let logoUrl: string = "";
			try {
				logoUrl = (await uploadImageToS3Service("logo", logoBuffer)) || "";
			} catch (error) {
				return res.status(400).json({
					message: MESSAGE.patch.fail,
				});
			}
			categoryPayload.logo = logoUrl;
		}

		const updatedCategory = await CategoryModel.findByIdAndUpdate(
			categoryId,
			{ $set: categoryPayload },
			{ new: true }
		);

		if (!updatedCategory) {
			return res.status(400).json({
				message: MESSAGE.custom(`Failed to update category.`),
			});
		}

		return res.status(200).json({
			message: MESSAGE.patch.succ,
			result: updatedCategory,
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.patch.fail,
			error,
		});
	}
};
export const getCategoryById = async (req: Request, res: Response) => {
	try {
		const { cid } = req.query;

		if (!cid) {
			return res.status(400).json({
				message: MESSAGE.custom("Category ID (cid) is required."),
			});
		}

		const category = await CategoryModel.findById(cid);

		if (!category) {
			return res.status(404).json({
				message: MESSAGE.custom(`Category not found with ID: ${cid}`),
			});
		}

		return res.status(200).json({
			message: MESSAGE.get.succ,
			result: category,
		});
	} catch (error) {
		return res.status(500).json({
			message: MESSAGE.get.fail,
			error,
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
		const _limit = filter.limit ? parseInt(String(filter.limit)) : 5;

		delete filter.page;
		delete filter.sortField;
		delete filter.limit;

		console.log("===>filter", filter);

		const totalCount = await CategoryModel.countDocuments(filter);
		const limit = currentPage > 0 ? _limit : totalCount;
		const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;

		console.log("===>filter", filter);

		const categories = await CategoryModel.find(filter)
			.sort({ [sortField]: -1 })
			.skip(startIndex)
			.limit(limit);

		const pagination: IPagination = {
			currentPage: currentPage,
			pageCount: Math.ceil(totalCount / limit)
		};

		res.status(200).json({
			message: MESSAGE.get.succ,
			pagination,
			result: categories
		});
	} catch (error) {
		console.error("Error fetching categories:", error);
		res.status(400).json({
			message: MESSAGE.get.fail
		});
	}
};


export const deleteCategoryById = async (req: Request, res: Response) => {
	try {
		const { categoryObjectId } = req.params;
		const deletedCategoryInstance = await CategoryModel.findByIdAndDelete(categoryObjectId);

		if (!deletedCategoryInstance) {
			return res.status(404).json({
				message: "Category id not found"
			});
		}

		const subcategoryPayload = {
			category_object_id: categoryObjectId
		};
		const subcategoryDeleteInstance = await SubcategoryModel.deleteMany(subcategoryPayload);
		const productDeleteInstance = await ProductModel.deleteMany(subcategoryPayload);

		return res.status(200).json({
			message: MESSAGE.delete.succ,
			result: { deletedCategoryInstance, subcategoryDeleteInstance, productDeleteInstance }
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.delete.fail,
			error
		});
	}
};



export const searchByCategory = async (req: Request, res: Response) => {
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
			totalResults = await CategoryModel.countDocuments({ name: { $regex: regex } });
			searchResult = await CategoryModel.find({ name: { $regex: regex } })
				.skip(skip)
				.limit(limitNumber);
		} else {
			totalResults = await CategoryModel.countDocuments({});
			searchResult = await CategoryModel.find({})
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