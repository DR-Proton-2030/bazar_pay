"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use("/auth", require("./auth/auth.routes"));
app.use("/wholesaler", require("./wholesaler/wholesaler.routes"));
app.use("/wholesaler-employee", require("./wholesalerEmployee/wholesalerEmployee.routes"));
module.exports = app;