"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_middleware_1 = require("../../../../middleware/multer.middleware");
const product_controller_1 = require("../../controllers/product/product.controller");
const searchProduct_controller_1 = require("../../controllers/product/searchProduct.controller");
const router = express_1.default.Router();
router.route("/add_product").post(multer_middleware_1.upload.fields([
    { name: "product_image", maxCount: 1 },
    { name: "bar_code_photo", maxCount: 1 }
]), product_controller_1.createProduct);
router.route("/get-product-list").get(product_controller_1.getProductList);
router.route("/search-product-byWholesaler").get(searchProduct_controller_1.searchWholesalerProduct);
router.route("/search-product").get(searchProduct_controller_1.searchProductByName);
router.route("/update-product-status").patch(product_controller_1.updateProductStatus);
router.route("/delete-product-by-id").delete(product_controller_1.deleteProductById);
router.route("/update_product").patch(multer_middleware_1.upload.fields([
    { name: "product_image", maxCount: 1 },
    { name: "bar_code_photo", maxCount: 1 }
]), product_controller_1.updateProduct);
exports.default = router;
