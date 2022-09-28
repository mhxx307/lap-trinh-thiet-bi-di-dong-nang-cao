import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "@react-native-material/core";
import { Icon, IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import vs_xanh from "../assets/imgs/vs_xanh.png";
import ChooseColor from "../components/ChooseColor";

export default function HomeScreen({ navigation }) {
    const starNumber = [1, 2, 3, 4, 5];
    return (
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <View style={styles.container}>
                <Image source={vs_xanh} style={styles.image} />

                <Text
                    style={{
                        textAlign: "left",
                        width: "100%",
                        marginTop: 20,
                    }}
                >
                    Điện thoại VSsmart Joy 3 - Hàng chính hãng!
                </Text>

                <View style={styles.evaluaContainer}>
                    <View style={styles.evalua}>
                        {starNumber.map((star) => {
                            return (
                                <Icon
                                    name="star"
                                    size={24}
                                    color="yellow"
                                    key={star}
                                />
                            );
                        })}
                    </View>
                    <Text style={{ lineHeight: 25 }}>(Xem 828 đánh giá)</Text>
                </View>

                <View style={styles.priceContainer}>
                    <Text style={styles.textBold}>1.790.000 đ</Text>
                    <Text style={[styles.textLight, styles.textDeleted]}>
                        1.790.000 đ
                    </Text>
                </View>

                <View style={{ flexDirection: "row", width: "100%" }}>
                    <Text
                        style={{
                            fontWeight: "bold",
                            marginRight: 10,
                            color: "red",
                        }}
                    >
                        ở đâu rẻ hơn hoàn tiền
                    </Text>
                    <Icon name="help-circle-outline" size={24} color="gray" />
                </View>

                <ChooseColor navi={navigation} />

                <View style={styles.btnContain}>
                    <Button title="CHỌN MUA" style={styles.btn} />
                </View>
            </View>
        </IconComponentProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    image: {
        width: 250,
        height: 270,
    },
    evaluaContainer: {
        width: "100%",
        flexDirection: "row",
        height: 30,
        marginTop: 10,
        marginBottom: 10,
    },
    evalua: {
        flexDirection: "row",
        marginRight: 20,
    },
    priceContainer: {
        width: "100%",
        flexDirection: "row",
    },
    textBold: {
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 30,
    },
    textLight: {
        color: "gray",
        textDecorationLine: "line-through",
        lineHeight: 35,
        marginLeft: 30,
    },
    btnContain: {
        width: "100%",
        position: "relative",
        bottom: -100,
    },
    btn: {
        backgroundColor: "red",
        color: "white",
        padding: 10,
        borderRadius: 5,
        fontSize: 20,
        fontWeight: "bold",
    },
});
