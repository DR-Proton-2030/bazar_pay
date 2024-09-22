import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { MESSAGE } from "../../../../constants/message";
import retailerModel from "../../../../models/retailer.model";
import { uploadImageToS3Service } from "../../../../services/uploadImageService";
import { DEFAULT_IMAGE } from "../../../../constants/image";
import { IPagination } from "../../../../@types/types/pagination";

export const createRetailer = async (req: Request, res: Response) => {
	try {
		if (
			!req.files ||
			!("sign_board_photo" in req.files) ||
			!("retailer_owner_photo" in req.files) ||
			!("trade_license_photo" in req.files) ||
			!("nid_photo" in req.files) ||
			!("logo" in req.files)
		) {
			return res.status(404).json({
				message: MESSAGE.post.custom("img not found")
			});
		}
		console.log(req.files);
		const sign_board = req.files["sign_board_photo"][0];
		const owner_photo = req.files["retailer_owner_photo"][0];
		const trade_license = req.files["trade_license_photo"] ? req.files["trade_license_photo"][0] : null;
		const nid = req.files["nid_photo"][0];
		const logo = req.files["logo"][0];

		const { retailerDetails } = req.body;
		console.log("====>req.files", retailerDetails);
		let _payload: any = {};
		try {
			_payload = JSON.parse(retailerDetails);
		} catch (error) {
			console.log("retailerDetails", error);
		}

		const signBoardBuffer = sign_board.buffer;
		const ownerPhotoBuffer = owner_photo.buffer;
		const tradeLicensceBuffer = trade_license ? trade_license.buffer : null;
		const nidBuffer = nid.buffer;
		const logoBuffer = logo.buffer;

		const existingretailer = await retailerModel.findOne({ trade_license_number: _payload.trade_license_number });
		if (existingretailer) {
			if (existingretailer.nid_number === _payload.nid_number) {
				return res.status(409).json({
					message: MESSAGE.post.sameEntry
				});
			}
			return res.status(200).json({
				message: MESSAGE.post.succ,
				result: existingretailer
			});
		}
		let payload = {};
		console.log("====>before payload", payload);
		try {
			const signBoardUrl = await uploadImageToS3Service("sign_board_photo", signBoardBuffer);
			const ownerPhotoUrl = await uploadImageToS3Service("retailer_owner_photo", ownerPhotoBuffer);
			const tradeLicensceUrl = tradeLicensceBuffer
				? await uploadImageToS3Service("trade_license_photo", tradeLicensceBuffer)
				: DEFAULT_IMAGE;
			const nidUrl = await uploadImageToS3Service("nid_photo", nidBuffer);
			const logoUrl = await uploadImageToS3Service("logo", logoBuffer);

			payload = {
				..._payload,
				sign_board_photo: signBoardUrl,
				retailer_owner_photo: ownerPhotoUrl,
				trade_license_photo: tradeLicensceUrl,
				nid_photo: nidUrl,
				logo: logoUrl
			};
		} catch (error) {
			return res.status(400).json({
				message: MESSAGE.post.fail,
				error
			});
		}

		console.log("====>payload", payload);
		const retailerInstance = await new retailerModel(payload).save();
		return res.status(200).json({
			message: MESSAGE.post.succ,
			result: retailerInstance
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.post.fail,
			error
		});
	}
};

export const getRetailer = async (req: Request, res: Response) => {
	try {
		const filter = req.query as unknown as any;

		let currentPage = 0;
		if (filter.page) {
			currentPage = parseInt(String(filter.page)); // Parse page as integer
		}

		const sortField = filter.sortField ? filter.sortField : "updatedAt";

		delete filter.page;
		delete filter.sortField;

		console.log("===>filter", filter);

		const totalCount = await retailerModel.countDocuments(filter);

		const limit = currentPage > 0 ? 10 : totalCount;
		const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;

		const retailers = await retailerModel.find(filter)
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
			result: retailers
		});
	} catch (error) {
		console.error("Error fetching retailers:", error);
		res.status(400).json({
			message: MESSAGE.get.fail
		});
	}
};

export const updatePassword = async (req: Request, res: Response) => {
	try {
		const { retailerId, newPassword } = req.body;

		const retailer = await retailerModel.findById(retailerId);

		if (!retailer) {
			return res.status(404).json({
				message: MESSAGE.patch.fail
			});
		}

		// const isMatch = await bcrypt.compare(currentPassword, retailer.password);

		// if (!isMatch) {
		//   return res.status(400).json({
		//     message: MESSAGE.patch.custom("Current password is incorrect"),
		//   });
		// }

		// const salt = await bcrypt.genSalt(10);
		// const hashedPassword = await bcrypt.hash(newPassword, salt);

		await retailerModel.updateOne({ _id: retailerId }, { $set: { password: newPassword } });

		return res.status(200).json({
			message: MESSAGE.patch.succ,
			result: retailer
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.patch.fail,
			error
		});
	}
};

export const loginRetailer = async (req: Request, res: Response) => {
	try {
		const { identifier, password } = req.body;

		const retailer = await retailerModel.findOne({
			$or: [{ contact_email: identifier }, { contact_phone_number: identifier }]
		});

		if (retailer) {
			if (retailer.password === password) {
				return res.status(200).json({
					message: MESSAGE.post.succ,
					result: retailer
				});
			}
		}
		return res.status(404).json({
			message: MESSAGE.post.fail
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.post.fail,
			error
		});
	}
};
