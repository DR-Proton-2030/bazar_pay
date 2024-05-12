import { IProject } from "../interface/Projects";
import { ILayout } from "../interface/layout.interface";


export interface IProjectLayout {
    project:IProject | null,
    layoutPosition: ILayout[],
    plotId:string,
    mode: "ALL" | "ENQUIRY"
}