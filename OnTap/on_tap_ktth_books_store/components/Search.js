import { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { BookContext } from "../store/Context";

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const { fetchBookById } = useContext(BookContext);

    const handleSearchBook = () => {
        if (!searchValue) {
            alert("Please enter a book id");
            return;
        }

        fetchBookById(searchValue);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                value={searchValue}
                placeholder="Enter id..."
                onChangeText={(text) => setSearchValue(text)}
            />

            <TouchableOpacity style={styles.searchBtn} onPress={handleSearchBook}>
                <Text>Search</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "black",
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },

    searchBtn: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
    },
});

export default Search;
