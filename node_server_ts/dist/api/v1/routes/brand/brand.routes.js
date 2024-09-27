"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_middleware_1 = require("../../../../middleware/multer.middleware");
const brand_controllers_1 = require("../../controllers/brand/brand.controllers");
const getRegexBrands_controller_1 = require("../../controllers/brand/getRegexBrands.controller");
const router = express_1.default.Router();
router.route("/create-brand").post(multer_middleware_1.upload.fields([{ name: "logo", maxCount: 1 }]), brand_controllers_1.createBrand);
router.route("/get-brand-list").get(brand_controllers_1.getBrands);
router.route("/get-brand-suggestion").get(getRegexBrands_controller_1.getRegexBrands);
router.route("/delete-brand-by-id/:brandId").delete(brand_controllers_1.deleteBrand);
exports.default = router;
