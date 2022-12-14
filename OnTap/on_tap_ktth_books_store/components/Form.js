import { useContext } from "react";
import { Alert, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { request } from "../utils/request";
import { BookContext } from "../store/Context";

function Form() {
    const { name, setName, url, setUrl, fetchBooks, leftToRight } =
        useContext(BookContext);

    const handleAddBook = async () => {
        if (!name || !url) {
            Alert.alert("Error", "Book name and url cannot be empty");
            return;
        }

        try {
            const requestObj = {
                name,
                image: url,
            };
            const response = await request.post("/books", requestObj);
            setName("");
            setUrl("");
            Alert.alert("Success", "Book added successfully");
            leftToRight();
            fetchBooks();
        } catch (error) {
            Alert.alert("Error", "Something went wrong");
            throw new Error(error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <TextInput
                    style={styles.textInput}
                    value={name}
                    placeholder="Enter name..."
                    onChangeText={(text) => setName(text)}
                />
            </View>

            <View style={styles.wrapper}>
                <TextInput
                    style={styles.textInput}
                    value={url}
                    placeholder="Enter url..."
                    onChangeText={(text) => setUrl(text)}
                />
                <TouchableOpacity style={styles.addBtn} onPress={handleAddBook}>
                    <Ionicons name="add-circle" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        marginTop: 20,
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "black",
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
});

export default Form;
