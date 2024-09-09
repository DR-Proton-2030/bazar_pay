import express from "express";
import { getAllListedProducts, getEachWholesalerListedProducts } from "../../controllers/wholesalerListedProducts/getWholeSalerListedProducts.controller";

const router = express.Router();

router.route("/get-each-wholesaler-listed-product").get(getEachWholesalerListedProducts);
router.route("/get-all-wholesaler-listed-product").get(getAllListedProducts);

module.exports = router;
