import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "../assets/images";

function Content() {
    return (
        <View style={styles.container}>
            <View style={styles.asideLeft}>
                <Text style={styles.title}>Welcome!</Text>
                <Text style={styles.message}>Earth laughs through flowers so let her laugh</Text>
                <View style={styles.btnWrapper}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: "white", fontSize: 18 }}>How to Plant?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.asideImage}>
                <Image source={images.kiquanmaster} style={styles.image} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    image: {
        width: 130,
        height: 200,
    },
    asideLeft: {
        flex: 6,
    },
    asideImage: {
        flex: 4,
        position: "relative",
        left: 14,
    },
    title: {
        fontSize: 30,
        color: "red",
        fontWeight: "bold",
        marginBottom: 20,
    },
    message: {
        flex: 1,
        fontSize: 18,
    },
    btnWrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    button: {
        padding: 10,
        backgroundColor: "green",
        borderRadius: 5,
    },
});

export default Content;
