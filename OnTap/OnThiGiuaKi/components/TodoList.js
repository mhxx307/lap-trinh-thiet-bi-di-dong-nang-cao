import { useContext } from "react";
import { FlatList, View } from "react-native";
import { TodoContext } from "../Store";
import TodoItem from "./TodoItem";

function TodoList() {
    const { state } = useContext(TodoContext);
    const { todoList } = state;
    return (
        <View>
            {todoList.map((todo, index) => {
                return <TodoItem key={index} todo={todo} index={index} />;
            })}
        </View>
    );
}

export default TodoList;
