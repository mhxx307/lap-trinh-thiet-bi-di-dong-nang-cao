import React from "react";
import { Button } from "@react-native-material/core";
// import stylesheet
import { StyleSheet, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Button title="Click Me" onPress={() => alert("🎉🎉🎉")} />
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
