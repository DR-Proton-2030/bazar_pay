import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { MESSAGE } from "../../../../constants/message";
import { uploadImageToS3Service } from "../../../../services/uploadImageService";
import SubcategoryModel from "../../../../models/subcategory.model";
import BrandModel from "../../../../models/brand.model";
import ProductModel from "../../../../models/product.model";
import DataURIParser from "datauri/parser";


const parser = new DataURIParser();

export const createProductByAdmin = async (req: Request, res: Response) => {
	try {
		if (!req.files || !("product_image" in req.files)) {
			return res.status(StatusCodes.NOT_FOUND).json({
				message: MESSAGE.post.custom("Product Image not found!")
			});
		}

		const { productDetails } = req.body;
		const productPayload = JSON.parse(productDetails);

		const subCategoryInstance: any = await SubcategoryModel.findOne({ _id: productPayload.subcategory_object_id });

		const brandInstance: any = await BrandModel.findOne({ _id: productPayload.brand_object_id });

		const images = await Promise.all(
			(req.files["product_image"] as Express.Multer.File[]).map(async (file: Express.Multer.File) => {
				const productUrl = await uploadImageToS3Service("productImage", file.buffer) || "";
				return productUrl;
			})
		);


		const productInstancePayload = {
			...productPayload,
			product_image: images,
			category_object_id: subCategoryInstance.category_object_id,
			brand_object_id: brandInstance._id,
			subcategory_object_id: subCategoryInstance._id
		};

		const productInstance = await new ProductModel(productInstancePayload).save();

		return res.status(StatusCodes.OK).json({
			message: MESSAGE.post.succ,
			result: productInstance
		});
	} catch (error: any) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			message: MESSAGE.post.fail,
			error
		});
	}
};
