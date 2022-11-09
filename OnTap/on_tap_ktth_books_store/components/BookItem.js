import { useContext } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BookContext } from "../store/Context";
import { request } from "../utils/request";

function BookItem({ book }) {
    const { name, url, fetchBooks } = useContext(BookContext);

    const handleDelete = async () => {
        try {
            await request.delete(`/books/${book.id}`);
            fetchBooks();
            Alert.alert("Success", "Book deleted successfully");
        } catch (error) {
            Alert.alert("Error", "Something went wrong");
        }
    };

    const handleEdit = () => {
        if (!name) {
            Alert.alert("Error", "Book name cannot be empty");
            return;
        } else if (!url) {
            Alert.alert("Error", "Book image cannot be empty");
            return;
        }

        request
            .put(`/books/${book.id}`, { name, image: url })
            .then(() => {
                fetchBooks();
                Alert.alert("Success", "Book updated successfully");
            })
            .catch(() => {
                Alert.alert("Error", "Something went wrong");
            });
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: book.image }} style={styles.image} />
            <Text style={styles.name}>{book.name}</Text>

            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: "red" }]}
                    onPress={handleDelete}
                >
                    <Text style={{ color: "#fff" }}>Delete</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: "blue", marginLeft: 5 }]}
                    onPress={handleEdit}
                >
                    <Text style={{ color: "#fff" }}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        backgroundColor: "#95a5a6",
        padding: 5,
        justifyContent: "space-between",
    },
    image: {
        width: 100,
        height: 150,
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    btn: {
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 5,
    },
});

export default BookItem;
