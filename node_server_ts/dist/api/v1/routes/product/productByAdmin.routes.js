"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_middleware_1 = require("../../../../middleware/multer.middleware");
const createProductByAdmin_controller_1 = require("../../controllers/product/createProductByAdmin.controller");
const getProductsWithPagination_controller_1 = require("../../controllers/product/getProductsWithPagination.controller");
const getRegexProducts_controller_1 = require("../../controllers/product/getRegexProducts.controller");
const product_controller_1 = require("../../controllers/product/product.controller");
const router = express_1.default.Router();
router
    .route("/create-product-by-admin")
    .post(multer_middleware_1.upload.fields([{ name: "product_image", maxCount: 1 }]), createProductByAdmin_controller_1.createProductByAdmin);
router.route("/get-paginated-products").get(getProductsWithPagination_controller_1.getProducts);
router.route("/get-product-byid").get(getProductsWithPagination_controller_1.getProductById);
router.route("/get-regex-products").get(getRegexProducts_controller_1.getRegexProducts);
router.route("/update_product").patch(multer_middleware_1.upload.fields([
    { name: "product_image", maxCount: 1 },
    { name: "bar_code_photo", maxCount: 1 }
]), product_controller_1.updateProduct);
exports.default = router;
