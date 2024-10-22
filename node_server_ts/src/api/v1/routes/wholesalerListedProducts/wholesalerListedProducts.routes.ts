import express from "express";
import { getAllListedProducts, getEachWholesalerListedProducts, getLowestStockProductsByWholesaler } from "../../controllers/wholesalerListedProducts/getWholeSalerListedProducts.controller";

const router = express.Router();

router.route("/get-each-wholesaler-listed-product").get(getEachWholesalerListedProducts);
router.route("/get-all-wholesaler-listed-product").get(getAllListedProducts);
router.route("/get-wholesaler-low-stock-product").get(getLowestStockProductsByWholesaler);

export default router;
