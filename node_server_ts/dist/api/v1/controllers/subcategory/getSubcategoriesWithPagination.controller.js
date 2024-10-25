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
exports.getSubcategories = void 0;
const message_1 = require("../../../../constants/message");
const subcategory_model_1 = __importDefault(require("../../../../models/subcategory.model"));
const http_status_codes_1 = require("http-status-codes");
const getSubcategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = req.query;
        let currentPage = 0;
        if (filter.page) {
            currentPage = parseInt(String(filter.page)); // Parse page as integer
        }
        const sortField = filter.sortField ? filter.sortField : "updatedAt";
        const _limit = filter.limit ? parseInt(String(filter.limit)) : 10;
        delete filter.page;
        delete filter.sortField;
        delete filter.limit;
        console.log("===>Sub Category Filter", filter);
        const totalCount = yield subcategory_model_1.default.countDocuments(filter);
        let subcategories;
        const limit = currentPage > 0 ? _limit : totalCount;
        const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;
        if (filter.name) {
            const searchTerm = filter.name.trim();
            const regex = new RegExp(searchTerm, 'i');
            const searchConditions = filter.name
                ? Object.assign(Object.assign({}, filter), { name: { $regex: new RegExp(filter.name.trim(), 'i') } }) : filter;
            subcategories = yield subcategory_model_1.default.find(searchConditions)
                .sort({ [sortField]: -1 })
                .skip(startIndex)
                .limit(limit);
        }
        else {
            subcategories = yield subcategory_model_1.default.find(filter)
                .sort({ [sortField]: -1 })
                .skip(startIndex)
                .limit(limit);
        }
        const pagination = {
            currentPage,
            pageCount: Math.ceil(totalCount / limit)
        };
        res.status(http_status_codes_1.StatusCodes.OK).json({
            message: message_1.MESSAGE.get.succ,
            pagination: pagination,
            result: subcategories
        });
    }
    catch (error) {
        console.error("Error fetching categories:", error);
        res.status(400).json({
            message: message_1.MESSAGE.get.fail
        });
    }
});
exports.getSubcategories = getSubcategories;
