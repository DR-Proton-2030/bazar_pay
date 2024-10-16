import { Schema, VirtualTypeOptions } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IProduct } from "../../@types/types/product.interface";
import CategoryModel from "../category.model";
import { IBrand } from "../../@types/types/brand.interface";
import BrandModel from "../brand.model";
import SubcategoryModel from "../subcategory.model";
import { PRODUCT_STATUS } from "../../constants/productStatus";

const productSchema: Schema<IProduct> = new Schema<IProduct>(
	{
		product_name: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		unit: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		product_description: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		product_image: [SCHEMA_DEFINITION_PROPERTY.optionalNullString],
		brand_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
		subcategory_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
		category_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
		profit_percentage: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
		product_status: { ...SCHEMA_DEFINITION_PROPERTY.optionalNullString, default: PRODUCT_STATUS.active }
	},
	{
		...GENERAL_SCHEMA_OPTIONS,
		toJSON: { virtuals: true },
		toObject: { virtuals: true }
	}
);

const categoryVirtualReference: VirtualTypeOptions<IProduct> = {
	ref: CategoryModel,
	localField: "category_object_id",
	foreignField: "_id",
	justOne: true
};

const brandVirtualReference: VirtualTypeOptions<IBrand> = {
	ref: BrandModel,
	localField: "brand_object_id",
	foreignField: "_id",
	justOne: true
};
const subCategoryVirtualReference: VirtualTypeOptions<IProduct> = {
	ref: SubcategoryModel,
	localField: "subcategory_object_id",
	foreignField: "_id",
	justOne: true
};

productSchema.virtual("category", categoryVirtualReference);
productSchema.virtual("subcategory", subCategoryVirtualReference);
productSchema.virtual("brand", brandVirtualReference);

export default productSchema;
