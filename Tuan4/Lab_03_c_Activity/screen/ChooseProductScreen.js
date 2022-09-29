import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import vs_xanh from "../assets/imgs/vs_xanh.png";
import vs_do from "../assets/imgs/vs_do.png";
import vs_den from "../assets/imgs/vs_den.png";
import vs_bac from "../assets/imgs/vs_bac.png";
import xanhduong from "../assets/imgs/xanhduong.png";
import den from "../assets/imgs/den.png";
import red from "../assets/imgs/red.png";
import xanhnhat from "../assets/imgs/xanhnhat.png";
import { Button } from "@react-native-material/core";
import { useState } from "react";
import { useEffect } from "react";

export default function ChooseProductScreen() {
    const smartphone = [
        { color: xanhduong, vs: vs_xanh },
        { color: den, vs: vs_den },
        { color: red, vs: vs_do },
        { color: xanhnhat, vs: vs_bac },
    ];

    const [vs, setVs] = useState(smartphone[0].vs);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={vs} width="0" height="0" />
                <View style={{ paddingTop: 10 }}>
                    <Text>Điện thoại Vsmart Joy 3</Text>
                    <Text>Hàng chính hãng</Text>
                </View>
            </View>

            <View style={styles.content}>
                <Text>Chọn một màu bên dưới</Text>
                <View style={styles.colors}>
                    {smartphone.map((item, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => setVs(item.vs)}
                                key={index}
                            >
                                <Image
                                    source={item.color}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        marginTop: 20,
                                    }}
                                />
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <View style={styles.btnContainer}>
                    <Button title="XONG" style={styles.btn} />
                </View>
            </View>
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

    // content
    content: {
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
