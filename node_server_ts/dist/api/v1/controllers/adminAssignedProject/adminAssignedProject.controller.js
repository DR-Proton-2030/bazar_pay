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
exports.getAssignedProject = exports.assignedAdminToProject = void 0;
const adminAssignedProject_model_1 = __importDefault(require("../../../../models/adminAssignedProject.model"));
const message_1 = require("../../../../constants/message");
const assignedAdminToProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { builder_object_id, admin_object_id, project_object_id_list } = req.body;
        const duplicateproject = yield adminAssignedProject_model_1.default.find({
            admin_object_id,
            builder_object_id,
            project_object_id: { $in: project_object_id_list },
        }, { project_object_id: 1 });
        let duplicateprojectIdList = [];
        if (duplicateproject) {
            duplicateprojectIdList = duplicateproject.map((project) => project.project_object_id.toString());
        }
        console.log("duplicateproject", duplicateprojectIdList);
        let payloadList = [];
        for (let project_id of project_object_id_list) {
            if (!duplicateprojectIdList.includes(project_id)) {
                console.log("...", project_id);
                payloadList.push({
                    builder_object_id,
                    admin_object_id,
                    project_object_id: project_id,
                });
            }
        }
        const response = yield adminAssignedProject_model_1.default.insertMany(payloadList);
        return res.status(200).json({
            message: message_1.MESSAGE.post.succ,
            result: response,
        });
    }
    catch (error) {
        console.log("error", error);
        res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error,
        });
    }
});
exports.assignedAdminToProject = assignedAdminToProject;
const getAssignedProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = req.query;
        const currentPage = parseInt(String(filter.page || "1")); // Parse page as integer
        const limit = 5;
        const startIndex = (currentPage - 1) * limit;
        const sortField = filter.sortField ? filter.sortField : "updatedAt";
        delete filter.page;
        delete filter.sortField;
        console.log("===>filter", filter);
        const totalCount = yield adminAssignedProject_model_1.default.countDocuments(filter);
        const assignedProjectList = yield adminAssignedProject_model_1.default.find(filter)
            .populate("project builder")
            .sort({ [sortField]: -1 })
            .skip(startIndex)
            .limit(limit);
        res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            pagination: {
                total: totalCount,
                currentPage: currentPage,
            },
            result: assignedProjectList,
        });
    }
    catch (error) {
        console.error("Error fetching businesses:", error);
        res.status(400).json({
            message: message_1.MESSAGE.get.fail,
        });
    }
});
exports.getAssignedProject = getAssignedProject;
