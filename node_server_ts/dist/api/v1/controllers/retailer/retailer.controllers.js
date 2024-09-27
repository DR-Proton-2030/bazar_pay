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
exports.deleteRetailer = exports.loginRetailer = exports.updatePassword = exports.getRetailer = exports.createRetailer = void 0;
const message_1 = require("../../../../constants/message");
const retailer_model_1 = __importDefault(require("../../../../models/retailer.model"));
const uploadImageService_1 = require("../../../../services/uploadImageService");
const image_1 = require("../../../../constants/image");
const createRetailer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files ||
            !("sign_board_photo" in req.files) ||
            !("retailer_owner_photo" in req.files) ||
            !("trade_license_photo" in req.files) ||
            !("nid_photo" in req.files) ||
            !("logo" in req.files)) {
            return res.status(404).json({
                message: message_1.MESSAGE.post.custom("img not found")
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
        let _payload = {};
        try {
            _payload = JSON.parse(retailerDetails);
        }
        catch (error) {
            console.log("retailerDetails", error);
        }
        const signBoardBuffer = sign_board.buffer;
        const ownerPhotoBuffer = owner_photo.buffer;
        const tradeLicensceBuffer = trade_license ? trade_license.buffer : null;
        const nidBuffer = nid.buffer;
        const logoBuffer = logo.buffer;
        const existingretailer = yield retailer_model_1.default.findOne({ trade_license_number: _payload.trade_license_number });
        if (existingretailer) {
            if (existingretailer.nid_number === _payload.nid_number) {
                return res.status(409).json({
                    message: message_1.MESSAGE.post.sameEntry
                });
            }
            return res.status(200).json({
                message: message_1.MESSAGE.post.succ,
                result: existingretailer
            });
        }
        let payload = {};
        console.log("====>before payload", payload);
        try {
            const signBoardUrl = yield (0, uploadImageService_1.uploadImageToS3Service)("sign_board_photo", signBoardBuffer);
            const ownerPhotoUrl = yield (0, uploadImageService_1.uploadImageToS3Service)("retailer_owner_photo", ownerPhotoBuffer);
            const tradeLicensceUrl = tradeLicensceBuffer
                ? yield (0, uploadImageService_1.uploadImageToS3Service)("trade_license_photo", tradeLicensceBuffer)
                : image_1.DEFAULT_IMAGE;
            const nidUrl = yield (0, uploadImageService_1.uploadImageToS3Service)("nid_photo", nidBuffer);
            const logoUrl = yield (0, uploadImageService_1.uploadImageToS3Service)("logo", logoBuffer);
            payload = Object.assign(Object.assign({}, _payload), { sign_board_photo: signBoardUrl, retailer_owner_photo: ownerPhotoUrl, trade_license_photo: tradeLicensceUrl, nid_photo: nidUrl, logo: logoUrl });
        }
        catch (error) {
            return res.status(400).json({
                message: message_1.MESSAGE.post.fail,
                error
            });
        }
        console.log("====>payload", payload);
        const retailerInstance = yield new retailer_model_1.default(payload).save();
        return res.status(200).json({
            message: message_1.MESSAGE.post.succ,
            result: retailerInstance
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error
        });
    }
});
exports.createRetailer = createRetailer;
const getRetailer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const totalCount = yield retailer_model_1.default.countDocuments(filter);
        const limit = currentPage > 0 ? 10 : totalCount;
        const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;
        const retailers = yield retailer_model_1.default.find(filter)
            .sort({ [sortField]: -1 })
            .skip(startIndex)
            .limit(limit);
        const pagination = {
            currentPage: currentPage,
            pageCount: Math.ceil(totalCount / limit)
        };
        res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            pagination,
            result: retailers
        });
    }
    catch (error) {
        console.error("Error fetching retailers:", error);
        res.status(400).json({
            message: message_1.MESSAGE.get.fail
        });
    }
});
exports.getRetailer = getRetailer;
const updatePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { retailerId, newPassword } = req.body;
        const retailer = yield retailer_model_1.default.findById(retailerId);
        if (!retailer) {
            return res.status(404).json({
                message: message_1.MESSAGE.patch.fail
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
        yield retailer_model_1.default.updateOne({ _id: retailerId }, { $set: { password: newPassword } });
        return res.status(200).json({
            message: message_1.MESSAGE.patch.succ,
            result: retailer
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.patch.fail,
            error
        });
    }
});
exports.updatePassword = updatePassword;
const loginRetailer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { identifier, password } = req.body;
        const retailer = yield retailer_model_1.default.findOne({
            $or: [{ contact_email: identifier }, { contact_phone_number: identifier }]
        });
        if (retailer) {
            if (retailer.password === password) {
                return res.status(200).json({
                    message: message_1.MESSAGE.post.succ,
                    result: retailer
                });
            }
        }
        return res.status(404).json({
            message: message_1.MESSAGE.post.fail
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error
        });
    }
});
exports.loginRetailer = loginRetailer;
const deleteRetailer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { retailerId } = req.params;
        const deleteRetailerInstance = yield retailer_model_1.default.findByIdAndDelete(retailerId);
        if (!deleteRetailerInstance) {
            return res.status(404).json({
                message: message_1.MESSAGE.delete.fail
            });
        }
        return res.status(200).json({
            message: message_1.MESSAGE.delete.succ,
            result: deleteRetailerInstance
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.delete.fail,
            error
        });
    }
});
exports.deleteRetailer = deleteRetailer;
