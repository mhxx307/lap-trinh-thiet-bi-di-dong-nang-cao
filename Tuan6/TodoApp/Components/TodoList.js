import { FlatList, View } from "react-native";
import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ coursesData }) {
    return (
        <View>
            <FlatList
                data={coursesData}
                renderItem={({ item }) => <TodoItem item={item} />}
                keyExtractor={(item) => `${item.id}`}
            />
        </View>
    );
}
