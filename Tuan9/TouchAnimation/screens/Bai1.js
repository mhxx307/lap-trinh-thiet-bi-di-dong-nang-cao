import React, { useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import images from "../assets/images";

function Bai1() {
    const [location, setLocation] = useState({
        x: null,
        y: null,
        marginLeft: new Animated.Value(10),
        marginTop: new Animated.Value(10),
    });

    function onPress(evt) {
        var x = evt.nativeEvent.locationX;
        var y = evt.nativeEvent.locationY;
        setLocation({
            x: x,
            y: y,
            marginLeft: x,
            marginTop: y,
        });
    }
    function onMove(evt) {
        //setLocation({marginLeft: x, marginTop: y })
    }
    function onRelease() {
        console.log("Realse!");
    }
    const { marginTop, marginLeft } = location;

    return (
        <View
            onStartShouldSetResponder={() => true}
            onMoveShouldSetResponder={() => true}
            onResponderGrant={onPress}
            onResponderMove={onMove}
            onResponderRelease={onRelease}
            style={styles.container}
        >
            <Animated.Image
                source={images.cat}
                style={{ marginLeft: marginLeft, marginTop: marginTop }}
            ></Animated.Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Bai1;
