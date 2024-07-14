import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import { StatusCodes } from "http-status-codes";
import ProductModel from "../../../../models/product.model";

export const escapeRegExp = (text: string) => {
	return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

export const getRegexProducts = async (req: Request, res: Response) => {
	try {
		const { product_name } = req.query as unknown as any;
		console.log("Product Name: ", product_name)

		// Build the regex pattern for case-insensitive search
		// const regexPattern = new RegExp(product_name as string, 'i');

		// Build the regex pattern for case-insensitive search to match the beginning of the string
		// const regexExp = escapeRegExp(product_name as string);
		// const regexPattern = new RegExp(`^${regexExp}`, 'i');

		// Build the regex pattern for case-insensitive search to match the beginning of the string
		const regexExp = escapeRegExp(product_name as string);
		const regexPattern = new RegExp("^" + regexExp, "i");

		// Creating Product Regex Payload
		const productReqexPayload = {
			product_name: regexPattern
		}

		console.log("productReqexPayload: ", productReqexPayload)

		// Finding Products using regex
		const productInstance = await ProductModel.find(productReqexPayload).lean()

		res.status(StatusCodes.OK).json({
			message: MESSAGE.get.succ,
			totalProductsCount: productInstance.length,
			result: productInstance
		});
	} catch (error: any) {
		console.error("Error Fetching Products Using Regex:", error);
		res.status(StatusCodes.BAD_REQUEST).json({
			message: MESSAGE.get.fail
		});
	}
};
