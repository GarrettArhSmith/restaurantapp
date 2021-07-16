import React, { useState, useRef } from "react";
import { StyleSheet, Animated, View, TextInput } from "react-native";
import styled from "styled-components";
import { color } from "styled-system";
import theme from "../../theme";
import Button from "./Button";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

const StyledBottomBar = styled(Animated.View)`
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
`;

export default function BottomBar({ navigation }) {
    const [searchToggle, setSearchToggle] = useState(false);
    const searchAnim = useRef(new Animated.Value(80)).current;

    function handleChange(e) {
        console.log(e);
    }

    function handlePress(e) {
        setSearchToggle((prev) => !prev);
        Animated.timing(searchAnim, {
            toValue: !searchToggle ? 150 : 80,
            duration: 250,
            useNativeDriver: false,
        }).start();
    }

    return (
        <StyledBottomBar style={{ height: searchAnim }}>
            <View style={styles.nav}>
                <Button>
                    <IoniconsIcon
                        name="home"
                        size={30}
                        color={theme.colors.primary}
                    />
                </Button>
                <Button>
                    <IoniconsIcon
                        name="heart-outline"
                        size={30}
                        color={theme.colors.darkGray}
                        onPress={() => navigation.navigate("Favorites")}
                    />
                </Button>
                <Button gradient style={{ top: -25 }} onPress={handlePress}>
                    <AntDesignIcon name="search1" size={30} color="white" />
                </Button>
                <Button>
                    <IoniconsIcon
                        name="notifications-outline"
                        size={30}
                        color={theme.colors.darkGray}
                    />
                </Button>
                <Button>
                    <IoniconsIcon
                        name="cart-outline"
                        size={30}
                        color={theme.colors.darkGray}
                    />
                </Button>
            </View>
            <TextInput
                style={styles.input}
                numberOfLines={1}
                onChangeText={handleChange}
                backgroundColor="accent"
            />
        </StyledBottomBar>
    );
}

const styles = StyleSheet.create({
    nav: {
        height: 80,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        borderColor: theme.colors.darkGray,
        borderWidth: 1,
        width: "90%",
        height: 50,
        marginBottom: 30,
        borderRadius: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "white",
    },
});
