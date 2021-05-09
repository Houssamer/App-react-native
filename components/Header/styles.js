import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header: {
        position: "absolute",
        top: "0%",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        zIndex: 100,
    },
    logo: {
        width: 110,
        height: 20,
        resizeMode: "contain",
    },
    menu: {
        width: 35,
        height: 35,
    },
});