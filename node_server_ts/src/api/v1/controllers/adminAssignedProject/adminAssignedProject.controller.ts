import { Request, Response } from "express";
import AdminAssignedProjectModel from "../../../../models/adminAssignedProject.model";
import { MESSAGE } from "../../../../constants/message";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export const assignedAdminToProject = async (req: Request, res: Response) => {
  try {
    const { builder_object_id, admin_object_id, project_object_id_list } =
      req.body;
    const duplicateproject = await AdminAssignedProjectModel.find(
      {
        admin_object_id,
        builder_object_id,
        project_object_id: { $in: project_object_id_list },
      },
      { project_object_id: 1 }
    );

    let duplicateprojectIdList: any[] = [];
    if (duplicateproject) {
      duplicateprojectIdList = duplicateproject.map((project: any) =>
        project.project_object_id.toString()
      );
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

    const response = await AdminAssignedProjectModel.insertMany(payloadList);

    return res.status(200).json({
      message: MESSAGE.post.succ,
      result: response,
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({
      message: MESSAGE.post.fail,
      error,
    });
  }
};

export const getAssignedProject = async (req: Request, res: Response) => {
    try {
      const filter: any = req.query;
      const currentPage = parseInt(String(filter.page || "1")); // Parse page as integer
  
      const limit = 5;
  
      const startIndex = (currentPage - 1) * limit;
  
      const sortField = filter.sortField ? filter.sortField : "updatedAt";
  
      delete filter.page;
      delete filter.sortField;
  
      console.log("===>filter", filter);
  
      const totalCount = await AdminAssignedProjectModel.countDocuments(filter);
  
      const assignedProjectList = await AdminAssignedProjectModel.find(filter)
        .populate("project builder")
        .sort({ [sortField]: -1 })
        .skip(startIndex)
        .limit(limit);
  
      res.status(200).json({
        message: MESSAGE.get.succ,
        pagination: {
          total: totalCount,
          currentPage: currentPage,
        },
        result: assignedProjectList,
      });
    } catch (error) {
      console.error("Error fetching businesses:", error);
      res.status(400).json({
        message: MESSAGE.get.fail,
      });
    }
  };
  