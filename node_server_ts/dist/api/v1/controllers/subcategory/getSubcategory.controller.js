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
exports.searchBySubCategory = exports.getSubcategory = void 0;
const message_1 = require("../../../../constants/message");
const http_status_codes_1 = require("http-status-codes");
const subcategory_model_1 = __importDefault(require("../../../../models/subcategory.model"));
const getSubcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category_object_id } = req.query;
        const subCategoryInstance = yield subcategory_model_1.default.find({ category_object_id });
        if (!subCategoryInstance) {
            return res.status(400).json({
                message: message_1.MESSAGE.custom("Subcategory not found for the provided category_object_id")
            });
        }
        return res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            result: subCategoryInstance
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.get.fail,
            error
        });
    }
});
exports.getSubcategory = getSubcategory;
const searchBySubCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, page = 1, limit = 10 } = req.query;
        const pageNumber = parseInt(page, 10) || 1;
        const limitNumber = parseInt(limit, 10) || 10;
        const skip = (pageNumber - 1) * limitNumber;
        let searchResult;
        let totalResults = 0;
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
exports.searchBySubCategory = searchBySubCategory;
