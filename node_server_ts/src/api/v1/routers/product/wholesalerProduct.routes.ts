import express from "express";

import { upload } from "../../../../middleware/multer.middleware";
import { createProduct, getProductList, updateProduct } from "../../controllers/product/wholesalerProduct.controllers";

const router = express.Router();


router.route("/add_product").post(
  upload.fields([
    { name: "product_image", maxCount: 1 },
    { name: "bar_code_photo", maxCount: 1 }
  ]),
  createProduct
);

router.route("/get-product-list").get(getProductList);

router.route("/update_product").patch(
  upload.fields([
    { name: "product_image", maxCount: 1 },
    { name: "bar_code_photo", maxCount: 1 }
  ]),
  updateProduct
);


module.exports = router;
