"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const db_1 = __importDefault(require("./config/db"));
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config/config");
const httpServer = http_1.default.createServer(app_1.default);
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
    }
});
(0, db_1.default)();
const PORT = String(config_1.NODE_ENV) === "PROD" || String(config_1.NODE_ENV) === "LOCAL" ? 8989 : String(config_1.NODE_ENV) === "DEV" ? 8181 : "";
const server = httpServer.listen(PORT, () => {
    console.log("info", `\x1b[33m \x1b[1m Server is running in ${config_1.NODE_ENV} mode on port ${PORT} \x1b[0m`);
    // logger.info({ a: 123, v: 456 });
    io.on("connection", (socket) => {
        //console.log("info", "new socket user" + socket.id);
        socket.on("approval", (message) => {
            socket.broadcast.emit("messageSent", message);
            console.log(message);
        });
    });
});
