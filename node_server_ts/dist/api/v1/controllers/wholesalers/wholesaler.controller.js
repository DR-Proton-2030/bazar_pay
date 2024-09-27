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
exports.deleteWholesaler = exports.updateWholesalerStatus = exports.createWholesaler = exports.getWholeSaler = void 0;
const message_1 = require("../../../../constants/message");
const uploadImageService_1 = require("../../../../services/uploadImageService");
const image_1 = require("../../../../constants/image");
const wholesaler_model_1 = __importDefault(require("../../../../models/wholesaler.model"));
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
        const limit = currentPage > 0 ? 10 : totalCount;
        const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;
        const builders = yield wholesaler_model_1.default.find(filter)
            .sort({ [sortField]: -1 })
            .skip(startIndex)
            .limit(limit);
        res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            pagination: {
                total: totalCount,
                currentPage: currentPage
            },
            result: builders
        });
    }
    catch (error) {
        console.error("Error fetching wholesalers:", error);
        res.status(400).json({
            message: message_1.MESSAGE.get.fail
        });
    }
});
exports.getWholeSaler = getWholeSaler;
const createWholesaler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files ||
            !("logo" in req.files) ||
            !("sign_board_photo" in req.files) ||
            !("wholesaler_owner_photo" in req.files) ||
            !("nid_photo" in req.files)) {
            console.log("====>not found");
            return res.status(404).json({
                message: message_1.MESSAGE.post.custom("img not found")
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
        let _payload = {};
        try {
            _payload = JSON.parse(wholesalerDetails);
        }
        catch (error) {
            console.log("wholesalerDetails", error);
        }
        // Converting files to buffer
        const logoBuffer = logo ? logo.buffer : null;
        const signBoardBuffer = sign_board_photo.buffer;
        const ownerPhotoBuffer = wholesaler_owner_photo.buffer;
        const tradeLicensceBuffer = trade_licensce_photo ? trade_licensce_photo.buffer : null;
        const nidBuffer = nid.buffer;
        const existingWholesaler = yield wholesaler_model_1.default.findOne({
            trade_licensce_number: _payload.trade_licensce_number
        });
        if (existingWholesaler) {
            return res.status(409).json({
                message: message_1.MESSAGE.post.sameEntry
            });
        }
        let payload = {};
        try {
            const logoUrl = logoBuffer ? yield (0, uploadImageService_1.uploadImageToS3Service)("logo", logoBuffer) : image_1.DEFAULT_IMAGE;
            const signBoardUrl = yield (0, uploadImageService_1.uploadImageToS3Service)("sign_board", signBoardBuffer);
            const ownerPhotoUrl = yield (0, uploadImageService_1.uploadImageToS3Service)("owner_photo", ownerPhotoBuffer);
            const tradeLicensceUrl = tradeLicensceBuffer
                ? yield (0, uploadImageService_1.uploadImageToS3Service)("trade_licensce", tradeLicensceBuffer)
                : image_1.DEFAULT_IMAGE;
            const nidUrl = yield (0, uploadImageService_1.uploadImageToS3Service)("nid", nidBuffer);
            payload = Object.assign(Object.assign({}, _payload), { 
                // wholesaler_number: totalCount + 1,
                sign_board_photo: signBoardUrl, wholesaler_owner_photo: ownerPhotoUrl, logo: logoUrl, trade_licensce_photo: tradeLicensceUrl, nid_photo: nidUrl, status: "PENDING" });
        }
        catch (error) {
            console.log("===>error", error);
            return res.status(400).json({
                message: message_1.MESSAGE.post.fail,
                error
            });
        }
        // const totalCount = await WholesalerModel.countDocuments({});
        console.log("====>payload", payload);
        const wholesalerInstance = yield new wholesaler_model_1.default(payload).save();
        return res.status(200).json({
            message: message_1.MESSAGE.post.succ,
            result: wholesalerInstance
        });
    }
    catch (error) {
        console.log("===>error", error);
        return res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error
        });
    }
});
exports.createWholesaler = createWholesaler;
const updateWholesalerStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, approval_status } = req.body;
        const updatedWholesaler = yield wholesaler_model_1.default.findByIdAndUpdate(id, { approval_status }, { new: true });
        if (!updatedWholesaler) {
            return res.status(404).json({
                message: message_1.MESSAGE.patch.fail,
                error: "Wholesaler not found"
            });
        }
        res.status(200).json({
            message: message_1.MESSAGE.patch.succ,
            result: updatedWholesaler
        });
    }
    catch (error) {
        console.error("Error updating wholesaler status:", error);
        res.status(400).json({
            message: message_1.MESSAGE.patch.fail,
            error
        });
    }
});
exports.updateWholesalerStatus = updateWholesalerStatus;
const deleteWholesaler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { wholesalerId } = req.params;
        const deletedWholesaler = yield wholesaler_model_1.default.findByIdAndDelete(wholesalerId);
        if (!deletedWholesaler) {
            return res.status(404).json({
                message: message_1.MESSAGE.delete.fail,
                error: "Wholesaler not found"
            });
        }
        res.status(200).json({
            message: message_1.MESSAGE.delete.succ,
            result: deletedWholesaler
        });
    }
    catch (error) {
        console.error("Error deleting wholesaler:", error);
        res.status(400).json({
            message: message_1.MESSAGE.delete.fail,
            error
        });
    }
});
exports.deleteWholesaler = deleteWholesaler;
