import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen.js";
import App1Screen from "./screens/App1Screen.js";
import App2Screen from "./screens/App2Screen.js";
import App3Screen from "./screens/App3Screen.js";
import Lab_03_a from "./screens/Lab_03_a.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="App1" component={App1Screen} />
                <Stack.Screen name="App2" component={App2Screen} />
                <Stack.Screen name="App3" component={App3Screen} />
                <Stack.Screen name="Lab3a" component={Lab_03_a} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
