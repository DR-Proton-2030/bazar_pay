"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_middleware_1 = require("../../../../middleware/multer.middleware");
const wholesalerProduct_controllers_1 = require("../../controllers/product/wholesalerProduct.controllers");
const router = express_1.default.Router();
router.route("/add_product").post(multer_middleware_1.upload.fields([
    { name: "product_image", maxCount: 1 },
    { name: "bar_code_photo", maxCount: 1 }
]), wholesalerProduct_controllers_1.createProduct);
router.route("/get-product-list").get(wholesalerProduct_controllers_1.getProductList);
module.exports = router;
