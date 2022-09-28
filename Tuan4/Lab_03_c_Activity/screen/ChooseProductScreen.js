import { StyleSheet, Text, View, Image } from "react-native";
import vs_xanh from "../assets/imgs/vs_xanh.png";
import Content from "../components/ContentChooseProduct.js";

export default function ChooseProductScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={vs_xanh} width="0" height="0" />
                <View style={{ paddingTop: 10 }}>
                    <Text>Điện thoại Vsmart Joy 3</Text>
                    <Text>Hàng chính hãng</Text>
                </View>
            </View>

            <Content />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        padding: 10,
        flexDirection: "row",
        backgroundColor: "#fff",
    },
});
