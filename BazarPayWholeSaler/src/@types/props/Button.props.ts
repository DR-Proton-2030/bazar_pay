import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface IButtonProps{
    handlePress:()=> void,
    content: string,
    style: StyleProp<ViewStyle> ,
    textStyle : StyleProp<TextStyle> 
}