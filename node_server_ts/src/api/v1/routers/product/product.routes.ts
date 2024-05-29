import express from "express";

import { upload } from "../../../../middleware/multer.middleware";
import { createProduct, getAllProducts } from "../../controllers/product/product.controllers";

const router = express.Router();


router.route("/add_product").post(
  upload.fields([
    { name: "product_image", maxCount: 1 },
    { name: "bar_code_photo", maxCount: 1 }
  ]),
  createProduct
);

router.route("/getAll_product").get(getAllProducts);


module.exports = router;
