import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
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
            duration: 5000,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        fadeIn();
        leftToRight();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.containerImage,
                    { transform: [{ translateX: translateXAni }] },
                ]}
            >
                <Image style={styles.image} source={favicon} />
            </Animated.View>
            <Animated.View style={{ opacity: fadeAni }}>
                <View>
                    <Text style={styles.text}>Hello</Text>
                </View>
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

    containerImage: {
        position: "absolute",
        left: 0,
        top: "30%",
    },

    image: {
        width: 100,
        height: 100,
    },
});
