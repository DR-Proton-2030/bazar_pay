import express from "express";
import { upload } from "../../../../middleware/multer.middleware";
import { createBrand, getBrands } from "../../controllers/brand/brand.controllers";

const router = express.Router();

router.route("/create-brand").post(upload.fields([{ name: "logo", maxCount: 1 }]), createBrand);
router.route("/get-brand-list").post(getBrands);

module.exports = router;
