import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export const smallCardStyle = StyleSheet.create({
    card:{
        flexDirection: "row",
        backgroundColor: Colors.light.cardColor,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: Colors.light.border,
    }
})