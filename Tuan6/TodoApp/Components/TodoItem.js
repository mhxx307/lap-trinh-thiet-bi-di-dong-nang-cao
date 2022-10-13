import { View, Text, TouchableOpacity, Button, Alert } from "react-native";
import React, { useContext } from "react";
import styles from "../assets/style/TodoListStyle";
import { MyContext } from "../Context";

export default function TodoItem({ item, index }) {
    const { courses, setCourses } = useContext(MyContext);
    const deleteSelectedElement = () => {
        Alert.alert(
            "Are You Sure Want To Delete Item = " + item.title.toUpperCase(),
            "Select Below Options",
            [
                { text: "Cancel", onPress: () => {}, style: "cancel" },
                {
                    text: "OK",
                    onPress: () => {
                        // Filter Data
                        const filteredData = courses.filter(
                            (course) => item.id !== course.id
                        );
                        //Updating List Data State with NEW Data.
                        setCourses(filteredData);
                    },
                },
            ]
        );
    };

    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>{index + 1}</Text>
                <Text style={styles.text}>{item.title}</Text>
                <Button title="Delete" onPress={deleteSelectedElement} />
            </TouchableOpacity>
        </View>
    );
}
