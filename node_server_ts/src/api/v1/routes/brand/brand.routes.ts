import express from "express";
import { upload } from "../../../../middleware/multer.middleware";
import { createBrand, deleteBrand, getBrands } from "../../controllers/brand/brand.controllers";
import { getRegexBrands } from "../../controllers/brand/getRegexBrands.controller";

const router = express.Router();

router.route("/create-brand").post(upload.fields([{ name: "logo", maxCount: 1 }]), createBrand);
router.route("/get-brand-list").get(getBrands);
router.route("/get-brand-suggestion").get(getRegexBrands);
router.route("/delete-brand-by-id/:brandId").delete(deleteBrand);

export default router;
