import { SchemaDefinitionProperty, Types } from "mongoose";

export interface IBook {
  customer_object_id: SchemaDefinitionProperty<Types.ObjectId>;
  plot_object_id: SchemaDefinitionProperty<Types.ObjectId>;
  project_object_id: SchemaDefinitionProperty<Types.ObjectId>;
  enqury_status: string;
  builder_object_id: SchemaDefinitionProperty<Types.ObjectId>;
  booking_amount: number | null, 
}
