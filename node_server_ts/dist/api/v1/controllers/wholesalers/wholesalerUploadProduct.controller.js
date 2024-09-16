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
exports.getProductsByProductId = exports.uploadProduct = void 0;
const message_1 = require("../../../../constants/message");
const wholesalerListedproduct_model_1 = __importDefault(require("../../../../models/wholesalerListedproduct.model"));
const uploadProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product_object_id, wholesaler_object_id, buying_price, marked_price, discount, selling_price, current_stock, selling_status } = req.body;
        const payload = {
            product_object_id,
            wholesaler_object_id,
            buying_price,
            marked_price,
            discount,
            selling_price,
            current_stock,
            selling_status
        };
        const productInstance = yield new wholesalerListedproduct_model_1.default(payload).save();
        return res.status(200).json({
            message: message_1.MESSAGE.post.succ,
            result: productInstance
        });
    }
    catch (error) {
        console.error("Error uploading wholesaler product:", error);
        return res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error
        });
    }
});
exports.uploadProduct = uploadProduct;
const getProductsByProductId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.query;
        const products = yield wholesalerListedproduct_model_1.default.find({ product_object_id: productId })
            .populate('wholesaler')
            .exec();
        return res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            result: products
        });
    }
    catch (error) {
        console.error("Error :", error);
        return res.status(400).json({
            message: message_1.MESSAGE.get.fail,
            error
        });
    }
});
exports.getProductsByProductId = getProductsByProductId;
