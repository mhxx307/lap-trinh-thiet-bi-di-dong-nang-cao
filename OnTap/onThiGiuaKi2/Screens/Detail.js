import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PlantCartItem from "../Components/PlantCartItem";
import PlantContext from "../Store/Context";

function Detail() {
    const { plantCart } = useContext(PlantContext);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 20 }}>
                <Text>Back</Text>
            </TouchableOpacity>
            <FlatList
                data={plantCart}
                renderItem={({ item }) => <PlantCartItem item={item} />}
                keyExtractor={(item, index) => {
                    return index;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
});

export default Detail;
