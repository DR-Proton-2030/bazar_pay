import { SchemaDefinitionProperty, Types } from "mongoose"

export interface IAdminAssignedProject{
    admin_object_id : SchemaDefinitionProperty<Types.ObjectId>
    builder_object_id : SchemaDefinitionProperty<Types.ObjectId>
    project_object_id : SchemaDefinitionProperty<Types.ObjectId>
}