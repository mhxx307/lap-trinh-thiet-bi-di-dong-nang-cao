import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 20 }}>React native animation</Text>
            <Button title="Bai 1" onPress={() => navigation.navigate("Bai1")} />
            <View style={{ marginBottom: 20 }}></View>
            <Button title="Bai 2" onPress={() => navigation.navigate("Bai2")} />
            <View style={{ marginBottom: 20 }}></View>
            <Button title="Bai 3" onPress={() => navigation.navigate("Bai3")} />
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
});

export default Home;
