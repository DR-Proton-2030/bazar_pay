import express from "express";
import { upload } from "../../../../middleware/multer.middleware";
import { createProductByAdmin } from "../../controllers/product/createProductByAdmin.controller";
import { getProducts } from "../../controllers/product/getProductsWithPagination.controller";
import { getRegexProducts } from "../../controllers/product/getRegexProducts.controller";

const router = express.Router();

router
	.route("/create-product-by-admin")
	.post(upload.fields([{ name: "product_image", maxCount: 1 }]), createProductByAdmin);

router.route("/get-paginated-products").get(getProducts);

router.route("/get-regex-products").get(getRegexProducts);

export default router;
