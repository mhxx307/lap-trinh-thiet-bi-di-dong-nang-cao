import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import styles from "../assets/style/TodoListStyle";

export default function TodoItem({ item }) {
    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>{item.id}</Text>
                <Text style={styles.text}>{item.title}</Text>
                <Button title="Delete" />
            </TouchableOpacity>
        </View>
    );
}
