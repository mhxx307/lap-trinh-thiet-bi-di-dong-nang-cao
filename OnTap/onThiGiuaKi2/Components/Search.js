import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Search() {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Search for plants" style={styles.input} />
            <TouchableOpacity style={styles.btn}>
                <FontAwesome name="search-plus" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    btn: {
        justifyContent: "center",
        marginLeft: 20,
        paddingHorizontal: 15,
        backgroundColor: "green",
        borderRadius: 6,
    },
});

export default Search;
