import { FlatList, View } from "react-native";
import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ coursesData, setCourseList }) {
    return (
        <View>
            <FlatList
                data={coursesData}
                renderItem={({ item }) => (
                    <TodoItem
                        item={item}
                        courses={coursesData}
                        setCourses={setCourseList}
                    />
                )}
                keyExtractor={(item) => `${item.id}`}
            />
        </View>
    );
}
