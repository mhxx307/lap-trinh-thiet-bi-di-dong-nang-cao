import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import vs_xanh from "../assets/imgs/vs_xanh.png";
import xanhduong from "../assets/imgs/xanhduong.png";
import den from "../assets/imgs/den.png";
import red from "../assets/imgs/red.png";
import xanhnhat from "../assets/imgs/xanhnhat.png";
import { Button } from "@react-native-material/core";

export default function ContentChooseProduct() {
    const colors = [xanhduong, den, red, xanhnhat];

    return (
        <View style={styles.container}>
            <Text>Chọn một màu bên dưới</Text>
            <View style={styles.colors}>
                {colors.map((color) => {
                    return (
                        <TouchableOpacity>
                            <Image
                                source={color}
                                style={{ width: 70, height: 70, marginTop: 20 }}
                                key={color}
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
            <View style={styles.btnContainer}>
                <Button title="XONG" style={styles.btn} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "space-around",
    },
    colors: {
        width: "100%",
        alignItems: "center",
    },
    btnContainer: {
        width: "100%",
    },
    btn: {
        padding: 5,
        backgroundColor: "blue",
        borderRadius: 7,
    },
});
