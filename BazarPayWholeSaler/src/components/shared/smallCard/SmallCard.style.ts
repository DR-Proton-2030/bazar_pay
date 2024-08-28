import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export const smallCardStyle = StyleSheet.create({
    card:{
        flexDirection: "row",
        backgroundColor: Colors.light.grayBg,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 18,
        // borderWidth: 1.5,
        borderRadius: 10,
        borderColor: Colors.light.lightBlue,
        marginRight:10,
        minWidth: 220,
        // elevation:1,
        marginBottom:10,
        marginLeft:4
    }
})