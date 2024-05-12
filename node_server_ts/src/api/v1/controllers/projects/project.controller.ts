import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import ProjectModel from "../../../../models/project.model";
import { uploadImageService } from "../../../../services/uploadImageService";
import { callPythonServer } from "../../../../services/callPythonServer";
import LayoutModel from "../../../../models/layout.model";
import mongoose from "mongoose";

export const addProject = async (req: Request, res: Response) => {
  try {
    if (!req.files || !("layout" in req.files)) {
      return res.status(404).json({
        message: MESSAGE.post.custom("Layout not found"),
      });
    }
    const layout = req.files["layout"][0];
    const { projectDetails } = req.body;
    const _payload = JSON.parse(projectDetails);
    console.log(projectDetails);

    const layoutBuffer = layout.buffer;
    const layoutUrl: string = await uploadImageService("project", layoutBuffer);

    const payload = {
      ..._payload,
      layout_image: layoutUrl,
    };
    const projectInstance = await new ProjectModel(payload).save();

    const layoutFile = new File([layoutBuffer], layout.originalname, {
      type: layout.mimetype,
    });

    const layout_list = await callPythonServer(
      layoutFile,
      String(projectInstance._id)
    );

    if (layout_list.length > 0) {
      await LayoutModel.insertMany(layout_list);
    }
    return res.status(200).json({
      message: MESSAGE.post.succ,
      result: projectInstance,
    });
  } catch (error) {
    return res.status(400).json({
      message: MESSAGE.post.fail,
      error,
    });
  }
};

export const getProjectList = async (req: Request, res: Response) => {
  try {
    const filter: any = req.query;
    const currentPage = parseInt(String(filter.page || "1")); // Parse page as integer

    const limit = 5;

    const startIndex = (currentPage - 1) * limit;

    const sortField = filter.sortField ? filter.sortField : "updatedAt";

    delete filter.page;
    delete filter.sortField;

    console.log("===>filter", filter);

    const totalCount = await ProjectModel.countDocuments(filter);

    const projects = await ProjectModel.find(filter)
      .sort({ [sortField]: -1 })
      .skip(startIndex)
      .limit(limit);

    res.status(200).json({
      message: MESSAGE.get.succ,
      pagination: {
        total: totalCount,
        currentPage: currentPage,
      },
      result: projects,
    });
  } catch (error) {
    console.error("Error fetching businesses:", error);
    res.status(400).json({
      message: MESSAGE.get.fail,
    });
  }
};

export const getProjectDetails = async (req: Request, res: Response) => {
  try {
    const { project_object_id } = req.query;
    const projectLayoutDetails = await LayoutModel.aggregate([
      {
        $match: {
          project_object_id: new mongoose.Types.ObjectId(project_object_id as unknown as string),
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
      message: MESSAGE.get.succ,
      result: projectLayoutDetails,
    });
  } catch (error) {
    return res.status(400).json({
      message: MESSAGE.get.fail,
      error,
    });
  }
};

export const getAllProjectIdList = async (req: Request, res: Response) => {
  try {
    const filter: any = req.query;
    const projects = await ProjectModel.find(filter,{project_name:1});
    res.status(200).json({
      message: MESSAGE.get.succ,
      result: projects,
    });
  } catch (error) {
    console.error("Error fetching businesses:", error);
    res.status(400).json({
      message: MESSAGE.get.fail,
    });
  }
};

export const updatePlotPosition = async (req: Request, res: Response) => {
  try {
    const {project_object_id, layoutPosition, status} = req.body;
    if(layoutPosition.length ===0){
      return res.status(400).json({
        message: MESSAGE.post.fail
      })
    }
    await ProjectModel.findByIdAndUpdate(project_object_id,{$set:{is_active:status }})
    await LayoutModel.deleteMany({project_object_id});
    const response = await LayoutModel.insertMany(layoutPosition);
    return res.status(200).json({
      message: MESSAGE.post.succ,
      result : response
    });
  } catch (error) {
    return res.status(400).json({
      message: MESSAGE.post.fail,
      error,
    });
  }
};

