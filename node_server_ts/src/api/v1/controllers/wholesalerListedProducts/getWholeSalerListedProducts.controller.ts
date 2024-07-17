import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import { StatusCodes } from "http-status-codes";
import WholesalerListedProductModel from "../../../../models/wholesalerListedproduct.model";

export const getEachWholesalerListedProducts = async (req: Request, res: Response) => {
	try {
		const { wholesaler_listed_product_id } = req.query;

		console.log("Whole Listed Product Id", wholesaler_listed_product_id)

		const wholesalerListedProductInstance = await WholesalerListedProductModel
			.findOne({ _id: wholesaler_listed_product_id })
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
