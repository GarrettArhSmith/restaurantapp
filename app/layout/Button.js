import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";
import { color } from "styled-system";

export default function Button({ children, gradient, style = {}, onPress }) {
    return (
        <TouchableHighlight
            style={[styles.touchable, style]}
            activeOpacity={0.6}
            underlayColor="#000000"
            onPress={onPress}
            fontColor="accent"
        >
            {gradient ? (
                <LinearGradient
                    colors={["#f9881f", "#ff774c"]}
                    style={styles.button}
                >
                    {children}
                </LinearGradient>
            ) : (
                children
            )}
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    touchable: {
        width: 100,
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        top: -25,
    },
    button: {
        width: 70,
        height: 70,
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        elevation: 5, //android only. needs shadow effect if ever on ios
    },
});
