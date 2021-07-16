import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Navigator from "./app/layout/Navigator";

import { ThemeProvider } from "styled-components";
import theme from "./theme";

import Menu from "./app/Screens/Menu";
import Favorites from "./app/Screens/Favorites";
import Search from "./app/Screens/Search";
import Notifications from "./app/Screens/Notifications";
import Cart from "./app/Screens/Cart";

import Button from "./app/layout/Button";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Navigator Tab={Tab}>
                <Tab.Screen name="Menu" component={Menu} />
                <Tab.Screen name="Favorites" component={Favorites} />
                <Tab.Screen
                    name="Search"
                    component={Search}
                    options={{
                        tabBarButton: (props) => <Button gradient {...props} />,
                        style: { width: 70, height: 70 },
                    }}
                />
                <Tab.Screen name="Notifications" component={Notifications} />
                <Tab.Screen name="Cart" component={Cart} />
            </Navigator>
        </ThemeProvider>
    );
}
