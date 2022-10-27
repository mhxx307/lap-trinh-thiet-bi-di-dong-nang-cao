import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";
import favicon from "../assets/favicon.png";

function Bai4() {
    const fadeAni = useRef(new Animated.Value(0)).current;
    const translateXAni = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAni, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    const leftToRight = () => {
        Animated.timing(translateXAni, {
            toValue: 300,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        fadeIn();
        leftToRight();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View style={styles.containerImage}>
                <Image
                    style={[styles.image, { transform: [{ translateX: translateXAni }] }]}
                    source={favicon}
                />
                <Text style={[styles.text, { opacity: fadeAni }]}>Hello</Text>
            </Animated.View>
        </View>
    );
}

export default Bai4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    containerImage: {},
    containerButton: {},
    image: {
        width: 100,
        height: 100,
    },
});
