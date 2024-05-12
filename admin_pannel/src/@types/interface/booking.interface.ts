import { ICustomer } from "./Customer.interface";
import { IProject } from "./Projects";
import { ILayout } from "./layout.interface";

export interface IBooking {
  _id?: string;
  customer_object_id: string;
  plot_object_id: string;
  project_object_id: string;
  builder_object_id:string;
  customer?: ICustomer;
  project?: IProject;
  plot?: ILayout;
  enqury_status: string;
  booking_amount: number | null;
}
