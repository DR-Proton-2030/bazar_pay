import express from "express";

const app = express();

app.use("/brands", require("./brand/brand.routes"));
app.use("/category", require("./category/category.routes"));
app.use("/subcategory", require("./subcategory/subcategory.routes"));

module.exports = app;
