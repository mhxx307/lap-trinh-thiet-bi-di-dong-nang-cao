import { StyleSheet, View } from "react-native";
import HeaderBar from "./components/HeaderBar";

export default function App() {
    return (
        <View style={styles.container}>
            <HeaderBar />
            {/* <FlatList /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
