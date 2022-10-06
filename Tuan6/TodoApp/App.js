import { StyleSheet, View, StatusBar } from "react-native";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

export default function App() {
    return (
        <View style={styles.container}>
            <TodoInput />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        padding: 15,
    },
});
