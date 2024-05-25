"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PYTHON_SERVER_URL = exports.MONGO_URI = exports.NODE_ENV = void 0;
exports.NODE_ENV = "LOCAL";
exports.MONGO_URI = {
    LOCAL: "mongodb+srv://drprotonofficial:Adarsha%40123@cluster0.9ogg6pi.mongodb.net/bazar_pay",
    DEV: "",
    PROD: ""
};
exports.PYTHON_SERVER_URL = exports.NODE_ENV === "LOCAL" ? "http://127.0.0.1:5000" :
    exports.NODE_ENV === "DEV" ? "http://127.0.0.1:5000" :
        exports.NODE_ENV === "PROD" ? "http://127.0.0.1:5000" : "";
