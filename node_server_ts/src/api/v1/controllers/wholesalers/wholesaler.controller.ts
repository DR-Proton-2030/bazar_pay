import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import { uploadImageService } from "../../../../services/uploadImageService";
import { DEFAULT_IMAGE } from "../../../../constants/image";
import WholesalerModel from "../../../../models/wholesaler.model";

export const getWholeSaler = async (req: Request, res: Response) => {
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

		const totalCount = await WholesalerModel.countDocuments(filter);

		const limit = currentPage > 0 ? 5 : totalCount;
		const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;

		const builders = await WholesalerModel.find(filter)
			.sort({ [sortField]: -1 })
			.skip(startIndex)
			.limit(limit);

		res.status(200).json({
			message: MESSAGE.get.succ,
			pagination: {
				total: totalCount,
				currentPage: currentPage
			},
			result: builders
		});
	} catch (error) {
		console.error("Error fetching wholesalers:", error);
		res.status(400).json({
			message: MESSAGE.get.fail
		});
	}
};

export const createWholesaler = async (req: Request, res: Response) => {
	try {
		if (
			!req.files ||
			!("logo" in req.files) ||
			!("sign_board_photo" in req.files) ||
			!("wholesaler_owner_photo" in req.files) ||
			!("nid_photo" in req.files)
		) {
			console.log("====>not found");
			return res.status(404).json({
				message: MESSAGE.post.custom("img not found")
			});
		}
		console.log(req.files);
		const logo = req.files["logo"] ? req.files["logo"][0] : null;
		const sign_board_photo = req.files["sign_board_photo"][0];
		const wholesaler_owner_photo = req.files["wholesaler_owner_photo"][0];
		const trade_licensce_photo = req.files["trade_licensce_photo"] ? req.files["trade_licensce_photo"][0] : null;
		const nid = req.files["nid_photo"][0];

		const { wholesalerDetails } = req.body;
		console.log("====>req.files", wholesalerDetails);
		let _payload: any = {};
		try {
			_payload = JSON.parse(wholesalerDetails);
		} catch (error) {
			console.log("wholesalerDetails", error);
		}

		// Converting files to buffer
		const logoBuffer = logo ? logo.buffer : null;
		const signBoardBuffer = sign_board_photo.buffer;
		const ownerPhotoBuffer = wholesaler_owner_photo.buffer;
		const tradeLicensceBuffer = trade_licensce_photo ? trade_licensce_photo.buffer : null;
		const nidBuffer = nid.buffer;

		const existingWholesaler = await WholesalerModel.findOne({
			trade_licensce_number: _payload.trade_licensce_number
		});

		if (existingWholesaler) {
			return res.status(409).json({
				message: MESSAGE.post.sameEntry
			});
		}
		let payload = {};

		try {
			const logoUrl = logoBuffer ? await uploadImageService("logo", logoBuffer) : DEFAULT_IMAGE;
			const signBoardUrl = await uploadImageService("sign_board", signBoardBuffer);
			const ownerPhotoUrl = await uploadImageService("owner_photo", ownerPhotoBuffer);

			const tradeLicensceUrl = tradeLicensceBuffer
				? await uploadImageService("trade_licensce", tradeLicensceBuffer)
				: DEFAULT_IMAGE;
			const nidUrl = await uploadImageService("nid", nidBuffer);

			payload = {
				..._payload,
				// wholesaler_number: totalCount + 1,
				sign_board_photo: signBoardUrl,
				wholesaler_owner_photo: ownerPhotoUrl,
				logo: logoUrl,
				trade_licensce_photo: tradeLicensceUrl,
				nid_photo: nidUrl,
				status: "PENDING"
			};
		} catch (error) {
			console.log("===>error", error);
			return res.status(400).json({
				message: MESSAGE.post.fail,
				error
			});
		}
		// const totalCount = await WholesalerModel.countDocuments({});

		console.log("====>payload", payload);
		const wholesalerInstance = await new WholesalerModel(payload).save();

		return res.status(200).json({
			message: MESSAGE.post.succ,
			result: wholesalerInstance
		});
	} catch (error) {
		console.log("===>error", error);
		return res.status(400).json({
			message: MESSAGE.post.fail,
			error
		});
	}
};

export const updateWholesalerStatus = async (req: Request, res: Response) => {
	try {
		const { id, approval_status } = req.body;

		const updatedWholesaler = await WholesalerModel.findByIdAndUpdate(id, { approval_status }, { new: true });

		if (!updatedWholesaler) {
			return res.status(404).json({
				message: MESSAGE.patch.fail,
				error: "Wholesaler not found"
			});
		}

		res.status(200).json({
			message: MESSAGE.patch.succ,
			result: updatedWholesaler
		});
	} catch (error) {
		console.error("Error updating wholesaler status:", error);
		res.status(400).json({
			message: MESSAGE.patch.fail,
			error
		});
	}
};
