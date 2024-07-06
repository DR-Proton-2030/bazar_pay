// File: controllers/brand.controller.ts

import { Request, Response } from "express";
import BrandModel from "../../../../models/brand.model"; // Ensure Brand interface is imported

interface Brand {
    // Define the Brand interface here
    _id: string;
    name: string;
}
import { MESSAGE } from "../../../../constants/message";
import { QUERY_PARAMS } from "../../../../constants/query";
import { uploadImageService } from "../../../../services/uploadImageService";

// Function to retrieve all brand names and IDs
export const getAllBrands = async (req: Request, res: Response) => {
    try {
        // Fetch all brands from the database
        const brands: Brand[] = await BrandModel.find({}, '_id name'); // Select only _id and name fields

        // If no brands found, return 404 Not Found
        if (brands.length === 0) {
            return res.status(404).json({
                message: MESSAGE.get.fail,
                error: "No brands found"
            });
        }

        // Return success response with brands
        return res.status(200).json({
            message: MESSAGE.get.succ,
            brands: brands
        });
    } catch (error) {
        // Handle any errors that occur during database query
        console.error("Error fetching brands:", error);
        return res.status(400).json({
            message: MESSAGE.get.fail,
            error: (error as Error).message
        });
    }
};

// Other controller functions (createBrand, getBrandById, getBrands) remain unchanged
