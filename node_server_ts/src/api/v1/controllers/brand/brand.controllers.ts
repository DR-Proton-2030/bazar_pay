// File: controllers/brand.controller.ts
import { Request, Response } from "express";
import BrandModel from "../../../../models/brand.model";
import { MESSAGE } from "../../../../constants/message";
import { QUERY_PARAMS } from "../../../../constants/query";
import { uploadImageToS3Service } from "../../../../services/uploadImageService";
import { IPagination } from "../../../../@types/types/pagination";

export const createBrand = async (req: Request, res: Response) => {
	try {
		if (!req.files || !("logo" in req.files)) {
			return res.status(404).json({
				message: MESSAGE.post.custom("logo not found")
			});
		}
		const { brandDetails } = req.body;
		const bradPayload = JSON.parse(brandDetails);
		const existingBrand = await BrandModel.findOne({ name: bradPayload.name });
		if (existingBrand) {
			return res.status(409).json({
				message: MESSAGE.custom(`Brand with the same name already exists.`)
			});
		}

		const logo = req.files["logo"][0];
		const logoBuffer = logo.buffer;
		let logoUrl: string = "";
		try {
			logoUrl = await uploadImageToS3Service("logo", logoBuffer) || "";
		} catch (error) {
			return res.status(400).json({
				message: MESSAGE.post.fail
			});
		}
		const payload = {
			...bradPayload,
			logo: logoUrl
		};
		const brandInstance = await new BrandModel(payload).save();
		return res.status(200).json({
			message: MESSAGE.post.succ,
			result: brandInstance
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.post.fail,
			error
		});
	}
};

export const getBrandById = async (req: Request, res: Response) => {
	try {
		const brandId = req.query[QUERY_PARAMS.id];
		const brand = await BrandModel.findById(brandId);
		if (!brand) {
			return res.status(404).json({
				message: MESSAGE.get.fail
			});
		}
		return res.status(200).json({
			message: MESSAGE.get.succ,
			result: brand
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.get.fail,
			error
		});
	}
};

// export const getBrands = async (req: Request, res: Response) => {
// 	try {
// 		const filter = JSON.parse(req.query as unknown as any);

// 		let currentPage = 0;
// 		if (filter.page) {
// 			currentPage = parseInt(String(filter.page)); // Parse page as integer
// 		}

// 		const sortField = filter.sortField ? filter.sortField : "updatedAt";

// 		delete filter.page;
// 		delete filter.sortField;

// 		console.log("===>filter", filter);

// 		const _filter = filter;

// 		const totalCount = await BrandModel.countDocuments(_filter);

// 		const limit = currentPage > 0 ? 5 : totalCount;
// 		const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;

// 		const brands = await BrandModel.find(filter)
// 			.sort({ [sortField]: -1 })
// 			.skip(startIndex)
// 			.limit(limit);

// 		const pagination: IPagination = {
// 			currentPage: currentPage,
// 			pageCount: Math.ceil(totalCount / limit)
// 		}

// 		res.status(200).json({
// 			message: MESSAGE.get.succ,
// 			pagination,
// 			result: brands
// 		});
// 	} catch (error) {
// 		console.error("Error fetching brands:", error);
// 		res.status(400).json({
// 			message: MESSAGE.get.fail,
// 			error: error
// 		});
// 	}
// };
export const getBrands = async (req: Request, res: Response) => {
	try {
		// Instead of JSON.parse, we check the type of req.query and handle it accordingly
		const filter = { ...req.query }; // Spread req.query to create a filter object

		let currentPage = 0;
		if (filter.page) {
			currentPage = parseInt(String(filter.page)); // Parse page as an integer
		}

		const sortField = filter.sortField ? filter.sortField : "updatedAt";
		const _limit = filter.limit ? parseInt(String(filter.limit)) : 5;

		// Clean up filter object to remove pagination and sorting-related properties
		delete filter.page;
		delete filter.sortField;
		delete filter.limit;

		console.log("===>filter", filter);

		const _filter = filter;

		// Fetch total count of documents based on the filter
		const totalCount = await BrandModel.countDocuments(_filter);

		// Pagination logic
		const limit = currentPage > 0 ? _limit : totalCount;
		const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;

		// Fetch the brands from the database
		const brands = await BrandModel.find(_filter)
			.sort({ [sortField as string]: -1 })
			.skip(startIndex)
			.limit(limit);

		const pagination: IPagination = {
			currentPage: currentPage,
			pageCount: Math.ceil(totalCount / limit),
		};

		// Send the response with brands and pagination info
		res.status(200).json({
			message: MESSAGE.get.succ,
			pagination,
			result: brands,
		});
	} catch (error) {
		console.error("Error fetching brands:", error);
		res.status(400).json({
			message: MESSAGE.get.fail,
			error: (error as Error).message, // Include the error message for better debugging
		});
	}
};

export const deleteBrand = async (req: Request, res: Response) => {
	try {
		const { brandId } = req.params;
		const brand = await BrandModel.findByIdAndDelete(brandId);
		if (!brand) {
			return res.status(404).json({
				message: MESSAGE.delete.fail
			});
		}
		return res.status(200).json({
			message: MESSAGE.delete.succ,
			result: brand
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.delete.fail,
			error
		});
	}
};