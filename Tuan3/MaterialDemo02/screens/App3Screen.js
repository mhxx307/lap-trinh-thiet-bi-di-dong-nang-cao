import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Button, TextInput } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App3Screen() {
    const [password, setPassword] = useState("");
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState("eye");

    const handlePasswordVisibility = () => {
        if (rightIcon === "eye") {
            setRightIcon("eye-off");
            setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === "eye-off") {
            setRightIcon("eye");
            setPasswordVisibility(!passwordVisibility);
        }
    };

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.linearGradient}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input} placeholder="Email" />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputPassword}
                        name="password"
                        placeholder="Enter password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        textContentType="newPassword"
                        secureTextEntry={passwordVisibility}
                        value={password}
                        enablesReturnKeyAutomatically
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Pressable
                        onPress={handlePasswordVisibility}
                        style={styles.press}
                    >
                        <MaterialCommunityIcons
                            name={rightIcon}
                            size={22}
                            color="#232323"
                        />
                    </Pressable>
                </View>

                <View style={{ width: "100%" }}>
                    <Button styles={styles.btnRegister} title="Login" />
                </View>

                <View>
                    <Text style={styles.text}>
                        When you argee to terms and conditions
                    </Text>
                    <Text style={styles.text}>For got your password?</Text>
                    <Text style={styles.text}>Or login with</Text>
                </View>

                <View style={styles.containerImage}>
                    <View style={{ backgroundColor: "blue", flex: 1 }}>
                        <MaterialCommunityIcons
                            name="facebook"
                            style={{ textAlign: "center", padding: 20 }}
                        />
                    </View>
                    <View style={{ backgroundColor: "#fff", flex: 1 }}>
                        <MaterialCommunityIcons
                            name="google"
                            style={{ textAlign: "center", padding: 20 }}
                        />
                    </View>
                    <View style={{ backgroundColor: "cyan", flex: 1 }}>
                        <MaterialCommunityIcons
                            name="twitter"
                            style={{
                                textAlign: "center",
                                padding: 20,
                            }}
                        />
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: "space-around",
    },
    title: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase",
        marginBottom: 20,
    },
    text: {
        textAlign: "center",
    },
    input: {
        width: "100%",
    },
    inputContainer: {
        backgroundColor: "#fff",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    inputPassword: {
        flex: 9,
        fontSize: 22,
        backgroundColor: "#fff",
    },
    press: {
        flex: 1,
    },
    containerImage: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    },
    btnRegister: {
        color: "#fff",
        backgroundColor: "coral",
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
});
