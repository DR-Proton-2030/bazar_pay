"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("../../controllers/admin/admin.controller");
const router = express_1.default.Router();
router.route("/create-admin").post(admin_controller_1.createAdmin);
router.route("/get-employe-list").post(admin_controller_1.getEmployeeList);
router.route("/add-product-percentage").patch(admin_controller_1.updateProfitPercentage);
exports.default = router;
