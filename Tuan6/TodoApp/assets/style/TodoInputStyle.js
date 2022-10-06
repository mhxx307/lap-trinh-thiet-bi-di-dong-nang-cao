import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    input: {
        flex: 1,
        padding: 10,
        borderColor: "#2ecc71",
        borderWidth: 1,
    },
    button: {
        marginLeft: 10,
    },
});

export default styles;
