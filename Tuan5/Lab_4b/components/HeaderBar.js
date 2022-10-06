import { StyleSheet, Text, View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HeaderBar() {
    return (
        <View style={styles.header}>
            <AntDesign
                name="arrowleft"
                size={24}
                color="#fff"
                style={styles.searchIcon}
            />
            <View style={styles.searchSection}>
                <AntDesign name="search1" size={24} />
                <TextInput
                    style={styles.input}
                    placeholder="User Nickname"
                    underlineColorAndroid="transparent"
                />
            </View>
            <Entypo name="shopping-cart" size={24} color="#fff" />
            <MaterialCommunityIcons
                name="dots-horizontal"
                size={24}
                color="#fff"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 10,
        backgroundColor: "#1BA9FF",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        color: "white",
    },
    searchSection: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        marginHorizontal: 10,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: "#fff",
        color: "#424242",
    },
});
