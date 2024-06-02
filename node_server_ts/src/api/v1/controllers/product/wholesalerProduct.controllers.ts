import { Request, Response } from "express";
import { uploadImageService } from "../../../../services/uploadImageService";
import productModel from "../../../../models/product.model";
import { MESSAGE } from "../../../../constants/message";

export const createProduct = async (req: Request, res: Response) => {
  try {
    if (
      !req.files ||
      !("product_image" in req.files) ||
      !("bar_code_photo" in req.files)
    ) {
      return res.status(404).json({
        message: "Product image or bar code photo not found",
      });
    }

    const product_image = req.files["product_image"][0];
    const bar_code_photo = req.files["bar_code_photo"][0];

    const { productDetails,wholesalerSaler_id } = req.body;
    const productPayload = JSON.parse(productDetails);

    const productImageBuffer = product_image.buffer;
    const barCodePhotoBuffer = bar_code_photo.buffer;

    let payload: any = {};

    try {
      const productImageUrl = await uploadImageService("product_image", productImageBuffer);
      const barCodePhotoUrl = await uploadImageService("bar_code_photo", barCodePhotoBuffer);
      
      payload = {
        ...productPayload,
        product_image: productImageUrl,
        bar_code_photo: barCodePhotoUrl,
        wholesalerSaler_id
      };
    } catch (error) {
      return res.status(400).json({
        message: MESSAGE.post.fail,
        error,
      });
    }

    try {
      const productInstance = await new productModel(payload).save();
      return res.status(200).json({
        message:MESSAGE.post.succ,
        result: productInstance,
      });
    } catch (error) {
      return res.status(400).json({
        message: MESSAGE.post.fail,
        error,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message:MESSAGE.post.fail,
      error,
    });
  }
};


// export const getAllProducts = async (req: Request, res: Response) => {
//   const { page = 1 } = req.query; // Default to page 1 if not provided
//   const limit = 5; // Limit to 5 products per page

//   try {
//     const products = await productModel
//       .find()
//       .skip((Number(page) - 1) * limit)
//       .limit(limit)
//       .exec();

//     const totalProducts = await productModel.countDocuments().exec();
//     const totalPages = Math.ceil(totalProducts / limit);

//     return res.status(200).json({
//       message: MESSAGE.get.succ,
//       result: products,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: MESSAGE.get.fail,
//       error,
//     });
//   }
// };

export const getProductList = async (req: Request, res: Response) => {
  try {
    const filter: any = req.query;

    let currentPage = 0;

    if (filter.page) {
      currentPage = parseInt(String(filter.page)); // Parse page as integer
    }

    const sortField = filter.sortField ? filter.sortField : "updatedAt";

    delete filter.page;
    delete filter.sortField;

    console.log("===>filter", filter);

    const totalCount = await productModel.countDocuments(filter);

    const limit = currentPage > 0 ? 5 : totalCount;
    const startIndex = currentPage > 0 ? (currentPage - 1) * limit : 0;

    const products = await productModel.find(filter)
      .sort({ [sortField]: -1 })
      .skip(startIndex)
      .limit(limit);

    res.status(200).json({
      message: MESSAGE.get.succ,
      pagination: {
        total: totalCount,
        currentPage: currentPage,
      },
      result: products,
    });
  } catch (error) {
    console.error("Error fetching businesses:", error);
    res.status(400).json({
      message: MESSAGE.get.fail,
    });
  }
};