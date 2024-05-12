import { IProject } from "../interface/Projects";
import { ILayout } from "../interface/layout.interface";

export interface ILayOutImageCell{
    project: IProject,
    rectanglePositions : ILayout[]
}