"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getWholeSalerListedProducts_controller_1 = require("../../controllers/wholesalerListedProducts/getWholeSalerListedProducts.controller");
const router = express_1.default.Router();
router.route("/get-each-wholesaler-listed-product").get(getWholeSalerListedProducts_controller_1.getEachWholesalerListedProducts);
router.route("/get-all-wholesaler-listed-product").get(getWholeSalerListedProducts_controller_1.getAllListedProducts);
exports.default = router;
