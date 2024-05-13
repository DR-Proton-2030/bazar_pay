import express from "express";
import { getRetailer } from "../../controllers/retailer/rertailers.controller";

const router = express.Router();

router.route("/get-retailer").get(getRetailer);

module.exports = router;
