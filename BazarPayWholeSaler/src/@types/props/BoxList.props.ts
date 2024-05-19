import { ISmallBoxProps } from "./SmallBox.props";

export interface IBoxlistProps{
    smallBoxList: Array<ISmallBoxProps>;
    heading:string,
    handleNavigate ?: ()=>void
}