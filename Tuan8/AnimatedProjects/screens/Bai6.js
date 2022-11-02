import React, { useEffect, useRef } from "react";
import { Animated, Button, Image, StyleSheet, View } from "react-native";
import images from "../assets/images";

function Bai6() {
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence(
                // lac qua phai 45def
                [
                    Animated.timing(spinValue, {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: false,
                    }),

                    // lac qua trai 90 deg
                    Animated.timing(spinValue, {
                        toValue: -1,
                        duration: 2000,
                        useNativeDriver: false,
                    }),

                    // lac qua phai 45 deg: 0 ,90 def: 1
                    Animated.timing(spinValue, {
                        toValue: 0,
                        duration: 1000,
                        useNativeDriver: false,
                    }),
                ]
            )
        ).start();
    }, []);

    const spin = spinValue.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ["-45deg", "0deg", "45deg"],
    });

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.containerImage,
                    { transform: [{ rotate: spin }] },
                ]}
            >
                <Image style={styles.image} source={images.bell} />
            </Animated.View>
        </View>
    );
}

export default Bai6;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
    },
});
