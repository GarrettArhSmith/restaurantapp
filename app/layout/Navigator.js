import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import theme from "../../theme";
import Button from "../layout/Button";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Navigator({ children, Tab }) {
    const screenOptions = ({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Search") {
                return <AntDesignIcon name="search1" size={30} color="white" />;
            }
            let iconName;
            if (route.name === "Menu") {
                iconName = focused ? "home" : "home-outline";
            }
            if (route.name === "Favorites") {
                iconName = focused ? "heart" : "heart-outline";
            }
            if (route.name === "Notifications") {
                iconName = focused ? "notifications" : "notifications-outline";
            }
            if (route.name === "Cart") {
                iconName = focused ? "cart" : "cart-outline";
            }
            return <IoniconsIcon name={iconName} size={size} color={color} />;
        },
    });

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Menu"
                screenOptions={screenOptions}
                tabBarOptions={{
                    showLabel: false,
                    activeTintColor: theme.colors.primary,
                    inactiveTintColor: theme.colors.darkGray,
                    style: {
                        elevation: 0,
                        height: 80,
                        borderTopWidth: 0,
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 30,
                        position: "absolute",
                    },
                }}
            >
                {children}
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
