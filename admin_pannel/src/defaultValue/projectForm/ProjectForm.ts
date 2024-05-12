import { IProject } from "../../@types/interface/Projects";

export const defaultProjectForm: IProject = {
  project_name: "",
  state: "",
  formatted_address: "",
  number_of_plots: 0,
  price_per_sq: 0,
  total_sq_feet: 0,
  description: "",
  average_rating: 0,
  no_of_ratings: 0,
  is_active: false,
  layout_image: "",
};
