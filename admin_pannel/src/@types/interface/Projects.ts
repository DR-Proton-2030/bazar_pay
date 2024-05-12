export interface IProject {
  _id?: string;
  project_name: string;
  builder_object_id?: string;
  state: string;
  address_lat?: number | null;
  address_long?: number | null;
  formatted_address: string;
  layout_model_object_id?: string | null;
  number_of_plots: number;
  price_per_sq: number;
  total_sq_feet: number;
  description: string;
  average_rating: number | null;
  no_of_ratings: number | null;
  is_active: boolean;
  layout_image: string;
  createdAt?: string;
  updatedAt?: string;
}
