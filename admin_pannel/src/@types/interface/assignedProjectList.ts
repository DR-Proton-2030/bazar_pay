import { IBuilder } from "./Builder.interface";
import { IProject } from "./Projects";

export interface IassignedProject{
    _id?:string,
    admin_object_id:string,
    builder_object_id: string,
    project_object_id: string,
    project: IProject,
    builder: IBuilder
}