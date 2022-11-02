import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import images from "../assets/images";

function Bai5() {
    const pumpkinAni = useRef(new Animated.Value(0)).current;
    const ghostAni = useRef(new Animated.Value(0)).current;
    const cosplayAni = useRef(new Animated.Value(0)).current;
    const fadeAniPumpkin = useRef(new Animated.Value(1)).current;
    const fadeAniGhost = useRef(new Animated.Value(0)).current;
    const fadeAniCosplay = useRef(new Animated.Value(0)).current;
    const scaleAni = useRef(new Animated.Value(0)).current;

    const scaleIn = () => {
        Animated.timing(scaleAni, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    // fade
    const fadeOutPumpkin = () => {
        Animated.timing(fadeAniPumpkin, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    const fadeInGhost = () => {
        Animated.timing(fadeAniGhost, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    const fadeOutGhost = () => {
        Animated.timing(fadeAniGhost, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    const fadeInCosplay = () => {
        Animated.timing(fadeAniCosplay, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    const fadeOutCosplay = () => {
        Animated.timing(fadeAniCosplay, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    // move
    const leftToRight = () => {
        Animated.timing(pumpkinAni, {
            toValue: 300,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    };

    const topToBottom = () => {
        Animated.timing(ghostAni, {
            toValue: 750,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    };

    const rightToLeft = () => {
        Animated.timing(cosplayAni, {
            toValue: -300,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        leftToRight();

        setTimeout(() => {
            fadeOutPumpkin();
            fadeInGhost();
            topToBottom();
        }, 5000);

        setTimeout(() => {
            fadeOutGhost();
            fadeInCosplay();
            rightToLeft();
        }, 10000);

        setTimeout(() => {
            fadeOutCosplay();
            scaleIn();
        }, 15000);
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.imagePumpkin,
                    {
                        transform: [{ translateX: pumpkinAni }],
                        opacity: fadeAniPumpkin,
                    },
                ]}
            >
                <Image style={styles.image} source={images.pumpkin} />
            </Animated.View>

            <Animated.View
                style={[
                    styles.imageGhost,
                    {
                        transform: [{ translateY: ghostAni }],
                        opacity: fadeAniGhost,
                    },
                ]}
            >
                <Image style={styles.image} source={images.ghost} />
            </Animated.View>

            <Animated.View
                style={[
                    styles.imageCosplay,
                    {
                        transform: [{ translateX: cosplayAni }],
                        opacity: fadeAniCosplay,
                    },
                ]}
            >
                <Image style={styles.image} source={images.cosplayer} />
            </Animated.View>

            <Animated.View
                style={[
                    styles.textWrapper,
                    {
                        transform: [{ scale: scaleAni }],
                    },
                ]}
            >
                <Text style={styles.text}>THE END</Text>
            </Animated.View>
        </View>
    );
}

export default Bai5;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        position: "relative",
    },

    image: {
        width: 100,
        height: 100,
    },

    imageGhost: {
        position: "absolute",
        top: 0,
        right: 0,
    },

    imageCosplay: {
        position: "absolute",
        bottom: 0,
        right: 0,
    },

    textWrapper: {
        position: "absolute",
        top: "50%",
        left: "35%",
    },

    text: {
        fontSize: 30,
        fontWeight: "bold",
    },
});
