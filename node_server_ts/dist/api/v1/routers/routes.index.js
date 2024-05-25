"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use("/auth", require("./auth/auth.routes"));
// app.use("/customer", require("./retailer/retailer.routes"));
app.use("/wholesaler", require("./wholesaler/wholesaler.routes"));
app.use("/wholesaler-employee", require("./wholesalerEmployee/wholesalerEmployee.routes"));
// app.use("/admin", require("./admin/admin.routes"));
// app.use("/project", require("./project/project.routes"));
// app.use("/bookings", require("./bookings/bookings.routes"));
module.exports = app;
