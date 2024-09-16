"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_middleware_1 = require("../../../../middleware/multer.middleware");
const createSubcategory_controller_1 = require("../../controllers/subcategory/createSubcategory.controller");
const getSubcategoriesWithPagination_controller_1 = require("../../controllers/subcategory/getSubcategoriesWithPagination.controller");
const getSubcategory_controller_1 = require("../../controllers/subcategory/getSubcategory.controller");
const getAggregatedSubcategory_controller_1 = require("../../controllers/subcategory/getAggregatedSubcategory.controller");
const router = express_1.default.Router();
router
    .route("/create-subcategory")
    .post(multer_middleware_1.upload.fields([{ name: "sub_category_image", maxCount: 1 }]), createSubcategory_controller_1.createSubCategory);
router.route("/get-paginated-subcategories").get(getSubcategoriesWithPagination_controller_1.getSubcategories);
router.route("/get-subcategory-with-filter").get(getSubcategory_controller_1.getSubcategory);
router.route("/get-aggregated-subcategory").get(getAggregatedSubcategory_controller_1.getAggregatedSubcategory);
module.exports = router;
