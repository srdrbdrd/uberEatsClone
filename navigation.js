import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home"
import RestaurantDetail from "./src/screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./src/redux/store";
import OrderCompleted from "./src/screens/OrderCompleted";

const store = configureStore();

const RootNavigation = () => {

    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,

    }

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
}


export default RootNavigation;