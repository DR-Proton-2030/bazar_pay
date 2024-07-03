import express from "express";
import {
	createCategory,
	deleteCategory,
	getAllCategories,
	getCategoryById,
	updateCategory
} from "../../controllers/category/category.controllers";
import {
	createSubcategory,
	deleteSubcategory,
	getAllSubcategories,
	getSubcategoryById,
	updateSubcategory
} from "../../controllers/subcategory/subcategory.controllers";

const router = express.Router();

router.route("/create-sub-category").post(createSubcategory);

router.route("/update-sub-category").patch(updateSubcategory);

router.route("/delete-sub-category").delete(deleteSubcategory);

router.route("/getAll-sub-category").get(getAllSubcategories);
router.route("/getbyId-sub-category").get(getSubcategoryById);

module.exports = router;
