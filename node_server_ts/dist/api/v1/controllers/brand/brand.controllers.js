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
exports.deleteBrand = exports.getBrands = exports.getBrandById = exports.createBrand = void 0;
const brand_model_1 = __importDefault(require("../../../../models/brand.model"));
const message_1 = require("../../../../constants/message");
const query_1 = require("../../../../constants/query");
const uploadImageService_1 = require("../../../../services/uploadImageService");
const createBrand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files || !("logo" in req.files)) {
            return res.status(404).json({
                message: message_1.MESSAGE.post.custom("logo not found")
            });
        }
        const { brandDetails } = req.body;
        const bradPayload = JSON.parse(brandDetails);
        const existingBrand = yield brand_model_1.default.findOne({ name: bradPayload.name });
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
        const payload = Object.assign(Object.assign({}, bradPayload), { logo: logoUrl });
        const brandInstance = yield new brand_model_1.default(payload).save();
        return res.status(200).json({
            message: message_1.MESSAGE.post.succ,
            result: brandInstance
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error
        });
    }
});
exports.createBrand = createBrand;
const getBrandById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const brandId = req.query[query_1.QUERY_PARAMS.id];
        const brand = yield brand_model_1.default.findById(brandId);
        if (!brand) {
            return res.status(404).json({
                message: message_1.MESSAGE.get.fail
            });
        }
        return res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            result: brand
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.get.fail,
            error
        });
    }
});
exports.getBrandById = getBrandById;
// export const getBrands = async (req: Request, res: Response) => {
// 	try {
// 		const filter = JSON.parse(req.query as unknown as any);
// 		let currentPage = 0;
// 		if (filter.page) {
// 			currentPage = parseInt(String(filter.page)); // Parse page as integer
// 		}
// 		const sortField = filter.sortField ? filter.sortField : "updatedAt";
// 		delete filter.page;
// 		delete filter.sortField;
// 		console.log("===>filter", filter);
// 		const _filter = filter;
// 		const totalCount = await BrandModel.countDocuments(_filter);
// 		const limit = currentPage > 0 ? 5 : totalCount;
// 		const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;
// 		const brands = await BrandModel.find(filter)
// 			.sort({ [sortField]: -1 })
// 			.skip(startIndex)
// 			.limit(limit);
// 		const pagination: IPagination = {
// 			currentPage: currentPage,
// 			pageCount: Math.ceil(totalCount / limit)
// 		}
// 		res.status(200).json({
// 			message: MESSAGE.get.succ,
// 			pagination,
// 			result: brands
// 		});
// 	} catch (error) {
// 		console.error("Error fetching brands:", error);
// 		res.status(400).json({
// 			message: MESSAGE.get.fail,
// 			error: error
// 		});
// 	}
// };
const getBrands = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Instead of JSON.parse, we check the type of req.query and handle it accordingly
        const filter = Object.assign({}, req.query); // Spread req.query to create a filter object
        let currentPage = 0;
        if (filter.page) {
            currentPage = parseInt(String(filter.page)); // Parse page as an integer
        }
        const sortField = filter.sortField ? filter.sortField : "updatedAt";
        // Clean up filter object to remove pagination and sorting-related properties
        delete filter.page;
        delete filter.sortField;
        console.log("===>filter", filter);
        const _filter = filter;
        // Fetch total count of documents based on the filter
        const totalCount = yield brand_model_1.default.countDocuments(_filter);
        // Pagination logic
        const limit = currentPage > 0 ? 5 : totalCount;
        const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;
        // Fetch the brands from the database
        const brands = yield brand_model_1.default.find(_filter)
            .sort({ [sortField]: -1 })
            .skip(startIndex)
            .limit(limit);
        const pagination = {
            currentPage: currentPage,
            pageCount: Math.ceil(totalCount / limit),
        };
        // Send the response with brands and pagination info
        res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            pagination,
            result: brands,
        });
    }
    catch (error) {
        console.error("Error fetching brands:", error);
        res.status(400).json({
            message: message_1.MESSAGE.get.fail,
            error: error.message, // Include the error message for better debugging
        });
    }
});
exports.getBrands = getBrands;
const deleteBrand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { brandId } = req.params;
        const brand = yield brand_model_1.default.findByIdAndDelete(brandId);
        if (!brand) {
            return res.status(404).json({
                message: message_1.MESSAGE.delete.fail
            });
        }
        return res.status(200).json({
            message: message_1.MESSAGE.delete.succ,
            result: brand
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.delete.fail,
            error
        });
    }
});
exports.deleteBrand = deleteBrand;
