import { SchemaDefinitionProperty, Types } from "mongoose";

export interface ISubcategory {
    name: string;
    description?: string;
    category_object_id: SchemaDefinitionProperty<Types.ObjectId>;
    logo: string;
}