import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import { windowWidth } from "../../../constants/HeightWidth";

export const longCardStyle = StyleSheet.create({
    card:{
        flexDirection: "row",
        backgroundColor: Colors.light.cardColor,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: Colors.light.border,
        marginRight:20,
        marginVertical:14,
        minWidth: "100%", 
        flex: 1,
    }
})