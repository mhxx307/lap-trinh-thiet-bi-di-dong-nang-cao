import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon, IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function ChooseColor({ navi }) {
    return (
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navi.navigate("chooseProductScreen")}
                >
                    <View style={styles.containItem}>
                        <Text>4 MÀU - CHỌN MÀU</Text>
                        <Icon name="greater-than" size={24} />
                    </View>
                </TouchableOpacity>
            </View>
        </IconComponentProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 30,
    },
    btn: {
        padding: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
    },
    containItem: {
        flexDirection: "row",
        justifyContent: "center",
    },
});
