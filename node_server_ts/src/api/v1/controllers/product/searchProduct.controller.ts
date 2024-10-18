import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { MESSAGE } from "../../../../constants/message";
import ProductModel from "../../../../models/product.model";
import BrandModel from "../../../../models/brand.model";
import CategoryModel from "../../../../models/category.model";
import SubcategoryModel from "../../../../models/subcategory.model";

export const searchProductByName = async (req: Request, res: Response) => {

	try {
		const { name } = req.query;

		if (!name) {
			return res.status(StatusCodes.BAD_REQUEST).json({
				message: MESSAGE.get.fail,
				error: "Product name is required."
			});
		}

		const searchTerm = (name as string).trim();
		const regex = new RegExp(searchTerm, 'i');

		const productsByName = await ProductModel.find({ product_name: { $regex: regex } })
			.populate('brand_object_id', 'name');


		//Brands

		const matchingBrands = await BrandModel.find({ name: { $regex: regex } });
		const brandIds = matchingBrands.map(brand => brand._id);

		const productsByBrand = await ProductModel.find({ brand_object_id: { $in: brandIds } })
			.populate('brand_object_id', 'name');

		//Category

		const matchingCategory = await CategoryModel.find({ name: { $regex: regex } });
		const categoryIds = matchingCategory.map(category => category._id);

		const productsByCategory = await ProductModel.find({ category_object_id: { $in: categoryIds } })
			.populate('category_object_id', 'name');


		const allProducts = [...productsByName, ...productsByBrand, ...productsByCategory];
		const uniqueProductsMap = new Map();

		allProducts.forEach(product => {
			uniqueProductsMap.set(product._id.toString(), product);
		});

		const uniqueProducts = Array.from(uniqueProductsMap.values());

		if (uniqueProducts.length === 0) {
			return res.status(StatusCodes.NOT_FOUND).json({
				message: MESSAGE.get.fail,
				error: "No products found."
			});
		}

		res.status(StatusCodes.OK).json({
			message: MESSAGE.get.succ,
			result: uniqueProducts
		});
	} catch (error) {
		console.error("Error searching for products by name:", error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: MESSAGE.get.fail,
			error: "An error occurred while searching for products."
		});
	}
};




export const searchWholesalerProduct = async (req: Request, res: Response) => {
	try {
		const { name, type } = req.query;

		if (!name || !type) {
			return res.status(StatusCodes.BAD_REQUEST).json({
				message: MESSAGE.get.fail,
				error: "Both 'name' and 'type' are required."
			});
		}

		const searchTerm = (name as string).trim();
		const regex = new RegExp(searchTerm, 'i');
		let searchResult;

		switch (type) {
			case 'brand':
				searchResult = await BrandModel.find({ name: { $regex: regex } });
				break;

			case 'category':
				searchResult = await CategoryModel.find({ name: { $regex: regex } });
				break;

			case 'subcategory':
				searchResult = await SubcategoryModel.find({ name: { $regex: regex } });
				break;

			default:
				return res.status(StatusCodes.BAD_REQUEST).json({
					message: MESSAGE.get.fail,
					error: "Invalid 'type' provided. Valid types are 'brand', 'category', and 'subcategory'."
				});
		}


		res.status(StatusCodes.OK).json({
			message: MESSAGE.get.succ,
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