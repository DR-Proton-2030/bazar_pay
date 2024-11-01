import express from "express";
import { upload } from "../../../../middleware/multer.middleware";
import { createProductByAdmin } from "../../controllers/product/createProductByAdmin.controller";
import { getProductById, getProducts } from "../../controllers/product/getProductsWithPagination.controller";
import { getRegexProducts } from "../../controllers/product/getRegexProducts.controller";
import { updateProduct } from "../../controllers/product/product.controller";
import { requestProduct } from "../../controllers/product/requestedProduct.controller";

const router = express.Router();

router
	.route("/create-product-by-admin")
	.post(upload.fields([{ name: "product_image", maxCount: 10 }]), createProductByAdmin);

router.route("/get-paginated-products").get(getProducts);
router.route("/get-product-byid").get(getProductById);

router.route("/get-regex-products").get(getRegexProducts);

router.route("/update_product").patch(
	upload.fields([
		{ name: "product_image", maxCount: 1 },
		{ name: "bar_code_photo", maxCount: 1 }
	]),
	updateProduct
);

router
	.route("/request_product")
	.post(upload.fields([{ name: "product_image", maxCount: 10 }]), requestProduct);




export default router;
