import React from "react";
import {
    Button,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function BookItem({ item, index }) {
    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>{index + 1}</Text>
                <Text style={styles.text}>{item.name}</Text>
                <View>
                    <Image source={item.image} style={styles.image} />
                </View>
                <Button title="Delete" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 30,
    },
    text: {},
    image: {
        width: 50,
        height: 50,
    },
});
