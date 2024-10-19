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
exports.searchByCategory = exports.deleteCategoryById = exports.getCategories = exports.getCategoryById = exports.editCategoryById = exports.createCategory = void 0;
const message_1 = require("../../../../constants/message");
const uploadImageService_1 = require("../../../../services/uploadImageService");
const category_model_1 = __importDefault(require("../../../../models/category.model"));
const subcategory_model_1 = __importDefault(require("../../../../models/subcategory.model"));
const product_model_1 = __importDefault(require("../../../../models/product.model"));
const http_status_codes_1 = require("http-status-codes");
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files || !("logo" in req.files)) {
            return res.status(404).json({
                message: message_1.MESSAGE.post.custom("logo not found")
            });
        }
        const { categoryDetails } = req.body;
        const categoryPayload = JSON.parse(categoryDetails);
        const existingBrand = yield category_model_1.default.findOne({ name: categoryPayload.name });
        if (existingBrand) {
            return res.status(409).json({
                message: message_1.MESSAGE.custom(`Brand with the same name already exists.`)
            });
        }
        const logo = req.files["logo"][0];
        const logoBuffer = logo.buffer;
        let logoUrl = "";
        try {
            logoUrl = (yield (0, uploadImageService_1.uploadImageToS3Service)("logo", logoBuffer)) || "";
        }
        catch (error) {
            return res.status(400).json({
                message: message_1.MESSAGE.post.fail
            });
        }
        const payload = Object.assign(Object.assign({}, categoryPayload), { logo: logoUrl });
        const categoryInstance = yield new category_model_1.default(payload).save();
        return res.status(200).json({
            message: message_1.MESSAGE.post.succ,
            result: categoryInstance
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error
        });
    }
});
exports.createCategory = createCategory;
const editCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryId, categoryDetails } = req.body;
        const categoryPayload = JSON.parse(categoryDetails);
        const existingCategory = yield category_model_1.default.findById(categoryId);
        if (!existingCategory) {
            return res.status(404).json({
                message: message_1.MESSAGE.custom(`Category not found.`),
            });
        }
        if (req.files && "logo" in req.files) {
            const logo = req.files["logo"][0];
            const logoBuffer = logo.buffer;
            let logoUrl = "";
            try {
                logoUrl = (yield (0, uploadImageService_1.uploadImageToS3Service)("logo", logoBuffer)) || "";
            }
            catch (error) {
                return res.status(400).json({
                    message: message_1.MESSAGE.patch.fail,
                });
            }
            categoryPayload.logo = logoUrl;
        }
        const updatedCategory = yield category_model_1.default.findByIdAndUpdate(categoryId, { $set: categoryPayload }, { new: true });
        if (!updatedCategory) {
            return res.status(400).json({
                message: message_1.MESSAGE.custom(`Failed to update category.`),
            });
        }
        return res.status(200).json({
            message: message_1.MESSAGE.patch.succ,
            result: updatedCategory,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.patch.fail,
            error,
        });
    }
});
exports.editCategoryById = editCategoryById;
const getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cid } = req.query;
        if (!cid) {
            return res.status(400).json({
                message: message_1.MESSAGE.custom("Category ID (cid) is required."),
            });
        }
        const category = yield category_model_1.default.findById(cid);
        if (!category) {
            return res.status(404).json({
                message: message_1.MESSAGE.custom(`Category not found with ID: ${cid}`),
            });
        }
        return res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            result: category,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: message_1.MESSAGE.get.fail,
            error,
        });
    }
});
exports.getCategoryById = getCategoryById;
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = req.query;
        let currentPage = 0;
        if (filter.page) {
            currentPage = parseInt(String(filter.page)); // Parse page as integer
        }
        const sortField = filter.sortField ? filter.sortField : "updatedAt";
        const _limit = filter.limit ? parseInt(String(filter.limit)) : 5;
        delete filter.page;
        delete filter.sortField;
        delete filter.limit;
        console.log("===>filter", filter);
        const totalCount = yield category_model_1.default.countDocuments(filter);
        const limit = currentPage > 0 ? _limit : totalCount;
        const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;
        console.log("===>filter", filter);
        const categories = yield category_model_1.default.find(filter)
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
            result: categories
        });
    }
    catch (error) {
        console.error("Error fetching categories:", error);
        res.status(400).json({
            message: message_1.MESSAGE.get.fail
        });
    }
});
exports.getCategories = getCategories;
const deleteCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryObjectId } = req.params;
        const deletedCategoryInstance = yield category_model_1.default.findByIdAndDelete(categoryObjectId);
        if (!deletedCategoryInstance) {
            return res.status(404).json({
                message: "Category id not found"
            });
        }
        const subcategoryPayload = {
            category_object_id: categoryObjectId
        };
        const subcategoryDeleteInstance = yield subcategory_model_1.default.deleteMany(subcategoryPayload);
        const productDeleteInstance = yield product_model_1.default.deleteMany(subcategoryPayload);
        return res.status(200).json({
            message: message_1.MESSAGE.delete.succ,
            result: { deletedCategoryInstance, subcategoryDeleteInstance, productDeleteInstance }
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.delete.fail,
            error
        });
    }
});
exports.deleteCategoryById = deleteCategoryById;
const searchByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.searchByCategory = searchByCategory;
