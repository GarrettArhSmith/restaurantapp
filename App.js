import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, StyleSheet, Text, SafeAreaView, View } from "react-native";
import Menu from "./app/Screens/Menu";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Menu />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
