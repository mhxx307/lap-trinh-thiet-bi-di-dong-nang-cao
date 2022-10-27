import { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import PlantContext from "../Store/Context";
import PlantItem from "./PlantItem";

function PlantList() {
    const { plants } = useContext(PlantContext);
    return (
        <View style={styles.container}>
            <FlatList
                data={plants}
                renderItem={({ item }) => <PlantItem plantItem={item} />}
                keyExtractor={(item) => `${item.id}`}
                horizontal={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
});

export default PlantList;
