import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import { windowWidth } from "../../../constants/HeightWidth";

export const smallBoxStyle = StyleSheet.create({
    box:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: Colors.light.border,
        width: windowWidth/2.25,
        gap: 10,
    },
    title:{
        fontWeight: "500",
        fontSize:14,
        textAlign: "center",
    },
})