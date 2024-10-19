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
exports.searchWholesalerProduct = exports.searchProductByName = void 0;
const http_status_codes_1 = require("http-status-codes");
const message_1 = require("../../../../constants/message");
const product_model_1 = __importDefault(require("../../../../models/product.model"));
const brand_model_1 = __importDefault(require("../../../../models/brand.model"));
const category_model_1 = __importDefault(require("../../../../models/category.model"));
const subcategory_model_1 = __importDefault(require("../../../../models/subcategory.model"));
const searchProductByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                message: message_1.MESSAGE.get.fail,
                error: "Product name is required."
            });
        }
        const searchTerm = name.trim();
        const regex = new RegExp(searchTerm, 'i');
        const productsByName = yield product_model_1.default.find({ product_name: { $regex: regex } })
            .populate('brand_object_id', 'name');
        //Brands
        const matchingBrands = yield brand_model_1.default.find({ name: { $regex: regex } });
        const brandIds = matchingBrands.map(brand => brand._id);
        const productsByBrand = yield product_model_1.default.find({ brand_object_id: { $in: brandIds } })
            .populate('brand_object_id', 'name');
        //Category
        const matchingCategory = yield category_model_1.default.find({ name: { $regex: regex } });
        const categoryIds = matchingCategory.map(category => category._id);
        const productsByCategory = yield product_model_1.default.find({ category_object_id: { $in: categoryIds } })
            .populate('category_object_id', 'name');
        const allProducts = [...productsByName, ...productsByBrand, ...productsByCategory];
        const uniqueProductsMap = new Map();
        allProducts.forEach(product => {
            uniqueProductsMap.set(product._id.toString(), product);
        });
        const uniqueProducts = Array.from(uniqueProductsMap.values());
        if (uniqueProducts.length === 0) {
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                message: message_1.MESSAGE.get.fail,
                error: "No products found."
            });
        }
        res.status(http_status_codes_1.StatusCodes.OK).json({
            message: message_1.MESSAGE.get.succ,
            result: uniqueProducts
        });
    }
    catch (error) {
        console.error("Error searching for products by name:", error);
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: message_1.MESSAGE.get.fail,
            error: "An error occurred while searching for products."
        });
    }
});
exports.searchProductByName = searchProductByName;
const searchWholesalerProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, type, page = 1, limit = 10 } = req.query;
        if (!type) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                message: message_1.MESSAGE.get.fail,
                error: "'type' is required."
            });
        }
        const pageNumber = parseInt(page, 10) || 1;
        const limitNumber = parseInt(limit, 10) || 10;
        const skip = (pageNumber - 1) * limitNumber;
        let searchResult;
        let totalResults = 0;
        // Check the type and whether to search by name or fetch all
        switch (type) {
            case 'brand':
                if (name) {
                    const searchTerm = name.trim();
                    const regex = new RegExp(searchTerm, 'i');
                    totalResults = yield brand_model_1.default.countDocuments({ name: { $regex: regex } });
                    searchResult = yield brand_model_1.default.find({ name: { $regex: regex } })
                        .skip(skip)
                        .limit(limitNumber);
                }
                else {
                    totalResults = yield brand_model_1.default.countDocuments({});
                    searchResult = yield brand_model_1.default.find({})
                        .skip(skip)
                        .limit(limitNumber);
                }
                break;
            case 'category':
                if (name) {
                    const searchTerm = name.trim();
                    const regex = new RegExp(searchTerm, 'i');
                    totalResults = yield category_model_1.default.countDocuments({ name: { $regex: regex } });
                    searchResult = yield category_model_1.default.find({ name: { $regex: regex } })
                        .skip(skip)
                        .limit(limitNumber);
                }
                else {
                    totalResults = yield category_model_1.default.countDocuments({});
                    searchResult = yield category_model_1.default.find({})
                        .skip(skip)
                        .limit(limitNumber);
                }
                break;
            case 'subcategory':
                if (name) {
                    const searchTerm = name.trim();
                    const regex = new RegExp(searchTerm, 'i');
                    totalResults = yield subcategory_model_1.default.countDocuments({ name: { $regex: regex } });
                    searchResult = yield subcategory_model_1.default.find({ name: { $regex: regex } })
                        .skip(skip)
                        .limit(limitNumber);
                }
                else {
                    totalResults = yield subcategory_model_1.default.countDocuments({});
                    searchResult = yield subcategory_model_1.default.find({})
                        .skip(skip)
                        .limit(limitNumber);
                }
                break;
            default:
                return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                    message: message_1.MESSAGE.get.fail,
                    error: "Invalid 'type' provided. Valid types are 'brand', 'category', and 'subcategory'."
                });
        }
        res.status(http_status_codes_1.StatusCodes.OK).json({
            message: message_1.MESSAGE.get.succ,
            pagination: {
                page: pageNumber,
                limit: limitNumber,
                totalResults,
                totalPages: Math.ceil(totalResults / limitNumber),
            },
            result: searchResult
        });
    }
    catch (error) {
        console.error("Error searching for wholesaler products:", error);
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: message_1.MESSAGE.get.fail,
            error: "An error occurred while searching for products."
        });
    }
});
exports.searchWholesalerProduct = searchWholesalerProduct;
