import { SchemaDefinitionProperty, Types } from "mongoose"

export interface IWholesalerEmployee{
    full_name:string,
    email:string,
    phone_number:string,
    password:string
    role: string,
    wholesaler_object_id:SchemaDefinitionProperty<Types.ObjectId>,
    last_login_date:SchemaDefinitionProperty<Date>,
}