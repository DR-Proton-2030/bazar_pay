import { Request, Response } from "express";
import CustomerModel from "../../../../models/customer.model";
import { MESSAGE } from "../../../../constants/message";
import BuilderModel from "../../../../models/builder.model";
import { uploadImageService } from "../../../../services/uploadImageService";

export const getBuilder = async (req: Request, res: Response) => {
  try {
    const filter: any = req.query;
    const currentPage = parseInt(String(filter.page || "1")); // Parse page as integer

    const limit = 5;

    const startIndex = (currentPage - 1) * limit;

    const sortField = filter.sortField ? filter.sortField : "updatedAt";

    delete filter.page;
    delete filter.sortField;

    console.log("===>filter", filter);

    const totalCount = await BuilderModel.countDocuments(filter);

    const builders = await BuilderModel.find(filter)
      .sort({ [sortField]: -1 })
      .skip(startIndex)
      .limit(limit);

    res.status(200).json({
      message: MESSAGE.get.succ,
      pagination: {
        total: totalCount,
        currentPage: currentPage,
      },
      result: builders,
    });
  } catch (error) {
    console.error("Error fetching businesses:", error);
    res.status(400).json({
      message: MESSAGE.get.fail,
    });
  }
};

export const getBuilderDetailsById = async (req: Request, res: Response) => {
  try {
    const { builder_id } = req.query;
    const builderInstance = await BuilderModel.findById(builder_id);
    res.status(200).json({
      message: MESSAGE.get.succ,
      result: builderInstance,
    });
  } catch (error) {
    console.error("Error fetching businesses:", error);
    res.status(400).json({
      message: MESSAGE.get.fail,
    });
  }
};

export const createBuilder = async (req: Request, res: Response) => {
  try {
    if (!req.files || !("logo" in req.files)) {
      return res.status(404).json({
        message: MESSAGE.post.custom("Logo not found"),
      });
    }
    const logo = req.files["logo"][0];
    const { builderDetails } = req.body;
    const _payload = JSON.parse(builderDetails);
    console.log(builderDetails);

    const logoBuffer = logo.buffer;
    const logoUrl = await uploadImageService("logo", logoBuffer);

    const totalCount = await BuilderModel.countDocuments({});

    const payload = {
      ..._payload,
      builder_number: totalCount + 1,
      builder_logo: logoUrl,
    };
    const builderInstance = await new BuilderModel(payload).save();
    return res.status(200).json({
      message: MESSAGE.post.succ,
      result: builderInstance,
    });
  } catch (error) {
    return res.status(400).json({
      message: MESSAGE.post.fail,
      error,
    });
  }
};

export const getBuilderNameWithID = async (req: Request, res: Response) => {
  try {
    const builderList = await BuilderModel.find({}, { builder_name: 1 });
    return res.status(200).json({
      message: MESSAGE.get.succ,
      result: builderList,
    });
  } catch (error) {
    res.status(400).json({
      message: MESSAGE.get.fail,
      error,
    });
  }
};
