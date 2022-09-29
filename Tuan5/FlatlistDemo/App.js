import { FlatList, StyleSheet, Text, View } from "react-native";
import Item from "./components/Item.js";
import products from "./data.js";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={24} color="#fff" />
                <Text style={styles.title}>Chat</Text>
                <Entypo name="shopping-cart" size={24} color="#fff" />
            </View>
            <View style={styles.remind}>
                <Text style={styles.remindText}>
                    Bạn có thắc mắc với shop.Đừng ngại chat với shop!
                </Text>
            </View>
            <FlatList
                data={products}
                renderItem={({ item }) => <Item productItem={item} />}
                keyExtractor={(item) => `${item.id}`}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "stretch",
        justifyContent: "center",
    },
    header: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        paddingVertical: 10,
        backgroundColor: "#1BA9FF",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        color: "white",
    },
    remind: {
        backgroundColor: "#E5E5E5",
        paddingLeft: 20,
        paddingVertical: 10,
    },
});
