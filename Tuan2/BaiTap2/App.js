import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    const account = [
        { username: "user1", password: "pass1" },
        { username: "user2", password: "pass2" },
    ];

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const user = account.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            alert("Login Success");
        } else {
            alert("Login Failed");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.text}>User name: </Text>
                <TextInput
                    value={username}
                    placeholder="enter user name"
                    style={styles.textInput}
                    onChangeText={(text) => setUsername(text)}
                />
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Password: </Text>

                <TextInput
                    value={password}
                    secureTextEntry={true}
                    placeholder="enter password"
                    style={styles.textInput}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <Button title="Login" onPress={handleLogin}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textInput: {
        height: 40,
        width: 250,
        borderColor: "gray",
        borderWidth: 1,
    },
    text: {
        minWidth: 100,
    },
});
