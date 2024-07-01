// File: controllers/category.controller.ts
import { Request, Response } from "express";
import CategoryModel from "../../../../models/category.model";
import { MESSAGE } from "../../../../constants/message";
import { QUERY_PARAMS } from "../../../../constants/query";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const newCategory = new CategoryModel(req.body);
    await newCategory.save();
    return res.status(201).json({
      message: MESSAGE.post.succ,
      result: newCategory,
    });
  } catch (error) {
    return res.status(400).json({
      message: MESSAGE.post.fail,
      error,
    });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const categoryId = req.query[QUERY_PARAMS.id];
    const updatedCategory = await CategoryModel.findByIdAndUpdate(categoryId, req.body, { new: true });
    if (!updatedCategory) {
      return res.status(404).json({
        message: MESSAGE.put.fail,
      });
    }
    return res.status(200).json({
      message: MESSAGE.put.succ,
      result: updatedCategory,
    });
  } catch (error) {
    return res.status(400).json({
      message: MESSAGE.put.fail,
      error,
    });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const categoryId = req.query[QUERY_PARAMS.id];
    const deletedCategory = await CategoryModel.findByIdAndDelete(categoryId);
    if (!deletedCategory) {
      return res.status(404).json({
        message: MESSAGE.delete.fail,
      });
    }
    return res.status(200).json({
      message: MESSAGE.delete.succ,
      result: deletedCategory,
    });
  } catch (error) {
    return res.status(400).json({
      message: MESSAGE.delete.fail,
      error,
    });
  }
};

export const getAllCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find();
    return res.status(200).json({
      message: MESSAGE.get.succ,
      result: categories,
    });
  } catch (error) {
    return res.status(400).json({
      message: MESSAGE.get.fail,
      error,
    });
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const categoryId = req.query[QUERY_PARAMS.id];
    const category = await CategoryModel.findById(categoryId);
    if (!category) {
      return res.status(404).json({
        message: MESSAGE.get.fail,
      });
    }
    return res.status(200).json({
      message: MESSAGE.get.succ,
      result: category,
    });
  } catch (error) {
    return res.status(400).json({
      message: MESSAGE.get.fail,
      error,
    });
  }
};

// export const getCategoriesByFilter = async (req: Request, res: Response) => {
//   try {
//     const filter = req.query[QUERY_PARAMS.filter] || {};
//     const categories = await CategoryModel.find(filter);
//     return res.status(200).json({
//       message: MESSAGE.get.succ,
//       result: categories,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: MESSAGE.get.fail,
//       error,
//     });
//   }
// };
