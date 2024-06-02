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
exports.getProductList = exports.createProduct = void 0;
const uploadImageService_1 = require("../../../../services/uploadImageService");
const product_model_1 = __importDefault(require("../../../../models/product.model"));
const message_1 = require("../../../../constants/message");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files ||
            !("product_image" in req.files) ||
            !("bar_code_photo" in req.files)) {
            return res.status(404).json({
                message: "Product image or bar code photo not found",
            });
        }
        const product_image = req.files["product_image"][0];
        const bar_code_photo = req.files["bar_code_photo"][0];
        const { productDetails, wholesalerSaler_id } = req.body;
        const productPayload = JSON.parse(productDetails);
        const productImageBuffer = product_image.buffer;
        const barCodePhotoBuffer = bar_code_photo.buffer;
        let payload = {};
        try {
            const productImageUrl = yield (0, uploadImageService_1.uploadImageService)("product_image", productImageBuffer);
            const barCodePhotoUrl = yield (0, uploadImageService_1.uploadImageService)("bar_code_photo", barCodePhotoBuffer);
            payload = Object.assign(Object.assign({}, productPayload), { product_image: productImageUrl, bar_code_photo: barCodePhotoUrl, wholesalerSaler_id });
        }
        catch (error) {
            return res.status(400).json({
                message: message_1.MESSAGE.post.fail,
                error,
            });
        }
        try {
            const productInstance = yield new product_model_1.default(payload).save();
            return res.status(200).json({
                message: message_1.MESSAGE.post.succ,
                result: productInstance,
            });
        }
        catch (error) {
            return res.status(400).json({
                message: message_1.MESSAGE.post.fail,
                error,
            });
        }
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error,
        });
    }
});
exports.createProduct = createProduct;
// export const getAllProducts = async (req: Request, res: Response) => {
//   const { page = 1 } = req.query; // Default to page 1 if not provided
//   const limit = 5; // Limit to 5 products per page
//   try {
//     const products = await productModel
//       .find()
//       .skip((Number(page) - 1) * limit)
//       .limit(limit)
//       .exec();
//     const totalProducts = await productModel.countDocuments().exec();
//     const totalPages = Math.ceil(totalProducts / limit);
//     return res.status(200).json({
//       message: MESSAGE.get.succ,
//       result: products,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: MESSAGE.get.fail,
//       error,
//     });
//   }
// };
const getProductList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const totalCount = yield product_model_1.default.countDocuments(filter);
        const limit = currentPage > 0 ? 5 : totalCount;
        const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;
        const products = yield product_model_1.default.find(filter)
            .sort({ [sortField]: -1 })
            .skip(startIndex)
            .limit(limit);
        res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            pagination: {
                total: totalCount,
                currentPage: currentPage,
            },
            result: products,
        });
    }
    catch (error) {
        console.error("Error fetching businesses:", error);
        res.status(400).json({
            message: message_1.MESSAGE.get.fail,
        });
    }
});
exports.getProductList = getProductList;
