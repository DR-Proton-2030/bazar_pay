import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import { StatusCodes } from "http-status-codes";
import WholesalerListedProductModel from "../../../../models/wholesalerListedproduct.model";

export const getEachWholesalerListedProducts = async (req: Request, res: Response) => {
	try {
		const filter = req.query;

		let wholesalerListedProductInstance: any = await WholesalerListedProductModel
			.findOne(filter)
			.populate("wholesaler")
			.populate({			// Populating Fields from Product Model which has reference in Product Model
				path: 'product',
				populate: [
					{
						path: 'brand_object_id',
						model: 'brands'  // Populating from Brand model
					},
					{
						path: 'category_object_id',
						model: 'categories'  // Populating from Category model
					},
					{
						path: 'subcategory_object_id',
						model: 'sub_categories' // Populating from Sub Category model
					}
				]
			})
			.lean();


		if (!wholesalerListedProductInstance) {
			return res.status(StatusCodes.BAD_REQUEST).json({
				message: MESSAGE.custom("Wholesaler Listed Product not found!")
			});
		}
		else {
			const result = {
				...wholesalerListedProductInstance,
				brand_details: wholesalerListedProductInstance.product.brand_object_id,
				product_details: wholesalerListedProductInstance.product,
			};

			// Remove the original references if not needed
			delete result.product.brand_object_id;
			delete result.product.category_object_id;
			delete result.product.subcategory_object_id;
			delete result.product_object_id;

			wholesalerListedProductInstance = result;
		}

		return res.status(StatusCodes.OK).json({
			message: MESSAGE.get.succ,
			result: wholesalerListedProductInstance
		});
	} catch (error) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			message: MESSAGE.get.fail,
			error
		});
	}
};


export const getAllListedProducts = async (req: Request, res: Response) => {

	try {
		const filter = req.query;

		const ProductList = await WholesalerListedProductModel.find(filter)
			.populate("product")

		return res.status(200).json({
			message: MESSAGE.get.succ,
			result: ProductList
		});
	} catch (error) {
		console.log(error)
		return res.status(400).json({
			message: MESSAGE.get.fail,
			error
		});
	}
};