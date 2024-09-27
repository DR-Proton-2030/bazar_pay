"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_routes_1 = __importDefault(require("./api/v1/routes/auth/auth.routes"));
const cors_1 = __importDefault(require("cors"));
const admin_routes_1 = __importDefault(require("./api/v1/routes/admin/admin.routes"));
const wholesaler_routes_1 = __importDefault(require("./api/v1/routes/wholesaler/wholesaler.routes"));
const productByAdmin_routes_1 = __importDefault(require("./api/v1/routes/product/productByAdmin.routes"));
const retailer_routes_1 = __importDefault(require("./api/v1/routes/reatiler/retailer.routes"));
const brand_routes_1 = __importDefault(require("./api/v1/routes/brand/brand.routes"));
const category_routes_1 = __importDefault(require("./api/v1/routes/category/category.routes"));
const order_routes_1 = __importDefault(require("./api/v1/routes/order/order.routes"));
const subcategory_routes_1 = __importDefault(require("./api/v1/routes/subcategory/subcategory.routes"));
const wholesalerListedProducts_routes_1 = __importDefault(require("./api/v1/routes/wholesalerListedProducts/wholesalerListedProducts.routes"));
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)();
const options = {
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
};
app.use((0, cors_1.default)(options));
app.use(express_1.default.json({ limit: "100000kb" }));
// Middleware
app.use(body_parser_1.default.json());
app.use("/api/v1/auth", auth_routes_1.default);
app.use("/api/v1/admin", admin_routes_1.default);
app.use("/api/v1/wholesaler", wholesaler_routes_1.default);
// app.use("/api/v1/wholesaler-product", require("./product/product.routes"));
app.use("/api/v1/product", productByAdmin_routes_1.default);
app.use("/api/v1/retailer", retailer_routes_1.default);
app.use("/api/v1/brands", brand_routes_1.default);
app.use("/api/v1/category", category_routes_1.default);
app.use("/api/v1/order", order_routes_1.default);
app.use("/api/v1/subcategory", subcategory_routes_1.default);
app.use("/api/v1/wholesaler-listed-product", wholesalerListedProducts_routes_1.default);
app.get("/hello", (req, res) => {
    res.send(`<h1>App Connected Successful!</h1>`);
});
(0, db_1.default)();
exports.default = app;
