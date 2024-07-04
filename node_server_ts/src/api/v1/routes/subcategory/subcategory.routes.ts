import express from "express";
import { upload } from "../../../../middleware/multer.middleware";
import { createSubCategory } from "../../controllers/subcategory/createSubcategory.controller";
import { getSubcategories } from "../../controllers/subcategory/getSubcategoriesWithPagination.controller";
import { getSubcategory } from "../../controllers/subcategory/getSubcategory.controller";

const router = express.Router();

router
	.route("/create-subcategory")
	.post(upload.fields([{ name: "sub_category_image", maxCount: 1 }]), createSubCategory);

router.route("/get-paginated-subcategories").get(getSubcategories);

router.route("/get-subcategory-with-filter").get(getSubcategory);

// router.route("/update-sub-category").patch(updateSubcategory);

// router.route("/delete-sub-category").delete(deleteSubcategory);

// router.route("/getAll-sub-category").get(getAllSubcategories);
// router.route("/getbyId-sub-category").get(getSubcategoryById);

module.exports = router;
