import express from "express";
import { getCustomer } from "../../controllers/customers/customers.controller";

const router = express.Router();

router.route("/get-customer").get(getCustomer);

module.exports = router;
