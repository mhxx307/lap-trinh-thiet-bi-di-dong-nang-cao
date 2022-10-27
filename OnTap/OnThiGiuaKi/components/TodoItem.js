import React, { useContext } from "react";
import { Alert, Button, Text, TouchableOpacity, View } from "react-native";
import { TodoContext } from "../Store";
import { deleteTodo } from "../Store/actions";

function TodoItem({ todo, index }) {
    const { dispatch } = useContext(TodoContext);
    const handleDeleteTodo = () => {
        Alert.alert(index.toString());
        dispatch(deleteTodo(index));
    };
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
            }}
        >
            <Text>
                {index}. {todo}
            </Text>
            <Button title="Delete" onPress={handleDeleteTodo} />
        </View>
    );
}

export default TodoItem;
