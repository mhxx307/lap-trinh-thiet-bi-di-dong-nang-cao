import { StatusBar, StyleSheet, View } from "react-native";
import Search from "./components/Search";
import BooksList from "./components/BooksList";
import BookProvider from "./store/BookProvider";
import Form from "./components/Form";

function App() {
    return (
        <View style={styles.container}>
            <View style={{ padding: 5 }}>
                <Search />
                <Form />
            </View>
            <BooksList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: StatusBar.currentHeight || 0,
        alignItems: "center",
    },
});

export default () => {
    return (
        <BookProvider>
            <App />
        </BookProvider>
    );
};
