import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import styles from "../assets/style/TodoInputStyle";
import { AntDesign } from "@expo/vector-icons";
import { MyContext } from "../Context";

export default function TodoInput() {
    const [text, setText] = useState("");
    const { courses, setCourses } = useContext(MyContext);

    handleAddCourse = () => {
        if (text.length > 0) {
            setCourses([...courses, { id: courses.length + 1, title: text }]);
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
        </View>
    );
}
