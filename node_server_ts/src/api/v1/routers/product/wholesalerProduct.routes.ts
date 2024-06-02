import express from "express";

import { upload } from "../../../../middleware/multer.middleware";
import { createProduct, getProductList } from "../../controllers/product/wholesalerProduct.controllers";

const router = express.Router();


router.route("/add_product").post(
  upload.fields([
    { name: "product_image", maxCount: 1 },
    { name: "bar_code_photo", maxCount: 1 }
  ]),
  createProduct
);

router.route("/get-product-list").get(getProductList);


module.exports = router;
