import { StyleSheet, View, StatusBar } from "react-native";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import Context from "./Context";

function App() {
    return (
        <View style={styles.container}>
            <TodoInput />
            <TodoList />
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

// export context
export default () => {
    return (
        <Context>
            <App />
        </Context>
    );
};
