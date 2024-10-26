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
exports.getLowestStockProductsByWholesaler = exports.getAllListedProducts = exports.getEachWholesalerListedProducts = void 0;
const message_1 = require("../../../../constants/message");
const http_status_codes_1 = require("http-status-codes");
const wholesalerListedproduct_model_1 = __importDefault(require("../../../../models/wholesalerListedproduct.model"));
const getEachWholesalerListedProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filter } = req.query;
        let wholesalerListedProductInstance = yield wholesalerListedproduct_model_1.default
            .findOne({ filter })
            .populate("wholesaler")
            .populate({
            path: 'product',
            populate: [
                {
                    path: 'brand_object_id',
                    model: 'brands' // Populating from Brand model
                },
                {
                    path: 'category_object_id',
                    model: 'categories' // Populating from Category model
                },
                {
                    path: 'subcategory_object_id',
                    model: 'sub_categories' // Populating from Sub Category model
                }
            ]
        })
            .lean();
        if (!wholesalerListedProductInstance) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                message: message_1.MESSAGE.custom("Wholesaler Listed Product not found!")
            });
        }
        else {
            const result = Object.assign(Object.assign({}, wholesalerListedProductInstance), { brand_details: wholesalerListedProductInstance.product.brand_object_id, product_details: wholesalerListedProductInstance.product });
            // Remove the original references if not needed
            delete result.product.brand_object_id;
            delete result.product.category_object_id;
            delete result.product.subcategory_object_id;
            delete result.product_object_id;
            wholesalerListedProductInstance = result;
        }
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: message_1.MESSAGE.get.succ,
            result: wholesalerListedProductInstance
        });
    }
    catch (error) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            message: message_1.MESSAGE.get.fail,
            error
        });
    }
});
exports.getEachWholesalerListedProducts = getEachWholesalerListedProducts;
const getAllListedProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = req.query;
        const ProductList = yield wholesalerListedproduct_model_1.default.find(filter)
            .populate("product");
        return res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            result: ProductList
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            message: message_1.MESSAGE.get.fail,
            error
        });
    }
});
exports.getAllListedProducts = getAllListedProducts;
const getLowestStockProductsByWholesaler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Extract wholesalerId from query parameters
        const { wholesalerId } = req.query;
        // Ensure wholesalerId is provided
        if (!wholesalerId) {
            return res.status(400).json({
                message: "Wholesaler ID is required."
            });
        }
        // Create a filter object based on wholesalerId
        const filter = { wholesaler_object_id: wholesalerId }; // Convert wholesalerId to ObjectId
        // Log the filter to verify its structure
        console.log("Filter:", filter);
        const ProductList = yield wholesalerListedproduct_model_1.default.aggregate([
            { $match: filter },
            { $sort: { current_stock: 1 } },
            { $limit: 10 },
            {
                $lookup: {
                    from: 'products',
                    localField: 'product',
                    foreignField: '_id',
                    as: 'productDetails', // Changed to productDetails
                }
            },
            {
                $project: {
                    current_stock: 1,
                    productDetails: 1 // Include the necessary fields
                }
            }
        ]);
        return res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            result: ProductList,
        });
    }
    catch (error) {
        console.error("Error:", error); // Log error for debugging
        return res.status(400).json({
            message: message_1.MESSAGE.get.fail,
            error,
        });
    }
});
exports.getLowestStockProductsByWholesaler = getLowestStockProductsByWholesaler;
