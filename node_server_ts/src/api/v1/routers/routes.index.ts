import express from "express";

const app = express();

app.use("/auth", require("./auth/auth.routes"));
app.use("/customer", require("./retailer/retailer.routes"));
app.use("/builder", require("./builder/builder.routes"));
app.use("/admin", require("./admin/admin.routes"));
app.use("/project", require("./project/project.routes"));
app.use("/bookings", require("./bookings/bookings.routes"));

module.exports = app;