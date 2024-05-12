import { SchemaDefinitionProperty, Types } from "mongoose"

export interface ILayout{
  project_object_id: SchemaDefinitionProperty<Types.ObjectId>
  x: number,
  y:number,
  is_booked:boolean,
  facing: string
}