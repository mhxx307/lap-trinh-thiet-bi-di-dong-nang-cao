import { StatusBar } from "expo-status-bar";
// import useSate from "react";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    const [name, setName] = useState("");
    const handleShow = () => {};

    return (
        <View>
            <View style={styles.container}>
                <Text>Nhap: </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                ></TextInput>
                <Button title="Show" onPress={() => alert(name)}></Button>
            </View>
            <Text>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: 20,
        flexDirection: "row",
        alignItems: "space-between",
    },
    textInput: {
        height: 40,
        width: 200,
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
    },
});
