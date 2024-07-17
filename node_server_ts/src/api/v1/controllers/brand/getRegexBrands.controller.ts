import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import { StatusCodes } from "http-status-codes";
import BrandModel from "../../../../models/brand.model";

export const escapeRegExp = (text: string) => {
	return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

export const getRegexBrands = async (req: Request, res: Response) => {
	try {
		const { brand_name } = req.query as unknown as any;
		console.log("Brand Name: ", brand_name)

		// Build the regex pattern for case-insensitive search
		// const regexPattern = new RegExp(product_name as string, 'i');

		// Build the regex pattern for case-insensitive search to match the beginning of the string
		// const regexExp = escapeRegExp(product_name as string);
		// const regexPattern = new RegExp(`^${regexExp}`, 'i');

		// Build the regex pattern for case-insensitive search to match the beginning of the string
		const regexExp = escapeRegExp(brand_name as string);
		const regexPattern = new RegExp("^" + regexExp, "i");

		// Creating Product Regex Payload
		const brandReqexPayload = {
			name: regexPattern
		}

		console.log("productReqexPayload: ", brandReqexPayload)

		// Finding Products using regex
		const brandsList = await BrandModel.find(brandReqexPayload).lean()

		res.status(StatusCodes.OK).json({
			message: MESSAGE.get.succ,
			totalBrandsCount: brandsList.length,
			result: brandsList
		});
	} catch (error: any) {
		console.error("Error Fetching Products Using Regex:", error);
		res.status(StatusCodes.BAD_REQUEST).json({
			message: MESSAGE.get.fail
		});
	}
};
