/* eslint-disable @typescript-eslint/no-var-requires */
import express from "express";

const app = express();

app.use("/auth", require("./auth/auth.routes"));
app.use("/admin", require("./admin/admin.routes"));
app.use("/wholesaler", require("./wholesaler/wholesaler.routes"));
// app.use("/wholesaler-product", require("./product/product.routes"));
app.use("/product", require("./product/productByAdmin.routes"));
app.use("/products", require("./product/product.routes"));
app.use("/retailer", require("./reatiler/retailer.routes"));
app.use("/brands", require("./brand/brand.routes"));
app.use("/category", require("./category/category.routes"));
app.use("/order", require("./order/order.routes"));
app.use("/subcategory", require("./subcategory/subcategory.routes"));
app.use("/wholesaler-listed-product", require("./wholesalerListedProducts/wholesalerListedProducts.routes"));

module.exports = app;
