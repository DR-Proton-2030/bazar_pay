"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callPythonServer = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config/config");
const callPythonServer = (file, project_object_id) => __awaiter(void 0, void 0, void 0, function* () {
    const formdata = new FormData();
    formdata.append("image", file);
    formdata.append("project_object_id", project_object_id);
    const response = yield axios_1.default.post(`${config_1.PYTHON_SERVER_URL}/detect`, formdata, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    const { data: { result }, } = response;
    return result;
});
exports.callPythonServer = callPythonServer;
