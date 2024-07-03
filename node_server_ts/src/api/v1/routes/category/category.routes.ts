import express from "express";
import {
	createCategory,
	deleteCategory,
	getAllCategories,
	getCategoryById,
	updateCategory
} from "../../controllers/category/category.controllers";

const router = express.Router();

router.route("/create-category").post(createCategory);

router.route("/update-category").patch(updateCategory);

router.route("/delete-category").delete(deleteCategory);

router.route("/getAll-category").get(getAllCategories);
router.route("/getbyId-category").get(getCategoryById);

module.exports = router;
