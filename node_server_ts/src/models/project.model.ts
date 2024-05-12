import { model } from "mongoose";
import projectSchema from "./schemaDefinitions/project.schema";
import { IProject } from "../@types/types/project.interface";

const ProjectModel = model<IProject>("Project", projectSchema);

export default ProjectModel;
