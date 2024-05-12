import { SchemaDefinitionProperty, Types } from "mongoose"

export interface IAdmin{
    full_name:string,
    email:string
    password:string
    phone_number:string,
    is_disabled:boolean,
    role: string,
    has_company_all_access:boolean,
    has_all_state_access:boolean,
    has_all_project_acess:boolean,
    builder_object_id:SchemaDefinitionProperty<Types.ObjectId>,
    assigned_state_list:Array<String>,
    last_login_date:SchemaDefinitionProperty<Date>
}