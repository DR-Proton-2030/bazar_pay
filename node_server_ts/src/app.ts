export { };
import express, { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import bodyParser from "body-parser";
import authRourer from "./api/v1/routes/auth/auth.routes";
import cors from "cors";
import adminRouter from "./api/v1/routes/admin/admin.routes";
import wholesalerRouter from "./api/v1/routes/wholesaler/wholesaler.routes";
import productByAdminRouter from "./api/v1/routes/product/productByAdmin.routes";
import retailerRouter from "./api/v1/routes/reatiler/retailer.routes";
import brandRouter from "./api/v1/routes/brand/brand.routes";
import productRouter from "./api/v1/routes/product/product.routes";
import categoryRouter from "./api/v1/routes/category/category.routes";
import orderRouter from "./api/v1/routes/order/order.routes";
import subcategoryRouter from "./api/v1/routes/subcategory/subcategory.routes";
import wholesalerListedProductsRouter from "./api/v1/routes/wholesalerListedProducts/wholesalerListedProducts.routes";
import connectDb from "./config/db";

const app = express();

const options: cors.CorsOptions = {
	allowedHeaders: ["sessionId", "Content-Type"],
	exposedHeaders: ["sessionId"],
	origin: "*",
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: false,
};

app.use(cors(options));
app.use(express.json({ limit: "100000kb" }));
// Middleware
app.use(bodyParser.json());

app.use("/api/v1/auth", authRourer);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/wholesaler", wholesalerRouter);
app.use("/api/v1/wholesaler-product", productRouter);
app.use("/api/v1/product", productByAdminRouter);
app.use("/api/v1/retailer", retailerRouter);
app.use("/api/v1/brands", brandRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/subcategory", subcategoryRouter);
app.use("/api/v1/wholesaler-listed-product", wholesalerListedProductsRouter);

app.get("/hello", (req, res) => {
	res.send(`<h1>App Connected Successful!</h1>`);
});

connectDb();

export default app;
