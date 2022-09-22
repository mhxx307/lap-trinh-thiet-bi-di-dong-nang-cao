import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import gt2 from "../assets/giaiTich.jpg";

export default function Lab_03_a() {
    return (
        <View style={styles.container}>
            {/* wrapper 1 , header */}
            <View style={[styles.wrapper, { paddingBottom: 20 }]}>
                <View style={styles.headerLeft}>
                    <Image source={gt2} style={styles.image} />
                    <Text style={styles.textBold}>Mã giảm giá đã lưu</Text>
                </View>
                <View style={styles.headerRight}>
                    <Text style={[styles.textBold, { marginBottom: 10 }]}>
                        Nguyên hàm tích phân và ứng dụng
                    </Text>
                    <Text style={[styles.textBold, { marginBottom: 10 }]}>
                        Cung cấp bởi Tiki Trading
                    </Text>
                    <Text style={[styles.textPrice, { marginBottom: 10 }]}>
                        141.800 đ
                    </Text>
                    <Text>141.000 đ</Text>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                width: "20%",
                                alignItems: "center",
                            }}
                        >
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    alert("you clicked me");
                                }}
                            >
                                <MaterialCommunityIcons
                                    name="minus"
                                    size={10}
                                />
                            </TouchableOpacity>

                            <Text>1</Text>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    alert("you clicked me");
                                }}
                            >
                                <MaterialCommunityIcons name="plus" size={10} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.link}>Mua sau</Text>
                    </View>
                </View>
            </View>
            {/* end wrapper 1 */}

            {/* start wrapper 2 */}
            <View style={[styles.wrapper, { marginBottom: 20 }]}>
                <View style={styles.discountContain}>
                    <View
                        style={{
                            width: 60,
                            height: 20,
                            backgroundColor: "yellow",
                            marginRight: 10,
                        }}
                    ></View>
                    <Text style={styles.textBold}>Mã giảm giá</Text>
                </View>
                <View>
                    <Button
                        title="Áp dụng"
                        style={[styles.btn, styles.btnBlue]}
                    />
                </View>
            </View>
            {/* end wrapper 2 */}

            {/* start wrapper 3 */}
            <View style={[styles.wrapper, { marginBottom: 20 }]}>
                <View style={styles.wrapperText}>
                    <Text style={styles.textBold}>
                        Bạn có phiếu quà tặng Tiki/Got it/Urbox?
                    </Text>
                    <Text style={styles.link}>Nhận tại đây?</Text>
                </View>
            </View>
            {/* end wrapper 3 */}

            {/* wrapper 4 */}
            <View style={[styles.wrapper, { marginBottom: 110, padding: 20 }]}>
                <View style={styles.tamTinhContain}>
                    <Text style={[styles.textBold, { fontSize: 18 }]}>
                        Tạm tính
                    </Text>
                    <Text style={styles.textPrice}>141.000 đ</Text>
                </View>
            </View>
            {/* wrapper 4 */}

            {/* wrapper 4 */}
            <View style={[styles.wrapper]}>
                <View style={styles.tamTinhContain}>
                    <Text
                        style={{
                            color: "#999",
                            fontWeight: "bold",
                            fontSize: 18,
                        }}
                    >
                        Thành tiền
                    </Text>
                    <Text style={styles.textPrice}>141.000 đ</Text>
                </View>
            </View>

            {/* wrapper button */}
            <View
                style={{
                    backgroundColor: "#fff",
                    width: "100%",
                    paddingHorizontal: 10,
                    paddingVertical: 30,
                }}
            >
                <Button
                    title="TIẾN HÀNH ĐẶT HÀNG"
                    style={[styles.btn, styles.btnRed]}
                />
            </View>
            {/* end wrapper button */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#999",
    },
    wrapper: {
        padding: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
    },
    image: {
        width: 140,
        height: 170,
        marginBottom: 15,
    },
    discountContain: {
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderWidth: 1,
        borderColor: "#333",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 4,
    },
    btn: {
        paddingVertical: 10,
    },
    btnBlue: {
        backgroundColor: "blue",
    },
    btnRed: {
        backgroundColor: "red",
    },
    button: {
        backgroundColor: "#859a9b",
        borderRadius: 20,
        padding: 10,
        shadowColor: "#303838",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
    },
    wrapperText: {
        width: "100%",
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
    },
    tamTinhContain: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textBold: {
        fontWeight: "bold",
    },
    headerRight: {
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
    },
    textPrice: {
        fontWeight: "bold",
        color: "red",
        fontSize: 20,
    },
    link: {
        color: "blue",
    },
});
