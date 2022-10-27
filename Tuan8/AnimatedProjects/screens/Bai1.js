import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text } from "react-native";

function Bai1() {
    const fadeAni = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAni, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        fadeIn();
    }, []);

    return (
        <Animated.View style={[styles.container, { opacity: fadeAni }]}>
            <Text style={styles.text}>Welcome to animation React Native</Text>
        </Animated.View>
    );
}

export default Bai1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
