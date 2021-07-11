import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import BottomBar from "../layout/BottomBar";

export default function Menu(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View></View>
            <BottomBar />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: "#f7f7fb",
    },
});
