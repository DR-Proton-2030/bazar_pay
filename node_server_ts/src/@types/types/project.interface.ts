import { SchemaDefinitionProperty, Types } from "mongoose"

export interface IProject{
    project_name: string
    builder_object_id: SchemaDefinitionProperty<Types.ObjectId>,
    layout_image:string,
    state:string,
    address_lat:number
    address_long:number
    formatted_address:string
    layout_model_object_id: SchemaDefinitionProperty<Types.ObjectId>
    number_of_plots:number,
    price_per_sq:number,
    total_sq_feet:number,
    description:string
    average_rating:number,
    no_of_ratings: number,
    is_active:boolean
}