import { SchemaDefinitionProperty, Types } from "mongoose"

export interface ICustomerFavProject{
    customer_object_id: SchemaDefinitionProperty<Types.ObjectId>
    project_object_id: SchemaDefinitionProperty<Types.ObjectId>
}