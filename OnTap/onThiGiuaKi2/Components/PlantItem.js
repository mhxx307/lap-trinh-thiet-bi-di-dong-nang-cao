import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PlantContext from "../Store/Context";

function PlantItem({ plantItem }) {
    const navigation = useNavigation();
    const { plantCart, setPlantCart } = useContext(PlantContext);

    const handleBuyPlant = () => {
        if (plantCart.length > 0) {
            plantCart.forEach((plant) => {
                if (plant.id == plantItem.id) {
                    plant.quantity += 1;
                    return setPlantCart([...plantCart]);
                } else {
                    plantItem.quantity = 1;
                    return setPlantCart([...plantCart, plantItem]);
                }
            });
        } else if (plantCart.length === 0) {
            plantItem.quantity = 1;
            setPlantCart([...plantCart, plantItem]);
        }
        navigation.navigate("Detail");
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleBuyPlant}>
                <View style={{ alignItems: "center" }}>
                    <Image source={plantItem.image} style={styles.image} />
                    <View>
                        <Text style={styles.name}>{plantItem.name}</Text>
                        <Text style={styles.price}>{plantItem.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "green",
        marginRight: 10,
    },
    image: {
        width: 100,
        height: 100,
    },
    name: {
        color: "red",
    },
    price: {
        color: "#000",
    },
});

export default PlantItem;
