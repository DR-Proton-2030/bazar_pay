import express from "express";

import { upload } from "../../../../middleware/multer.middleware";

import { createRetailer, loginRetailer } from "../../controllers/retailer/retailer.controllers";

const router = express.Router();


router.route("/add-retailer").post(
  upload.fields([
    { name: "sign_board", maxCount: 1 },
    { name: "owner_photo", maxCount: 1 },
    { name: "trade_licensce", maxCount: 1 },
    { name: "nid", maxCount: 1 },
  ]),
  createRetailer
);
router.route("/login-retailer").post(loginRetailer);

module.exports = router;