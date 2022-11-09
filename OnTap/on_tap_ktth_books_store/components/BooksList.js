import { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { BookContext } from "../store/Context";
import BookItem from "./BookItem";

function BooksList() {
    const { books } = useContext(BookContext);
    return (
        <View style={styles.container}>
            <FlatList
                data={books}
                renderItem={({ item }) => <BookItem book={item} />}
                keyExtractor={(item) => `${item.id}`}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: "100%",
    },
});

export default BooksList;
