"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_middleware_1 = require("../../../../middleware/multer.middleware");
const category_controllers_1 = require("../../controllers/category/category.controllers");
const router = express_1.default.Router();
router.route("/create-category").post(multer_middleware_1.upload.fields([{ name: "logo", maxCount: 1 }]), category_controllers_1.createCategory);
router.route("/edit-category").patch(multer_middleware_1.upload.fields([{ name: "logo", maxCount: 1 }]), category_controllers_1.editCategoryById);
router.route("/get-category-list").get(category_controllers_1.getCategories);
router.route("/get-category-byId").get(category_controllers_1.getCategoryById);
router.route("/delete-category-by-id").delete(category_controllers_1.deleteCategoryById);
exports.default = router;
