import express from "express";

const app = express();

app.use("/auth", require("./auth/auth.routes"));
app.use("/wholesaler", require("./wholesaler/wholesaler.routes"));
app.use("/wholesaler-employee", require("./wholesalerEmployee/wholesalerEmployee.routes"));

module.exports = app;
