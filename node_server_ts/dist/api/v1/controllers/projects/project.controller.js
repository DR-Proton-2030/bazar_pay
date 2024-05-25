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
exports.updatePlotPosition = exports.getAllProjectIdList = exports.getProjectDetails = exports.getProjectList = exports.addProject = void 0;
const message_1 = require("../../../../constants/message");
const project_model_1 = __importDefault(require("../../../../models/project.model"));
const uploadImageService_1 = require("../../../../services/uploadImageService");
const callPythonServer_1 = require("../../../../services/callPythonServer");
const layout_model_1 = __importDefault(require("../../../../models/layout.model"));
const mongoose_1 = __importDefault(require("mongoose"));
const addProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files || !("layout" in req.files)) {
            return res.status(404).json({
                message: message_1.MESSAGE.post.custom("Layout not found"),
            });
        }
        const layout = req.files["layout"][0];
        const { projectDetails } = req.body;
        const _payload = JSON.parse(projectDetails);
        console.log(projectDetails);
        const layoutBuffer = layout.buffer;
        const layoutUrl = yield (0, uploadImageService_1.uploadImageService)("project", layoutBuffer);
        const payload = Object.assign(Object.assign({}, _payload), { layout_image: layoutUrl });
        const projectInstance = yield new project_model_1.default(payload).save();
        const layoutFile = new File([layoutBuffer], layout.originalname, {
            type: layout.mimetype,
        });
        const layout_list = yield (0, callPythonServer_1.callPythonServer)(layoutFile, String(projectInstance._id));
        if (layout_list.length > 0) {
            yield layout_model_1.default.insertMany(layout_list);
        }
        return res.status(200).json({
            message: message_1.MESSAGE.post.succ,
            result: projectInstance,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error,
        });
    }
});
exports.addProject = addProject;
const getProjectList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = req.query;
        const currentPage = parseInt(String(filter.page || "1")); // Parse page as integer
        const limit = 5;
        const startIndex = (currentPage - 1) * limit;
        const sortField = filter.sortField ? filter.sortField : "updatedAt";
        delete filter.page;
        delete filter.sortField;
        console.log("===>filter", filter);
        const totalCount = yield project_model_1.default.countDocuments(filter);
        const projects = yield project_model_1.default.find(filter)
            .sort({ [sortField]: -1 })
            .skip(startIndex)
            .limit(limit);
        res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            pagination: {
                total: totalCount,
                currentPage: currentPage,
            },
            result: projects,
        });
    }
    catch (error) {
        console.error("Error fetching businesses:", error);
        res.status(400).json({
            message: message_1.MESSAGE.get.fail,
        });
    }
});
exports.getProjectList = getProjectList;
const getProjectDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { project_object_id } = req.query;
        const projectLayoutDetails = yield layout_model_1.default.aggregate([
            {
                $match: {
                    project_object_id: new mongoose_1.default.Types.ObjectId(project_object_id),
                },
            },
            {
                $lookup: {
                    from: "projects",
                    localField: "project_object_id",
                    foreignField: "_id",
                    as: "project_details",
                },
            },
            {
                $unwind: "$project_details",
            },
            {
                $group: {
                    _id: null,
                    layout_list: { $push: "$$ROOT" },
                    project_details: { $first: "$project_details" },
                },
            },
            {
                $project: {
                    _id: 0,
                    layout_list: {
                        $map: {
                            input: "$layout_list",
                            as: "layout",
                            in: {
                                _id: "$$layout._id",
                                project_object_id: "$$layout.project_object_id",
                                x: "$$layout.x",
                                y: "$$layout.y",
                                is_booked: "$$layout.is_booked",
                                facing: "$$layout.facing",
                                createdAt: "$$layout.createdAt",
                                updatedAt: "$$layout.updatedAt",
                            },
                        },
                    },
                    project_details: 1,
                },
            },
            {
                $lookup: {
                    from: "bookings",
                    localField: "layout_list._id", // match with layout _id
                    foreignField: "plot_object_id",
                    as: "bookings",
                }
            },
            {
                $addFields: {
                    "layout_list": {
                        $map: {
                            input: "$layout_list",
                            as: "layout",
                            in: {
                                "_id": "$$layout._id",
                                "project_object_id": "$$layout.project_object_id",
                                "x": "$$layout.x",
                                "y": "$$layout.y",
                                "is_booked": "$$layout.is_booked",
                                "facing": "$$layout.facing",
                                "createdAt": "$$layout.createdAt",
                                "updatedAt": "$$layout.updatedAt",
                                "no_of_bookings": {
                                    $size: {
                                        $filter: {
                                            input: "$bookings",
                                            as: "booking",
                                            cond: {
                                                $and: [
                                                    { $eq: ["$$booking.status", "ENQUIRY"] },
                                                    { $eq: ["$$booking.plot_object_id", "$$layout._id"] }
                                                ]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        ]);
        console.log(projectLayoutDetails);
        return res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            result: projectLayoutDetails,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.get.fail,
            error,
        });
    }
});
exports.getProjectDetails = getProjectDetails;
const getAllProjectIdList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = req.query;
        const projects = yield project_model_1.default.find(filter, { project_name: 1 });
        res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            result: projects,
        });
    }
    catch (error) {
        console.error("Error fetching businesses:", error);
        res.status(400).json({
            message: message_1.MESSAGE.get.fail,
        });
    }
});
exports.getAllProjectIdList = getAllProjectIdList;
const updatePlotPosition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { project_object_id, layoutPosition, status } = req.body;
        if (layoutPosition.length === 0) {
            return res.status(400).json({
                message: message_1.MESSAGE.post.fail
            });
        }
        yield project_model_1.default.findByIdAndUpdate(project_object_id, { $set: { is_active: status } });
        yield layout_model_1.default.deleteMany({ project_object_id });
        const response = yield layout_model_1.default.insertMany(layoutPosition);
        return res.status(200).json({
            message: message_1.MESSAGE.post.succ,
            result: response
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error,
        });
    }
});
exports.updatePlotPosition = updatePlotPosition;
