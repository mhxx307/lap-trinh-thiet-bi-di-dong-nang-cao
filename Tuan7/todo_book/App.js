import axios from "axios";
import { useContext, useEffect } from "react";
import { Button, StatusBar, StyleSheet, TextInput, View } from "react-native";
import BookList from "./components/BookList";
import { addBook, fetchBooks, setBookInput } from "./store/actions";
import Context from "./store/Context";
import Provider from "./store/Provider";

function App() {
    const { state, dispatch } = useContext(Context);
    const { books, bookInput } = state;

    const handleAddBook = () => {
        dispatch(
            addBook({ name: bookInput, image: "image", id: books.length + 1 })
        );
    };

    useEffect(() => {
        const initFetch = async () => {
            const req = await axios.get(
                "https://63477bdcdb76843976ac206f.mockapi.io/api/book/books"
            );
            dispatch(fetchBooks(req.data));
        };
        initFetch();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.inputContain}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter..."
                    value={bookInput}
                    onChangeText={(text) => dispatch(setBookInput(text))}
                />
                <Button
                    style={styles.btn}
                    title="Add"
                    onPress={handleAddBook}
                />
            </View>
            <BookList />
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
        marginTop: StatusBar.currentHeight + 10,
    },
    inputContain: {
        flexDirection: "row",
    },
    input: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: "80%",
    },
    btn: {
        padding: 10,
        backgroundColor: "blue",
        color: "white",
        width: 100,
    },
});
