import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import { uploadImageService } from "../../../../services/uploadImageService";
import wholesalerModel from "../../../../models/wholesaler.model";
import { DEFAULT_IMAGE } from "../../../../constants/image";

export const getWholeSaler = async (req: Request, res: Response) => {
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

		const totalCount = await wholesalerModel.countDocuments(filter);

		const limit = currentPage > 0 ? 5 : totalCount;
		const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;

		const builders = await wholesalerModel
			.find(filter)
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

// export const getBuilderDetailsById = async (req: Request, res: Response) => {
//   try {
//     const { builder_id } = req.query;
//     const builderInstance = await BuilderModel.findById(builder_id);
//     res.status(200).json({
//       message: MESSAGE.get.succ,
//       result: builderInstance,
//     });
//   } catch (error) {
//     console.error("Error fetching businesses:", error);
//     res.status(400).json({
//       message: MESSAGE.get.fail,
//     });
//   }
// };

export const createWholesaler = async (req: Request, res: Response) => {
	try {
		if (
			!req.files ||
			// !("logo" in req.files) ||
			!("sign_board" in req.files) ||
			!("owner_photo" in req.files) ||
			// !("trade_licensce" in req.files) ||
			!("nid" in req.files)

			// !("visiting_card" in req.files)
		) {
			return res.status(404).json({
				message: MESSAGE.post.custom("img not found")
			});
		}
		console.log(req.files);
		const logo = req.files["logo"] ? req.files["logo"][0] : null;
		const sign_board = req.files["sign_board"][0];
		const owner_photo = req.files["owner_photo"][0];
		const trade_licensce = req.files["trade_licensce"] ? req.files["trade_licensce"][0] : null;
		const nid = req.files["nid"][0];
		const visiting_card = req.files["visiting_card"] ? req.files["visiting_card"][0] : null;

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
		const signBoardBuffer = sign_board.buffer;
		const ownerPhotoBuffer = owner_photo.buffer;
		const tradeLicensceBuffer = trade_licensce ? trade_licensce.buffer : null;
		const nidBuffer = nid.buffer;
		const visiting_cardBuffer = visiting_card ? visiting_card.buffer : null;

		const existingWholesaler = await wholesalerModel.findOne({
			trade_licensce_number: _payload.trade_licensce_number
		});

		if (existingWholesaler) {
			if (existingWholesaler.nid_number === _payload.nid_number) {
				return res.status(409).json({
					message: MESSAGE.post.sameEntry
				});
			}
			return res.status(200).json({
				message: MESSAGE.post.succ,
				result: existingWholesaler
			});
		}
		let payload = {};
		console.log("====>before payload", payload);

		try {
			const logoUrl = logoBuffer ? await uploadImageService("logo", logoBuffer) : DEFAULT_IMAGE;
			const signBoardUrl = await uploadImageService("sign_board", signBoardBuffer);
			const ownerPhotoUrl = await uploadImageService("owner_photo", ownerPhotoBuffer);
			const tradeLicensceUrl = tradeLicensceBuffer
				? await uploadImageService("trade_licensce", tradeLicensceBuffer)
				: DEFAULT_IMAGE;
			const nidUrl = await uploadImageService("nid", nidBuffer);
			const visiting_card_url = visiting_cardBuffer
				? await uploadImageService("visiting_card", visiting_cardBuffer)
				: DEFAULT_IMAGE;

			payload = {
				..._payload,
				// wholesaler_number: totalCount + 1,
				sign_board_photo: signBoardUrl,
				owner_photo: ownerPhotoUrl,
				logo: logoUrl,
				trade_licensce_photo: tradeLicensceUrl,
				nid_photo: nidUrl,
				visiting_card_photo: visiting_card_url
			};
		} catch (error) {
			return res.status(400).json({
				message: MESSAGE.post.fail,
				error
			});
		}
		// const totalCount = await wholesalerModel.countDocuments({});

		console.log("====>payload", payload);
		const wholesalerInstance = await new wholesalerModel(payload).save();

		return res.status(200).json({
			message: MESSAGE.post.succ,
			result: wholesalerInstance
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.post.fail,
			error
		});
	}
};

// export const getBuilderNameWithID = async (req: Request, res: Response) => {
//   try {
//     const builderList = await BuilderModel.find({}, { builder_name: 1 });
//     return res.status(200).json({
//       message: MESSAGE.get.succ,
//       result: builderList,
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: MESSAGE.get.fail,
//       error,
//     });
//   }
// };
