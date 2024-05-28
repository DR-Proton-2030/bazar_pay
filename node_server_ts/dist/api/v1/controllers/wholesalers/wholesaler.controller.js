"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWholesaler = exports.getWholeSaler = void 0;
const message_1 = require("../../../../constants/message");
const uploadImageService_1 = require("../../../../services/uploadImageService");
const wholesaler_model_1 = __importDefault(require("../../../../models/wholesaler.model"));
const image_1 = require("../../../../constants/image");
const getWholeSaler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = req.query;
        let currentPage = 0;
        if (filter.page) {
            currentPage = parseInt(String(filter.page)); // Parse page as integer
        }
        const sortField = filter.sortField ? filter.sortField : "updatedAt";
        delete filter.page;
        delete filter.sortField;
        console.log("===>filter", filter);
        const totalCount = yield wholesaler_model_1.default.countDocuments(filter);
        const limit = currentPage > 0 ? 5 : totalCount;
        const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;
        const builders = yield wholesaler_model_1.default
            .find(filter)
            .sort({ [sortField]: -1 })
            .skip(startIndex)
            .limit(limit);
        res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            pagination: {
                total: totalCount,
                currentPage: currentPage,
            },
            result: builders,
        });
    }
    catch (error) {
        console.error("Error fetching wholesalers:", error);
        res.status(400).json({
            message: message_1.MESSAGE.get.fail,
        });
    }
});
exports.getWholeSaler = getWholeSaler;
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
const createWholesaler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files ||
            // !("logo" in req.files) ||
            !("sign_board" in req.files) ||
            !("owner_photo" in req.files) ||
            // !("trade_licensce" in req.files) ||
            !("nid" in req.files)
        // !("visiting_card" in req.files)
        ) {
            return res.status(404).json({
                message: message_1.MESSAGE.post.custom("img not found"),
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
        let _payload = {};
        try {
            _payload = JSON.parse(wholesalerDetails);
        }
        catch (error) {
            console.log("wholesalerDetails", error);
        }
        const logoBuffer = logo ? logo.buffer : null;
        const signBoardBuffer = sign_board.buffer;
        const ownerPhotoBuffer = owner_photo.buffer;
        const tradeLicensceBuffer = trade_licensce ? trade_licensce.buffer : null;
        const nidBuffer = nid.buffer;
        const visiting_cardBuffer = visiting_card ? visiting_card.buffer : null;
        const existingWholesaler = yield wholesaler_model_1.default.findOne({ trade_licensce_number: _payload.trade_licensce_number });
        if (existingWholesaler) {
            if (existingWholesaler.nid_number === _payload.nid_number) {
                return res.status(409).json({
                    message: message_1.MESSAGE.post.sameEntry,
                });
            }
            return res.status(200).json({
                message: message_1.MESSAGE.post.succ,
                result: existingWholesaler
            });
        }
        let payload = {};
        console.log("====>before payload", payload);
        try {
            const logoUrl = logoBuffer ? yield (0, uploadImageService_1.uploadImageService)("logo", logoBuffer) : image_1.DEFAULT_IMAGE;
            const signBoardUrl = yield (0, uploadImageService_1.uploadImageService)("sign_board", signBoardBuffer);
            const ownerPhotoUrl = yield (0, uploadImageService_1.uploadImageService)("owner_photo", ownerPhotoBuffer);
            const tradeLicensceUrl = tradeLicensceBuffer ? yield (0, uploadImageService_1.uploadImageService)("trade_licensce", tradeLicensceBuffer) : image_1.DEFAULT_IMAGE;
            const nidUrl = yield (0, uploadImageService_1.uploadImageService)("nid", nidBuffer);
            const visiting_card_url = visiting_cardBuffer ? yield (0, uploadImageService_1.uploadImageService)("visiting_card", visiting_cardBuffer) : image_1.DEFAULT_IMAGE;
            payload = Object.assign(Object.assign({}, _payload), { 
                // wholesaler_number: totalCount + 1,
                sign_board_photo: signBoardUrl, owner_photo: ownerPhotoUrl, logo: logoUrl, trade_licensce_photo: tradeLicensceUrl, nid_photo: nidUrl, visiting_card_photo: visiting_card_url });
        }
        catch (error) {
            return res.status(400).json({
                message: message_1.MESSAGE.post.fail,
                error,
            });
        }
        // const totalCount = await wholesalerModel.countDocuments({});
        console.log("====>payload", payload);
        const wholesalerInstance = yield new wholesaler_model_1.default(payload).save();
        return res.status(200).json({
            message: message_1.MESSAGE.post.succ,
            result: wholesalerInstance,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error,
        });
    }
});
exports.createWholesaler = createWholesaler;
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
