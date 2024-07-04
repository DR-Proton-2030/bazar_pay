import { Schema, VirtualTypeOptions } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { ISubcategory } from "../../@types/types/subcategory.interface";
import CategoryModel from "../category.model";

const SubcategorySchema: Schema<ISubcategory> = new Schema<ISubcategory>(
	{
		name: SCHEMA_DEFINITION_PROPERTY.requiredString,
		description: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		category_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
		sub_category_image: SCHEMA_DEFINITION_PROPERTY.optionalNullString
	},
	{
		...GENERAL_SCHEMA_OPTIONS,
		toJSON: { virtuals: true },
		toObject: { virtuals: true }
	}
);

const categoryVirtualReference: VirtualTypeOptions<ISubcategory> = {
	ref: CategoryModel,
	localField: "category_object_id",
	foreignField: "_id",
	justOne: true
};

SubcategorySchema.virtual("categories", categoryVirtualReference);

export default SubcategorySchema;
