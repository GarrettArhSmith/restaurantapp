import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";
import { color } from "styled-system";

const StyledButton = styled.TouchableHighlight`
    border-radius: 50px;
`;

export default function Button({ children, gradient, style = {}, onPress }) {
    return (
        <StyledButton
            style={[style]}
            activeOpacity={0.6}
            underlayColor="#ffffff"
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
        </StyledButton>
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
