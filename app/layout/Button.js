import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Button({ children, gradient, style = {} }) {
    return (
        <TouchableHighlight
            style={[styles.touchable, style]}
            activeOpacity={0.6}
            underlayColor="#ffffff"
            onPress={() => console.log(children.props.name)}
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
        borderRadius: 50,
    },
    button: {
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5, //android only. needs shadow effect if ever on ios
    },
});
