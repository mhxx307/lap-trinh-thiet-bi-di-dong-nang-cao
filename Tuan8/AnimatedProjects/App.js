import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Bai1, Bai2, Bai3, Bai4, Bai5, Bai6, Bai7, Home } from "./screens";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Bai1" component={Bai1} />
                <Stack.Screen name="Bai2" component={Bai2} />
                <Stack.Screen name="Bai3" component={Bai3} />
                <Stack.Screen name="Bai4" component={Bai4} />
                <Stack.Screen name="Bai5" component={Bai5} />
                <Stack.Screen name="Bai6" component={Bai6} />
                <Stack.Screen name="Bai7" component={Bai7} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
