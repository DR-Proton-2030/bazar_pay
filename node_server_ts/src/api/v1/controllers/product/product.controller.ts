import { Request, Response } from "express";
import { uploadImageToS3Service } from "../../../../services/uploadImageService";
import productModel from "../../../../models/product.model";
import { MESSAGE } from "../../../../constants/message";
import ProductModel from "../../../../models/product.model";
import { IPagination } from "../../../../@types/types/pagination";

export const createProduct = async (req: Request, res: Response) => {
	try {
		if (!req.files || !("product_image" in req.files) || !("bar_code_photo" in req.files)) {
			return res.status(404).json({
				message: "Product image or bar code photo not found"
			});
		}

		const product_image = req.files["product_image"][0];
		const bar_code_photo = req.files["bar_code_photo"][0];

		const { productDetails, wholesalerSaler_id } = req.body;
		const productPayload = JSON.parse(productDetails);

		const productImageBuffer = product_image.buffer;
		const barCodePhotoBuffer = bar_code_photo.buffer;

		let payload: any = {};

		try {
			const productImageUrl = await uploadImageToS3Service("product_image", productImageBuffer);
			const barCodePhotoUrl = await uploadImageToS3Service("bar_code_photo", barCodePhotoBuffer);

			payload = {
				...productPayload,
				product_image: productImageUrl,
				bar_code_photo: barCodePhotoUrl,
				wholesalerSaler_id
			};
		} catch (error) {
			return res.status(400).json({
				message: MESSAGE.post.fail,
				error
			});
		}

		try {
			const productInstance = await new productModel(payload).save();
			return res.status(200).json({
				message: MESSAGE.post.succ,
				result: productInstance
			});
		} catch (error) {
			return res.status(400).json({
				message: MESSAGE.post.fail,
				error
			});
		}
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.post.fail,
			error
		});
	}
};

export const getProductList = async (req: Request, res: Response) => {
	try {
		const filter: any = req.query;

		let currentPage = 0;

		if (filter.page) {
			currentPage = parseInt(String(filter.page)); // Parse page as integer
		}

		const sortField = filter.sortField ? filter.sortField : "updatedAt";

		delete filter.page;
		delete filter.sortField;

		console.log("===>filter", filter);

		const totalCount = await productModel.countDocuments(filter);

		const limit = currentPage > 0 ? 10 : totalCount;
		const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;

		const products = await productModel
			.find(filter)
			.populate("wholesaler")
			.sort({ [sortField]: -1 })
			.skip(startIndex)
			.limit(limit);

		const pagination: IPagination = {
			currentPage: currentPage,
			pageCount: Math.ceil(totalCount / limit)
		}

		res.status(200).json({
			message: MESSAGE.get.succ,
			pagination,
			result: products
		});
	} catch (error) {
		console.error("Error fetching businesses:", error);
		res.status(400).json({
			message: MESSAGE.get.fail
		});
	}
};

export const updateProduct = async (req: Request, res: Response) => {
	try {
		let product_image: any = null;
		let bar_code_photo: any = null;
		if (req.files && "product_image" in req.files && "bar_code_photo" in req.files) {
			product_image = req.files["product_image"][0];
			bar_code_photo = req.files["bar_code_photo"][0];
		}

		const productImageBuffer = product_image ? product_image.buffer : null;
		const barCodePhotoBuffer = bar_code_photo ? bar_code_photo.buffer : null;

		const productImageUrl = productImageBuffer
			? await uploadImageToS3Service("product_image", productImageBuffer)
			: "";

		const barCodePhotoUrl = barCodePhotoBuffer
			? await uploadImageToS3Service("bar_code_photo", barCodePhotoBuffer)
			: "";

		const { productDetails, productId } = req.body;
		const _productPayload = JSON.parse(productDetails);
		let productDetailsPayload = { ..._productPayload };
		if (productImageUrl) {
			productDetailsPayload = {
				...productDetailsPayload,
				product_image: productImageUrl
			};
		}
		if (barCodePhotoUrl) {
			productDetailsPayload = {
				...productDetailsPayload,
				bar_code_photo: barCodePhotoUrl
			};
		}

		const productInstance = await productModel.findByIdAndUpdate(
			productId,
			{
				$set: productDetailsPayload
			},
			{ new: true }
		);

		return res.status(200).json({
			message: MESSAGE.patch.succ,
			result: productInstance
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.patch.fail,
			error
		});
	}
};

export const updateProductStatus = async (req: Request, res: Response) => {
	try {
		const { productStatus, productId } = req.body;
		console.log(productId);
		const updatedProduct = await productModel.findByIdAndUpdate(
			productId,
			{ $set: { product_status: productStatus } },
			{ new: true }
		);

		if (!updatedProduct) {
			return res.status(404).json({ message: MESSAGE.patch.custom("Not Found") });
		}

		return res.status(200).json({ message: MESSAGE.patch.succ, result: updatedProduct });
	} catch (error) {
		return res.status(500).json({ message: MESSAGE.patch.fail, error });
	}
};

export const getProductListForRetailers = (req: Request, res: Response) => { };

export const deleteProductById = async (req: Request, res: Response) => {
	try {
		const { productId } = req.params;
		const deletedProductInstance = await ProductModel.findByIdAndDelete(productId);

		if (!deletedProductInstance) {
			return res.status(400).json({
				message: "Product not found"
			});
		}

		return res.status(200).json({
			message: MESSAGE.delete.succ,
			result: deletedProductInstance
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.delete.fail,
			error
		});
	}
};
