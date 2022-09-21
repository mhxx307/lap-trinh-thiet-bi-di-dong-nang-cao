import React from "react";
import { Button, View, Text } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Home Screen</Text>
            <View style={{ marginTop: 20 }}></View>

            <Button title="App 1" onPress={() => navigation.navigate("App1")} />
            <View style={{ marginBottom: 20 }}></View>

            <Button title="App 2" onPress={() => navigation.navigate("App2")} />
            <View style={{ marginBottom: 20 }}></View>

            <Button title="App 3" onPress={() => navigation.navigate("App3")} />
        </View>
    );
}
