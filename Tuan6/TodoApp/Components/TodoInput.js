import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "../assets/style/TodoInputStyle";
import { AntDesign } from "@expo/vector-icons";
import courses from "../data";
import TodoList from "./TodoList";

export default function TodoInput() {
    const [text, setText] = useState("");
    const [courseList, setCourseList] = useState(courses);

    handleAddCourse = () => {
        if (text.length > 0) {
            setCourseList([...courseList, { id: courseList.length + 1, title: text }]);
            setText("");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput
                    value={text}
                    placeholder="Enter"
                    onChangeText={(text) => {
                        setText(text);
                    }}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button} onPress={handleAddCourse}>
                    <AntDesign name="pluscircle" size={24} color="#2ecc71" />
                </TouchableOpacity>
            </View>

            <TodoList coursesData={courseList} />
        </View>
    );
}
