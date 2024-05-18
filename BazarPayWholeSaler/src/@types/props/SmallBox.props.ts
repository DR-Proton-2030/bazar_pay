import { ReactNode } from "react";

export interface ISmallBoxProps {
    title:string;
    icon : ReactNode | ReactNode[];
    backgroundColor?:string;
    textColor:string;
}