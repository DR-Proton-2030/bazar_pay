import { SchemaDefinitionProperty, Types } from "mongoose";

export interface IAdmin {
	full_name: string;
	email: string;
	password: string;
	phone_number: string;
	is_disabled: boolean;
	role: string;

	last_login_date: SchemaDefinitionProperty<Date>;
}
