import { StatusBar, StyleSheet, View } from "react-native";
import { Search, Content, Banner, PlantList } from "../Components";

function Home() {
    return (
        <View style={styles.container}>
            <Search />
            <Content />
            <Banner />
            <PlantList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        padding: 15,
    },
});

export default Home;
