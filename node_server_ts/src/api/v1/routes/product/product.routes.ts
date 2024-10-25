import express from "express";

import { upload } from "../../../../middleware/multer.middleware";
import {
	createProduct,
	deleteProductById,
	getProductList,
	updateProduct,
	updateProductStatus
} from "../../controllers/product/product.controller";
import { getProductById } from "../../controllers/product/getProductsWithPagination.controller";
import { searchProductByName, searchWholesalerProduct } from "../../controllers/product/searchProduct.controller";

const router = express.Router();

router.route("/add_product").post(
	upload.fields([
		{ name: "product_image", maxCount: 1 },
		{ name: "bar_code_photo", maxCount: 1 }
	]),
	createProduct
);

router.route("/get-product-list").get(getProductList);
router.route("/search-product-byWholesaler").get(searchWholesalerProduct);
router.route("/search-product").get(searchProductByName);
router.route("/update-product-status").patch(updateProductStatus);
router.route("/delete-product-by-id").delete(deleteProductById);


router.route("/update_product").patch(
	upload.fields([
		{ name: "product_image", maxCount: 1 },
		{ name: "bar_code_photo", maxCount: 1 }
	]),
	updateProduct
);

export default router;	
