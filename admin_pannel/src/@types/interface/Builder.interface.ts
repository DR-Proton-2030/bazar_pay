export interface IBuilder {
  _id?: string;
  builder_name: string;
  builder_number: string;
  builder_logo: string;
  cin_number: string;
  number_projects: number;
  contact_first_name: string;
  contact_last_name: string;
  contact_phone_number: string;
  email: string;
  GST_number: string;
  PAN: string;
  average_ratings: string;
  no_ratings: string;
}

export interface IAddplots {
  project_name: string;
  builder_object_id: string;
  state: string;
  pin_code: string;
  formatted_address: string;
  number_of_plots: number;
  price_per_sq: number;
  total_sq_feet: number;
  description: string;
}
