import React, { useEffect, useRef } from "react";
import { Animated, Button, Image, StyleSheet, View } from "react-native";
import favicon from "../assets/favicon.png";

function Bai3() {
    const fadeAni = useRef(new Animated.Value(0)).current;
    const translateYAni = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAni, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    const topToBottom = () => {
        Animated.timing(translateYAni, {
            toValue: 600,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    };

    const stopAni = () => {
        Animated.timing(translateYAni).stop();
    };

    const resetAni = () => {
        Animated.timing(translateYAni).reset();
    };

    useEffect(() => {
        fadeIn();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.containerImage,
                    {
                        opacity: fadeAni,
                        transform: [{ translateY: translateYAni }],
                    },
                ]}
            >
                <Image style={styles.image} source={favicon} />
            </Animated.View>
            <View style={styles.containerButton}>
                <Button title="Top to Bottom" onPress={() => topToBottom()} />
                <Button title="Stop" onPress={() => stopAni()} />
                <Button title="Reset" onPress={() => resetAni()} />
            </View>
        </View>
    );
}

export default Bai3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-between",
    },
    containerImage: {},
    containerButton: {},
    image: {
        width: 100,
        height: 100,
    },
});
