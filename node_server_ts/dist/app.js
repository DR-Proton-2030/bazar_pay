"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, token");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, token");
        return res.status(http_status_codes_1.StatusCodes.OK).json({});
    }
    next();
});
app.use(express_1.default.json({ limit: "100000kb" }));
// Middleware
app.use(body_parser_1.default.json());
app.use("/api/v1", require("./api/v1/routes"));
app.get("/", (req, res) => {
    res.send(`<h1>App Connected Successful!</h1>`);
});
// const options: cors.CorsOptions = {
//   allowedHeaders: ["sessionId", "Content-Type"],
//   exposedHeaders: ["sessionId"],
//   origin: "*",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   preflightContinue: false,
// };
// app.use(cors(options));
// const port = process.env.PORT || 8989;
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
exports.default = app;
