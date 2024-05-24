import express from "express";
import { createWholeslaerEmployee } from "../../controllers/wholesalerEmployee/wholesalerEmployee.controller";

const router = express.Router();

router.route("/create-wholesaler-emloyee").post(createWholeslaerEmployee);

module.exports = router;
