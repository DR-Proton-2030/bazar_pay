import express from "express";
import { upload } from "../../../../middleware/multer.middleware";
import { createSubCategory } from "../../controllers/subcategory/createSubcategory.controller";
import { getSubcategories } from "../../controllers/subcategory/getSubcategoriesWithPagination.controller";
import { getSubcategory, searchBySubCategory } from "../../controllers/subcategory/getSubcategory.controller";
import { getAggregatedSubcategory } from "../../controllers/subcategory/getAggregatedSubcategory.controller";
import e from "express";
import { deleteCategoryById } from "../../controllers/category/category.controllers";
import { deleteSubcategoryById } from "../../controllers/subcategory/subcategory.controllers";

const router = express.Router();

router
	.route("/create-subcategory")
	.post(upload.fields([{ name: "sub_category_image", maxCount: 1 }]), createSubCategory);

router.route("/get-paginated-subcategories").get(getSubcategories);

router.route("/get-subcategory-with-filter").get(getSubcategory);

router.route("/search-subcategory-with-filter").get(searchBySubCategory);

router.route("/get-aggregated-subcategory").get(getAggregatedSubcategory);

router.route("/delete-subcategory-by-id/:subcategoryId").delete(deleteSubcategoryById);

export default router;
