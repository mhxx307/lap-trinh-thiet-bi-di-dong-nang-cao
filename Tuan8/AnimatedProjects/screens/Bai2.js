import React, { useEffect, useRef } from "react";
import { Animated, Button, Image, StyleSheet, View } from "react-native";
import favicon from "../assets/favicon.png";

function Bai2() {
    const fadeAni = useRef(new Animated.Value(0)).current;
    const translateXAni = useRef(new Animated.Value(0)).current;
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
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const bottomToTop = () => {
        Animated.timing(translateYAni, {
            toValue: 1,
            duration: 500,
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

    const rightToLeft = () => {
        Animated.timing(translateXAni, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
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
                        transform: [
                            { translateY: translateYAni },
                            { translateX: translateXAni },
                        ],
                    },
                ]}
            >
                <Image style={styles.image} source={favicon} />
            </Animated.View>
            <View style={styles.containerButton}>
                <Button title="Top to Bottom" onPress={() => topToBottom()} />
                <Button title="Bottom to Top" onPress={() => bottomToTop()} />
                <Button title="Left to Right" onPress={() => leftToRight()} />
                <Button title="Right to Left" onPress={() => rightToLeft()} />
            </View>
        </View>
    );
}

export default Bai2;

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
