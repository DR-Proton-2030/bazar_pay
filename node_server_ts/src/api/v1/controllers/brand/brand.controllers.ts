// // File: controllers/brand.controller.ts
// import { Request, Response } from "express";
// import BrandModel from "../../../../models/brand.model";
// import { MESSAGE } from "../../../../constants/message";
// import { QUERY_PARAMS } from "../../../../constants/query";

// export const createBrand = async (req: Request, res: Response) => {
//   try {
//     const newBrand = new BrandModel(req.body);
//     const existingBrand = await BrandModel.findOne({
//       brand_name: newBrand.brand_name,
//     });
//     if (existingBrand) {
//       return res.status(404).json({
//         message: MESSAGE.custom(
//           `Brand with the name "${newBrand.brand_name}" already exists.`
//         ),
//         result: existingBrand,
//       });
//     }
//     await newBrand.save();
//     return res.status(200).json({
//       message: MESSAGE.post.succ,
//       result: newBrand,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: MESSAGE.post.fail,
//       error,
//     });
//   }
// };

// export const updateBrand = async (req: Request, res: Response) => {
//   try {
//     const brandId = req.query[QUERY_PARAMS.id];
//     const updatedBrand = await BrandModel.findByIdAndUpdate(brandId, req.body, {
//       new: true,
//     });
//     if (!updatedBrand) {
//       return res.status(404).json({
//         message: MESSAGE.put.fail,
//       });
//     }
//     return res.status(200).json({
//       message: MESSAGE.put.succ,
//       result: updatedBrand,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: MESSAGE.put.fail,
//       error,
//     });
//   }
// };

// export const deleteBrand = async (req: Request, res: Response) => {
//   try {
//     const brandId = req.query[QUERY_PARAMS.id];
//     const deletedBrand = await BrandModel.findByIdAndDelete(brandId);
//     if (!deletedBrand) {
//       return res.status(404).json({
//         message: MESSAGE.delete.fail,
//       });
//     }
//     return res.status(200).json({
//       message: MESSAGE.delete.succ,
//       result: deletedBrand,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: MESSAGE.delete.fail,
//       error,
//     });
//   }
// };

// export const getAllBrands = async (_req: Request, res: Response) => {
//   try {
//     const brands = await BrandModel.find();
//     return res.status(200).json({
//       message: MESSAGE.get.succ,
//       result: brands,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: MESSAGE.get.fail,
//       error,
//     });
//   }
// };

// export const getBrandById = async (req: Request, res: Response) => {
//   try {
//     const brandId = req.query[QUERY_PARAMS.id];
//     const brand = await BrandModel.findById(brandId);
//     if (!brand) {
//       return res.status(404).json({
//         message: MESSAGE.get.fail,
//       });
//     }
//     return res.status(200).json({
//       message: MESSAGE.get.succ,
//       result: brand,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: MESSAGE.get.fail,
//       error,
//     });
//   }
// };

// // export const getBrandsByFilter = async (req: Request, res: Response) => {
// //   try {
// //     const filter = req.query[QUERY_PARAMS.filter] || {};
// //     const brands = await BrandModel.find(filter);
// //     return res.status(200).json({
// //       message: MESSAGE.get.succ,
// //       result: brands,
// //     });
// //   } catch (error) {
// //     return res.status(400).json({
// //       message: MESSAGE.get.fail,
// //       error,
// //     });
// //   }
// // };
