import { Request, Response } from "express";
import { uploadImageToS3Service } from "../../../../services/uploadImageService";
import productModel from "../../../../models/product.model";
import { MESSAGE } from "../../../../constants/message";
import RequestedProductModel from "../../../../models/requestedProduct.model";
import { StatusCodes } from "http-status-codes";

export const requestProduct = async (req: Request, res: Response) => {
	try {
		if (!req.files || !("product_image" in req.files)) {
			return res.status(StatusCodes.NOT_FOUND).json({
				message: MESSAGE.post.custom("Product Image not found!")
			});
		}

		const { product_name } = req.body;

		const images = await Promise.all(
			(req.files["product_image"] as Express.Multer.File[]).map(async (file: Express.Multer.File) => {
				const productUrl = await uploadImageToS3Service("productImage", file.buffer) || "";
				return productUrl;
			})
		);


		const productInstancePayload = {
			product_image: images,
			product_name: product_name
		};

		const productInstance = await new RequestedProductModel(productInstancePayload).save();

		return res.status(StatusCodes.OK).json({
			message: MESSAGE.post.succ,
			result: productInstance
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.post.fail,
			error
		});
	}
};