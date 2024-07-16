// File: controllers/wholesaler.controller.ts
import { Request, Response } from "express";
import { Types } from "mongoose";
import { MESSAGE } from "../../../../constants/message";
import WholesalerListedProductModel from "../../../../models/wholesalerListedproduct.model";

export const uploadProduct = async (req: Request, res: Response) => {
	try {
		const {
			product_object_id,
			wholesaler_object_id,
			buying_price,
			marked_price,
			discount,
			selling_price,
			current_stock,
			selling_status
		} = req.body;

		const payload = {
			product_object_id,
			wholesaler_object_id,
			buying_price,
			marked_price,
			discount,
			selling_price,
			current_stock,
			selling_status
		};

		const productInstance = await new WholesalerListedProductModel(payload).save();

		return res.status(200).json({
			message: MESSAGE.post.succ,
			result: productInstance
		});
	} catch (error) {
		console.error("Error uploading wholesaler product:", error);
		return res.status(400).json({
			message: MESSAGE.post.fail,
			error
		});
	}
};

export const getProductsByProductId = async (req: Request, res: Response) => {
	try {
		const { productId } = req.query;


		const products = await WholesalerListedProductModel.find({ product_object_id: productId })
			.populate('wholesaler')
			.exec();

		return res.status(200).json({
			message: MESSAGE.get.succ,
			result: products
		});
	} catch (error) {
		console.error("Error :", error);
		return res.status(400).json({
			message: MESSAGE.get.fail,
			error
		});
	}
};