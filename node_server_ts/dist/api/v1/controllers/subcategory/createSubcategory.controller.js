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
exports.createSubCategory = void 0;
const http_status_codes_1 = require("http-status-codes");
const message_1 = require("../../../../constants/message");
const uploadImageService_1 = require("../../../../services/uploadImageService");
const category_model_1 = __importDefault(require("../../../../models/category.model"));
const subcategory_model_1 = __importDefault(require("../../../../models/subcategory.model"));
const createSubCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files || !("sub_category_image" in req.files)) {
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                message: message_1.MESSAGE.post.custom("Sub Category Image not found!")
            });
        }
        const { subCategoryDetails } = req.body;
        const subCategoryPayload = JSON.parse(subCategoryDetails);
        const categoryInstance = yield category_model_1.default.findOne({ _id: subCategoryPayload.category_object_id });
        if (!categoryInstance) {
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                message: message_1.MESSAGE.custom("Category does not exist")
            });
        }
        const subCategoryImage = req.files["sub_category_image"][0];
        const subCategoryImageBuffer = subCategoryImage.buffer;
        let subCategoryUrl = "";
        try {
            subCategoryUrl = yield (0, uploadImageService_1.uploadImageService)("subCategoryImage", subCategoryImageBuffer);
        }
        catch (error) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                message: message_1.MESSAGE.post.fail
            });
        }
        const SubCategoryPayload = Object.assign(Object.assign({}, subCategoryPayload), { sub_category_image: subCategoryUrl, category_object_id: categoryInstance._id });
        const subCategoryInstance = yield new subcategory_model_1.default(SubCategoryPayload).save();
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: message_1.MESSAGE.post.succ,
            result: subCategoryInstance
        });
    }
    catch (error) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            message: message_1.MESSAGE.post.fail,
            error
        });
    }
});
exports.createSubCategory = createSubCategory;
