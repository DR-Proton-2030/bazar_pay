import { model } from "mongoose";
import { IAdminAssignedProject } from "../@types/types/adminAssignedProject.interface";
import adminAssignedProjectSchema from "./schemaDefinitions/adminAssignedProject.schema";

const AdminAssignedProjectModel = model<IAdminAssignedProject>("admin_assigned_project", adminAssignedProjectSchema);

export default AdminAssignedProjectModel;