export interface User {
	department: any;
	name: string;
	__v: number;
	_id: string;
	email: string;
	phone: string;
	password: string;
	first_name: string;
	last_name: string;
	municipality_number: string;
	role: "Super Admin" | "Admin" | "Residents";
}
