import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "@react-native-material/core";
import rec from "../assets/rec.png";
import { LinearGradient } from "expo-linear-gradient";

export default function App1Screen() {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.linearGradient}
        >
            <View style={styles.container}>
                <Image source={rec} style={styles.image} />
                <Text style={styles.title}>Grown your business</Text>
                <Text style={styles.text}>
                    i will help you business using online server! Are you ready
                    begining?
                </Text>
                <View style={styles.wrapperBtn}>
                    <Button title="Login" style={styles.btn} />
                    <Button title="Sign up" style={styles.btn} />
                </View>
                <Text style={styles.link}>HOW WE WORK?</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 100,
        paddingLeft: 30,
        paddingRight: 30,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "400",
        marginBottom: 50,
    },
    wrapperBtn: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    btn: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#E3C000",
    },
    link: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
});
