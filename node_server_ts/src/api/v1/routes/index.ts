import express from "express";

const app = express();

app.use("/auth", require("./auth/auth.routes"));
app.use("/admin", require("./admin/admin.routes"));
app.use("/wholesaler", require("./wholesaler/wholesaler.routes"));
app.use("/product", require("./product/wholesalerProduct.routes"));
app.use("/retailer", require("./reatiler/retailer.routes"));
// app.use("/brands", require("./brand/brand.routes"));
app.use("/category", require("./category/category.routes"));
app.use("/subcategory", require("./subcategory/subcategory.routes"));

module.exports = app;
