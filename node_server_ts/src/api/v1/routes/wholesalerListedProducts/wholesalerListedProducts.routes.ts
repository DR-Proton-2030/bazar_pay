import express from "express";
import { getEachWholesalerListedProducts } from "../../controllers/wholesalerListedProducts/getWholeSalerListedProducts.controller";

const router = express.Router();

router.route("/get-each-wholesaler-listed-product").get(getEachWholesalerListedProducts);

module.exports = router;
