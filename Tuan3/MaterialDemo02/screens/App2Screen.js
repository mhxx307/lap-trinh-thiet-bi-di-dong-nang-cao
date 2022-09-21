import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import { Button, TextInput } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App1Screen() {
    const [isChecked, setChecked] = useState(false);
    const [isChecked1, setChecked1] = useState(false);
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
                <Text style={styles.title}>Register</Text>
                <TextInput style={styles.input} placeholder="Name" />
                <TextInput style={styles.input} placeholder="Phone" />
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
                <TextInput style={styles.input} placeholder="Birthday" />
                <View style={styles.containCheckbox}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                    />
                    <Text style={styles.textCheckbox}>Male</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked1}
                        onValueChange={setChecked1}
                        color={isChecked ? "#4630EB" : undefined}
                    />
                    <Text style={styles.textCheckbox}>Female</Text>
                </View>

                <View style={{ width: "100%" }}>
                    <Button styles={styles.btnRegister} title="Register" />
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
        border: "none",
        padding: 0,
    },
    containCheckbox: {
        flexDirection: "row",
    },
    checkbox: {
        margin: 8,
    },
    textCheckbox: {
        color: "#fff",
        alignSelf: "center",
    },
    btnRegister: {
        color: "#fff",
        backgroundColor: "#E3C000",
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
});
