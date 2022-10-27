import { Image, StyleSheet, Text, View } from "react-native";
import images from "../assets/images";

function Banner() {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image source={images.ocuadieuki} style={styles.image} />
            </View>
            <View style={styles.section}>
                <Text style={styles.text}>Plant pot shopping</Text>
                <Text style={styles.link}>See the list</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: "row",
        backgroundColor: "green",
        padding: 10,
        borderRadius: 6,
    },
    image: {
        width: 90,
        height: 130,
    },
    section: {
        justifyContent: "center",
        marginLeft: 10,
    },
    text: {
        color: "white",
        fontSize: 20,
        textTransform: "capitalize",
    },
    link: {
        color: "white",
        fontSize: 20,
        marginTop: 5,
    },
});

export default Banner;
