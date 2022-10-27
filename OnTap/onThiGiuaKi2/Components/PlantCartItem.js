import { Button, Image, StyleSheet, Text, View } from "react-native";

function PlantCartItem({ item }) {
    return (
        <View style={styles.container}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.aside}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <View style={styles.wrapper}>
                    <View style={styles.action}>
                        <Button title="-" />
                        <Text style={styles.quantity}>{item.quantity}</Text>
                        <Button title="+" />
                    </View>
                    <Button title="Remove" style={styles.remove} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 10,
    },
    image: {
        width: 90,
        height: 130,
        marginRight: 20,
    },
    aside: {
        flex: 1,
        justifyContent: "space-between",
    },
    name: {
        color: "red",
    },
    price: {
        color: "#000",
    },
    wrapper: {
        flexDirection: "row",
    },
    action: {
        flexDirection: "row",
        marginRight: 30,
    },
    quantity: {
        marginHorizontal: 10,
    },
});

export default PlantCartItem;
