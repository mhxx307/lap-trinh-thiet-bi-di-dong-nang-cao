import React from "react";
import { Button, TextInput } from "@react-native-material/core";
import lock from "./assets/lock.png";
import { StyleSheet, View, Image, Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
    return (
        <View style={styles.container}>
            <Image source={lock} style={styles.image} />
            <Text style={styles.title}>Forget password</Text>
            <Text style={styles.subtitle}>
                Please your account email for which you want to reset your
                password
            </Text>
            <TextInput
                style={styles.input}
                label="Email"
                leading={(props) => <Icon name="email" {...props} />}
            />
            <Button
                style={styles.button}
                title="Click Me"
                onPress={() => alert("🎉🎉🎉")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 30,
        paddingLeft: 30,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        textTransform: "uppercase",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 20,
    },
    subtitle: {
        fontSize: 14,
        textAlign: "center",
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    input: {
        width: "100%",
        marginBottom: 20,
    },
    button: {
        width: "100%",
        backgroundColor: "#E3C000",
        color: "#333",
        padding: 10,
        borderRadius: 4,
    },
});
