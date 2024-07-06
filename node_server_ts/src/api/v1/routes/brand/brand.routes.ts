// File: routes/brands.router.ts

import express from "express";
import { upload } from "../../../../middleware/multer.middleware";
import { createBrand, getBrands } from "../../controllers/brand/brand.controllers";
import { getAllBrands } from "../../controllers/brand/getbrand.controllers"; // Import getAllBrands function

const router = express.Router();

// Route for creating a brand (with logo upload)
router.route("/create-brand").post(upload.fields([{ name: "logo", maxCount: 1 }]), createBrand);

// Route for fetching all brands
router.route("/get-brand-list").get(getAllBrands);

// Export the router
export default router;
