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
exports.getSubcategoryById = exports.getAllSubcategories = exports.deleteSubcategory = exports.updateSubcategory = exports.createSubcategory = void 0;
const subcategory_model_1 = __importDefault(require("../../../../models/subcategory.model"));
const message_1 = require("../../../../constants/message");
const query_1 = require("../../../../constants/query");
const createSubcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const newSubcategory = new subcategory_model_1.default(payload);
        yield newSubcategory.save();
        return res.status(200).json({
            message: message_1.MESSAGE.post.succ,
            result: newSubcategory
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error
        });
    }
});
exports.createSubcategory = createSubcategory;
const updateSubcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subcategoryId = req.query[query_1.QUERY_PARAMS.id];
        const updatedSubcategory = yield subcategory_model_1.default.findByIdAndUpdate(subcategoryId, req.body, { new: true });
        if (!updatedSubcategory) {
            return res.status(404).json({
                message: message_1.MESSAGE.put.fail
            });
        }
        return res.status(200).json({
            message: message_1.MESSAGE.put.succ,
            result: updatedSubcategory
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.put.fail,
            error
        });
    }
});
exports.updateSubcategory = updateSubcategory;
const deleteSubcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subcategoryId = req.query[query_1.QUERY_PARAMS.id];
        const deletedSubcategory = yield subcategory_model_1.default.findByIdAndDelete(subcategoryId);
        if (!deletedSubcategory) {
            return res.status(404).json({
                message: message_1.MESSAGE.delete.fail
            });
        }
        return res.status(200).json({
            message: message_1.MESSAGE.delete.succ,
            result: deletedSubcategory
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.delete.fail,
            error
        });
    }
});
exports.deleteSubcategory = deleteSubcategory;
const getAllSubcategories = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subcategories = yield subcategory_model_1.default.find().populate("category");
        return res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            result: subcategories
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.get.fail,
            error
        });
    }
});
exports.getAllSubcategories = getAllSubcategories;
const getSubcategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subcategoryId = req.query[query_1.QUERY_PARAMS.id];
        const subcategory = yield subcategory_model_1.default.findById(subcategoryId).populate("category");
        if (!subcategory) {
            return res.status(404).json({
                message: message_1.MESSAGE.get.fail
            });
        }
        return res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            result: subcategory
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.get.fail,
            error
        });
    }
});
exports.getSubcategoryById = getSubcategoryById;
// export const getSubcategoriesByFilter = async (req: Request, res: Response) => {
//   try {
//     const filter = req.query[QUERY_PARAMS.filter] || {};
//     const subcategories = await SubcategoryModel.find(filter).populate('category');
//     return res.status(200).json({
//       message: MESSAGE.get.succ,
//       result: subcategories,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: MESSAGE.get.fail,
//       error,
//     });
//   }
// };
