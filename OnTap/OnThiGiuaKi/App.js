import { useContext } from "react";
import { Alert, Button, StatusBar, StyleSheet, TextInput, View } from "react-native";
import TodoList from "./components/TodoList";
import { Provider, TodoContext } from "./Store";
import { addTodo, setTodoInput } from "./Store/actions";

function App() {
    const { state, dispatch } = useContext(TodoContext);
    const { todoInput } = state;

    const handleAddTodo = () => {
        dispatch(addTodo(todoInput));
        dispatch(setTodoInput(""));
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    value={todoInput}
                    placeholder="Enter a todo..."
                    onChangeText={(text) => dispatch(setTodoInput(text))}
                />
                <Button title="add" style={styles.btn} onPress={handleAddTodo} />
            </View>
            <TodoList />
        </View>
    );
}

export default () => {
    return (
        <Provider>
            <App />
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 10,
        marginTop: StatusBar.currentHeight,
    },
    inputWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    input: {
        border: 1,
        borderColor: "black",
        borderWidth: 1,
        flex: 1,
    },
});
