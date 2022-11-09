import React, { useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import images from "../assets/images";

function Bai3() {
    // random number from 1 to 7
    const randomNumber = Math.floor(Math.random() * 7) + 1;

    const [locationCat, setLocationCat] = useState({
        xCat: null,
        yCat: null,
        marginLeftCat: new Animated.Value(10),
        marginTopCat: new Animated.Value(10),
    });

    const { marginTopCat, marginLeftCat } = locationCat;

    // mouse
    const randomLeft = Math.floor(Math.random() * 250) + 1;
    const randomTop = Math.floor(Math.random() * 250) + 1;

    const randomLeft1 = Math.floor(Math.random() * 250) + 1;
    const randomTop1 = Math.floor(Math.random() * 250) + 1;

    const randomLeft2 = Math.floor(Math.random() * 250) + 1;
    const randomTop2 = Math.floor(Math.random() * 250) + 1;

    const [location, setLocation] = useState({
        x: null,
        y: null,
        marginLeft: new Animated.Value(randomLeft),
        marginTop: new Animated.Value(randomTop),
    });

    const [location1, setLocation1] = useState({
        x1: null,
        y1: null,
        marginLeft1: new Animated.Value(randomLeft1),
        marginTop1: new Animated.Value(randomTop1),
    });

    const [location2, setLocation2] = useState({
        x2: null,
        y2: null,
        marginLeft2: new Animated.Value(randomLeft2),
        marginTop2: new Animated.Value(randomTop2),
    });

    const { marginTop, marginLeft } = location;
    const { marginTop1, marginLeft1 } = location1;
    const { marginTop2, marginLeft2 } = location2;

    const onTouch = (evt) => {
        const x = Math.floor(Math.random() * 250) + 1;
        const y = Math.floor(Math.random() * 250) + 1;

        const x1 = Math.floor(Math.random() * 250) + 1;
        const y1 = Math.floor(Math.random() * 250) + 1;

        const x2 = Math.floor(Math.random() * 250) + 1;
        const y2 = Math.floor(Math.random() * 250) + 1;

        setLocation({
            x: x,
            y: y,
            marginLeft: x,
            marginTop: y,
        });

        setLocation1({
            x1: x1,
            y1: y1,
            marginLeft1: x1,
            marginTop1: y1,
        });

        setLocation2({
            x2: x2,
            y2: y2,
            marginLeft2: x2,
            marginTop2: y2,
        });

        var x3 = evt.nativeEvent.locationX;
        var y3 = evt.nativeEvent.locationY;
        setLocationCat({
            xCat: x3,
            yCat: y3,
            marginLeftCat: x3,
            marginTopCat: y3,
        });
    };

    return (
        <View
            style={styles.container}
            onStartShouldSetResponder={() => true}
            onMoveShouldSetResponder={() => true}
        >
            <Animated.Image
                source={images.cat}
                style={{ marginLeft: marginLeftCat, marginTop: marginTopCat }}
            ></Animated.Image>

            <Animated.Image
                source={images.mouse}
                style={{ marginLeft: marginLeft, marginTop: marginTop }}
                onTouchStart={onTouch}
            ></Animated.Image>

            <Animated.Image
                source={images.mouse}
                style={{ marginLeft: marginLeft1, marginTop: marginTop1 }}
                onTouchStart={onTouch}
            ></Animated.Image>

            <Animated.Image
                source={images.mouse}
                style={{ marginLeft: marginLeft2, marginTop: marginTop2 }}
                onTouchStart={onTouch}
            ></Animated.Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Bai3;
