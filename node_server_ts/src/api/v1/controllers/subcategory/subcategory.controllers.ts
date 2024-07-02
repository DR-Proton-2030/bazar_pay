// File: controllers/subcategory.controller.ts
import { Request, Response } from "express";
import SubcategoryModel from "../../../../models/subcategory.model";
import { MESSAGE } from "../../../../constants/message";
import { QUERY_PARAMS } from "../../../../constants/query";

export const createSubcategory = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const newSubcategory = new SubcategoryModel(payload);
    await newSubcategory.save();
    return res.status(200).json({
      message: MESSAGE.post.succ,
      result: newSubcategory,
    });
  } catch (error) {
    return res.status(400).json({
      message: MESSAGE.post.fail,
      error,
    });
  }
};

export const updateSubcategory = async (req: Request, res: Response) => {
  try {
    const subcategoryId = req.query[QUERY_PARAMS.id];
    const updatedSubcategory = await SubcategoryModel.findByIdAndUpdate(
      subcategoryId,
      req.body,
      { new: true }
    );
    if (!updatedSubcategory) {
      return res.status(404).json({
        message: MESSAGE.put.fail,
      });
    }
    return res.status(200).json({
      message: MESSAGE.put.succ,
      result: updatedSubcategory,
    });
  } catch (error) {
    return res.status(400).json({
      message: MESSAGE.put.fail,
      error,
    });
  }
};

export const deleteSubcategory = async (req: Request, res: Response) => {
  try {
    const subcategoryId = req.query[QUERY_PARAMS.id];
    const deletedSubcategory = await SubcategoryModel.findByIdAndDelete(
      subcategoryId
    );
    if (!deletedSubcategory) {
      return res.status(404).json({
        message: MESSAGE.delete.fail,
      });
    }
    return res.status(200).json({
      message: MESSAGE.delete.succ,
      result: deletedSubcategory,
    });
  } catch (error) {
    return res.status(400).json({
      message: MESSAGE.delete.fail,
      error,
    });
  }
};

export const getAllSubcategories = async (_req: Request, res: Response) => {
  try {
    const subcategories = await SubcategoryModel.find().populate("category");
    return res.status(200).json({
      message: MESSAGE.get.succ,
      result: subcategories,
    });
  } catch (error) {
    return res.status(400).json({
      message: MESSAGE.get.fail,
      error,
    });
  }
};

export const getSubcategoryById = async (req: Request, res: Response) => {
  try {
    const subcategoryId = req.query[QUERY_PARAMS.id];
    const subcategory = await SubcategoryModel.findById(subcategoryId).populate(
      "category"
    );
    if (!subcategory) {
      return res.status(404).json({
        message: MESSAGE.get.fail,
      });
    }
    return res.status(200).json({
      message: MESSAGE.get.succ,
      result: subcategory,
    });
  } catch (error) {
    return res.status(400).json({
      message: MESSAGE.get.fail,
      error,
    });
  }
};

// export const getSubcategoriesByFilter = async (req: Request, res: Response) => {
//   try {
//     const filter = req.query[QUERY_PARAMS.filter] || {};
//     const subcategories = await SubcategoryModel.find(filter).populate('category');
//     return res.status(200).json({
//       message: MESSAGE.get.succ,
//       result: subcategories,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: MESSAGE.get.fail,
//       error,
//     });
//   }
// };
