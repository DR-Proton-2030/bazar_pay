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
exports.deleteProductById = exports.getProductListForRetailers = exports.updateProductStatus = exports.updateProduct = exports.getProductList = exports.createProduct = void 0;
const uploadImageService_1 = require("../../../../services/uploadImageService");
const product_model_1 = __importDefault(require("../../../../models/product.model"));
const message_1 = require("../../../../constants/message");
const product_model_2 = __importDefault(require("../../../../models/product.model"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        let payload = {};
        try {
            const productImageUrl = yield (0, uploadImageService_1.uploadImageToS3Service)("product_image", productImageBuffer);
            const barCodePhotoUrl = yield (0, uploadImageService_1.uploadImageToS3Service)("bar_code_photo", barCodePhotoBuffer);
            payload = Object.assign(Object.assign({}, productPayload), { product_image: productImageUrl, bar_code_photo: barCodePhotoUrl, wholesalerSaler_id });
        }
        catch (error) {
            return res.status(400).json({
                message: message_1.MESSAGE.post.fail,
                error
            });
        }
        try {
            const productInstance = yield new product_model_1.default(payload).save();
            return res.status(200).json({
                message: message_1.MESSAGE.post.succ,
                result: productInstance
            });
        }
        catch (error) {
            return res.status(400).json({
                message: message_1.MESSAGE.post.fail,
                error
            });
        }
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error
        });
    }
});
exports.createProduct = createProduct;
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
        const limit = currentPage > 0 ? 10 : totalCount;
        const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;
        const products = yield product_model_1.default
            .find(filter)
            .populate("wholesaler")
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
            result: products
        });
    }
    catch (error) {
        console.error("Error fetching businesses:", error);
        res.status(400).json({
            message: message_1.MESSAGE.get.fail
        });
    }
});
exports.getProductList = getProductList;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let product_image = null;
        let bar_code_photo = null;
        if (req.files && "product_image" in req.files && "bar_code_photo" in req.files) {
            product_image = req.files["product_image"][0];
            bar_code_photo = req.files["bar_code_photo"][0];
        }
        const productImageBuffer = product_image ? product_image.buffer : null;
        const barCodePhotoBuffer = bar_code_photo ? bar_code_photo.buffer : null;
        const productImageUrl = productImageBuffer
            ? yield (0, uploadImageService_1.uploadImageToS3Service)("product_image", productImageBuffer)
            : "";
        const barCodePhotoUrl = barCodePhotoBuffer
            ? yield (0, uploadImageService_1.uploadImageToS3Service)("bar_code_photo", barCodePhotoBuffer)
            : "";
        const { productDetails, productId } = req.body;
        const _productPayload = JSON.parse(productDetails);
        let productDetailsPayload = Object.assign({}, _productPayload);
        if (productImageUrl) {
            productDetailsPayload = Object.assign(Object.assign({}, productDetailsPayload), { product_image: productImageUrl });
        }
        if (barCodePhotoUrl) {
            productDetailsPayload = Object.assign(Object.assign({}, productDetailsPayload), { bar_code_photo: barCodePhotoUrl });
        }
        const productInstance = yield product_model_1.default.findByIdAndUpdate(productId, {
            $set: productDetailsPayload
        }, { new: true });
        return res.status(200).json({
            message: message_1.MESSAGE.patch.succ,
            result: productInstance
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.patch.fail,
            error
        });
    }
});
exports.updateProduct = updateProduct;
const updateProductStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productStatus, productId } = req.body;
        console.log(productId);
        const updatedProduct = yield product_model_1.default.findByIdAndUpdate(productId, { $set: { product_status: productStatus } }, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: message_1.MESSAGE.patch.custom("Not Found") });
        }
        return res.status(200).json({ message: message_1.MESSAGE.patch.succ, result: updatedProduct });
    }
    catch (error) {
        return res.status(500).json({ message: message_1.MESSAGE.patch.fail, error });
    }
});
exports.updateProductStatus = updateProductStatus;
const getProductListForRetailers = (req, res) => { };
exports.getProductListForRetailers = getProductListForRetailers;
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.query; // Extract productId from the query string
        if (!productId) {
            return res.status(400).json({
                message: "Product ID is required"
            });
        }
        // Find and delete the product by the given productId
        const deletedProductInstance = yield product_model_2.default.findByIdAndDelete(productId);
        if (!deletedProductInstance) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        return res.status(200).json({
            message: message_1.MESSAGE.delete.succ,
            result: deletedProductInstance
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.delete.fail,
            error
        });
    }
});
exports.deleteProductById = deleteProductById;
