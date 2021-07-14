import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, StyleSheet, Text, SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import Menu from "./app/Screens/Menu";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <SafeAreaView style={styles.container}>
                    <Menu />
                </SafeAreaView>
            </NavigationContainer>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
