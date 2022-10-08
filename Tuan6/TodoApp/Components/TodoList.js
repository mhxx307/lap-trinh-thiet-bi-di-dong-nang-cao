import { FlatList, View } from "react-native";
import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { MyContext } from "../Context";

export default function TodoList() {
    const { courses } = useContext(MyContext);
    return (
        <View>
            <FlatList
                data={courses}
                renderItem={({ item }) => <TodoItem item={item} />}
                keyExtractor={(item) => `${item.title}`}
            />
        </View>
    );
}
