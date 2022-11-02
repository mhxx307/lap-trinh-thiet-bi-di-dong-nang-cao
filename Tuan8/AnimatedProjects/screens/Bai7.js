import React, { useEffect, useRef } from "react";
import { Animated, Easing, Image, StyleSheet, View } from "react-native";
import images from "../assets/images";

function Bai7() {
    const spinValue = useRef(new Animated.Value(0)).current;

    Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false,
            easing: Easing.linear,
        })
    ).start();

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.containerImage,
                    { transform: [{ rotate: spin }] },
                ]}
            >
                <Image style={styles.image} source={images.donut} />
            </Animated.View>
        </View>
    );
}

export default Bai7;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
    },
});
