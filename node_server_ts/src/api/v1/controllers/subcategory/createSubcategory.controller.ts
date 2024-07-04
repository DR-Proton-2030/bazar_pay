import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { MESSAGE } from "../../../../constants/message";
import { uploadImageService } from "../../../../services/uploadImageService";
import CategoryModel from "../../../../models/category.model";
import SubcategoryModel from "../../../../models/subcategory.model";

export const createSubCategory = async (req: Request, res: Response) => {
	try {
		if (!req.files || !("sub_category_image" in req.files)) {
			return res.status(StatusCodes.NOT_FOUND).json({
				message: MESSAGE.post.custom("Sub Category Image not found!")
			});
		}

		const { subCategoryDetails } = req.body;
		const subCategoryPayload = JSON.parse(subCategoryDetails);
		const categoryInstance: any = await CategoryModel.findOne({ _id: subCategoryPayload.category_object_id });

		if (categoryInstance) {
			return res.status(StatusCodes.NOT_FOUND).json({
				message: MESSAGE.custom("Brand with the same name already exists!")
			});
		}

		const subCategoryImage = req.files["sub_category_image"][0];
		const subCategoryImageBuffer = subCategoryImage.buffer;
		let subCategoryUrl: string = "";
		try {
			subCategoryUrl = await uploadImageService("subCategoryImage", subCategoryImageBuffer);
		} catch (error) {
			return res.status(StatusCodes.BAD_REQUEST).json({
				message: MESSAGE.post.fail
			});
		}

		const SubCategoryPayload = {
			...subCategoryPayload,
			subCategoryImage: subCategoryUrl,
			category_object_id: categoryInstance._id
		};

		const subCategoryInstance = await new SubcategoryModel(SubCategoryPayload).save();

		return res.status(StatusCodes.OK).json({
			message: MESSAGE.post.succ,
			result: subCategoryInstance
		});
	} catch (error: any) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			message: MESSAGE.post.fail,
			error
		});
	}
};
