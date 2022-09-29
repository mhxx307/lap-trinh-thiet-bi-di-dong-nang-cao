import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function Item({ productItem }) {
    return (
        <View style={styles.container}>
            <Image source={productItem.image} style={styles.image} />
            <View>
                <Text>{productItem.name}</Text>
                <Text>{productItem.shop}</Text>
            </View>
            <View>
                <Button title="Chat" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        marginHorizontal: 20,
    },
    image: {
        width: 100,
        height: 100,
    },
});
