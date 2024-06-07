export interface Complaint {
	__v: number;
	_id: string;
	complain_status: string;
	complainer_object_id: string | null;
	complaint_description: string;
	complaint_image_object_id: string[];
	complaint_subject: string;
	createdAt: string;
	latitude: string | null;
	longitude: string | null;
	municipality_number: string | null;
	resolution_description: string | null;
	resolution_image_object_id: string[];
	resolution_subject: string | null;
	resolver_object_id: string | null;
	updatedAt: string;
}