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
exports.getAggregatedSubcategory = void 0;
const http_status_codes_1 = require("http-status-codes");
const category_model_1 = __importDefault(require("../../../../models/category.model"));
const message_1 = require("../../../../constants/message");
const getAggregatedSubcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const limit = 10;
        const subCategory = {};
        const aggregatedSubcategoryInstance = yield category_model_1.default.aggregate([
            { $match: subCategory },
            {
                $lookup: {
                    from: "sub_categories",
                    localField: "_id",
                    foreignField: "category_object_id",
                    as: "subcategoryInstance"
                }
            },
            // { $unwind: { path: "$subcategoryInstance", preserveNullAndEmptyArrays: true } },
            { $limit: limit }
        ]);
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: message_1.MESSAGE.get.succ,
            result: aggregatedSubcategoryInstance
        });
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            message: message_1.MESSAGE.get.fail,
            result: null
        });
    }
});
exports.getAggregatedSubcategory = getAggregatedSubcategory;
