import express from "express";

const app = express();

app.use("/auth", require("./auth/auth.routes"));
app.use("/admin", require("./admin/admin.routes"));
app.use("/wholesaler", require("./wholesaler/wholesaler.routes"));
app.use("/wholesaler-employee", require("./wholesalerEmployee/wholesalerEmployee.routes"));
app.use("/product", require("./product/wholesalerProduct.routes"));
app.use("/retailer", require("./reatiler/retailer.routes"));

module.exports = app;
