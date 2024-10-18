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
exports.createProductByAdmin = void 0;
const http_status_codes_1 = require("http-status-codes");
const message_1 = require("../../../../constants/message");
const uploadImageService_1 = require("../../../../services/uploadImageService");
const subcategory_model_1 = __importDefault(require("../../../../models/subcategory.model"));
const brand_model_1 = __importDefault(require("../../../../models/brand.model"));
const product_model_1 = __importDefault(require("../../../../models/product.model"));
const parser_1 = __importDefault(require("datauri/parser"));
const parser = new parser_1.default();
const createProductByAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files || !("product_image" in req.files)) {
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                message: message_1.MESSAGE.post.custom("Product Image not found!")
            });
        }
        const { productDetails } = req.body;
        const productPayload = JSON.parse(productDetails);
        const subCategoryInstance = yield subcategory_model_1.default.findOne({ _id: productPayload.subcategory_object_id });
        // if (!subCategoryInstance) {
        // 	return res.status(StatusCodes.NOT_FOUND).json({
        // 		message: MESSAGE.custom("Sub Category not found!")
        // 	});
        // }
        // Checking the Category Id of the Product details with Sub Category Details
        // if (String(productPayload.category_object_id) !== String(subCategoryInstance.category_object_id)) {
        // 	return res.status(StatusCodes.NOT_FOUND).json({
        // 		message: MESSAGE.custom("Category not matched with sub category!")
        // 	});
        // }
        const brandInstance = yield brand_model_1.default.findOne({ _id: productPayload.brand_object_id });
        // if (!brandInstance) {
        // 	return res.status(StatusCodes.NOT_FOUND).json({
        // 		message: MESSAGE.custom("Brand not found!")
        // 	});
        // }
        // const productImage = req.files["product_image"][0];
        // const productImageBuffer = productImage.buffer;
        // let productUrl: string = "";
        // try {
        // 	productUrl = await uploadImageToS3Service("productImage", productImageBuffer) || "";
        // } catch (error) {
        // 	return res.status(StatusCodes.BAD_REQUEST).json({
        // 		message: MESSAGE.post.fail
        // 	});
        // }
        const images = yield Promise.all(req.files["product_image"].map((file) => __awaiter(void 0, void 0, void 0, function* () {
            const productUrl = (yield (0, uploadImageService_1.uploadImageToS3Service)("productImage", file.buffer)) || "";
            return productUrl;
        })));
        const productInstancePayload = Object.assign(Object.assign({}, productPayload), { product_image: images, category_object_id: subCategoryInstance.category_object_id, brand_object_id: brandInstance._id, subcategory_object_id: subCategoryInstance._id });
        const productInstance = yield new product_model_1.default(productInstancePayload).save();
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: message_1.MESSAGE.post.succ,
            result: productInstance
        });
    }
    catch (error) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            message: message_1.MESSAGE.post.fail,
            error
        });
    }
});
exports.createProductByAdmin = createProductByAdmin;
