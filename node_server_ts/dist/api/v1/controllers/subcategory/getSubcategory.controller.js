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
exports.getSubcategory = void 0;
const message_1 = require("../../../../constants/message");
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
