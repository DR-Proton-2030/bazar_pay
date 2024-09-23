import express from "express";
import { upload } from "../../../../middleware/multer.middleware";
import { createCategory, deleteCategoryById, editCategoryById, getCategories, getCategoryById } from "../../controllers/category/category.controllers";

const router = express.Router();

router.route("/create-category").post(upload.fields([{ name: "logo", maxCount: 1 }]), createCategory);
router.route("/edit-category").patch(upload.fields([{ name: "logo", maxCount: 1 }]), editCategoryById);

router.route("/get-category-list").get(getCategories);

router.route("/get-category-byId").get(getCategoryById);
router.route("/delete-category-by-id/:categoryObjectId").delete(deleteCategoryById);

export default router;
