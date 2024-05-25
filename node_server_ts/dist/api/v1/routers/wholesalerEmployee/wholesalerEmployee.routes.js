"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wholesalerEmployee_controller_1 = require("../../controllers/wholesalerEmployee/wholesalerEmployee.controller");
const router = express_1.default.Router();
router.route("/create-wholesaler-emloyee").post(wholesalerEmployee_controller_1.createWholeslaerEmployee);
module.exports = router;
