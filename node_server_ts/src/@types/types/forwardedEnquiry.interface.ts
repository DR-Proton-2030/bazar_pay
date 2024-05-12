import { SchemaDefinitionProperty,Types } from "mongoose";

export interface IForwardedEnquiry{
    forwarded_to:SchemaDefinitionProperty<Types.ObjectId>,
    forwarded_by:SchemaDefinitionProperty<Types.ObjectId>,
    enquiry_object_id:SchemaDefinitionProperty<Types.ObjectId>,
    customer_object_id: SchemaDefinitionProperty<Types.ObjectId>,
    project_object_id: SchemaDefinitionProperty<Types.ObjectId>,
    plot_object_id: SchemaDefinitionProperty<Types.ObjectId>,
    builder_object_id:SchemaDefinitionProperty<Types.ObjectId>,
}