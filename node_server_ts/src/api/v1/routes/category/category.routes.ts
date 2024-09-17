import express from "express";
import { upload } from "../../../../middleware/multer.middleware";
import { createCategory, getCategories } from "../../controllers/category/category.controllers";

const router = express.Router();

router.route("/create-category").post(upload.fields([{ name: "logo", maxCount: 1 }]), createCategory);
router.route("/get-category-list").get(getCategories);

export default router;
