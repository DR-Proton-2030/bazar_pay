import { ColorValue, GestureResponderEvent } from "react-native"

export interface IFavGroupProps{
    action_list : IFavGroupAction[],
}

export interface IFavGroupAction {
    icon:string,
    label:string,
    rippleColor?: ColorValue | undefined;
    color?: string | undefined;
    onPress: (e: GestureResponderEvent) => void
}