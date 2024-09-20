"use strict";
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
					});
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator["throw"](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = exports.getCategoryById = exports.createCategory = void 0;
const message_1 = require("../../../../constants/message");
const query_1 = require("../../../../constants/query");
const uploadImageService_1 = require("../../../../services/uploadImageService");
const category_model_1 = __importDefault(require("../../../../models/category.model"));
const createCategory = (req, res) =>
	__awaiter(void 0, void 0, void 0, function* () {
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
			} catch (error) {
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
		} catch (error) {
			return res.status(400).json({
				message: message_1.MESSAGE.post.fail,
				error
			});
		}
	});
exports.createCategory = createCategory;
const getCategoryById = (req, res) =>
	__awaiter(void 0, void 0, void 0, function* () {
		try {
			const brandId = req.query[query_1.QUERY_PARAMS.id];
			const category = yield category_model_1.default.findById(brandId);
			if (!category) {
				return res.status(404).json({
					message: message_1.MESSAGE.get.fail
				});
			}
			return res.status(200).json({
				message: message_1.MESSAGE.get.succ,
				result: category
			});
		} catch (error) {
			return res.status(400).json({
				message: message_1.MESSAGE.get.fail,
				error
			});
		}
	});
exports.getCategoryById = getCategoryById;
const getCategories = (req, res) =>
	__awaiter(void 0, void 0, void 0, function* () {
		try {
			const filter = req.query;
			let currentPage = 0;
			if (filter.page) {
				currentPage = parseInt(String(filter.page)); // Parse page as integer
			}
			const sortField = filter.sortField ? filter.sortField : "updatedAt";
			delete filter.page;
			delete filter.sortField;
			console.log("===>filter", filter);
			const totalCount = yield category_model_1.default.countDocuments(filter);
			const limit = currentPage > 0 ? 10 : totalCount;
			const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;
			const builders = yield category_model_1.default
				.find(filter)
				.sort({ [sortField]: -1 })
				.skip(startIndex)
				.limit(limit);
			res.status(200).json({
				message: message_1.MESSAGE.get.succ,
				pagination: {
					total: totalCount,
					currentPage: currentPage
				},
				result: builders
			});
		} catch (error) {
			console.error("Error fetching categories:", error);
			res.status(400).json({
				message: message_1.MESSAGE.get.fail
			});
		}
	});
exports.getCategories = getCategories;

const deleteCategory = async (req, res) => {
	try {
		const categoryId = req.query[query_1.QUERY_PARAMS.id];
		if (!categoryId) {
			return res.status(400).json({
				message: "Category ID is required"
			});
		}
		const deletedCategory = await category_model_1.default.findByIdAndDelete(categoryId);
		if (!deletedCategory) {
			return res.status(404).json({
				message: message_1.MESSAGE.delete.fail
			});
		}
		return res.status(200).json({
			message: message_1.MESSAGE.delete.succ,
			result: deletedCategory
		});
	} catch (error) {
		return res.status(400).json({
			message: message_1.MESSAGE.delete.fail,
			error
		});
	}
};
exports.deleteCategory = deleteCategory;
