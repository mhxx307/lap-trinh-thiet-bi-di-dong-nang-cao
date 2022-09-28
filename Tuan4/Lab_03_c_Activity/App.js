import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homeScreen from "./screen/HomeScreen.js";
import chooseProductScreen from "./screen/ChooseProductScreen.js";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={homeScreen} />
                <Stack.Screen
                    name="chooseProductScreen"
                    component={chooseProductScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
