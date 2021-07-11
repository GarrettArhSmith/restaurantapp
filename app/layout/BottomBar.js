import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Button from "./Button";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

export default function BottomBar(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Button>
                <IoniconsIcon name="home" size={30} color="#FE554A" />
            </Button>
            <Button>
                <IoniconsIcon name="heart-outline" size={30} color="#aaa" />
            </Button>
            <Button gradient style={{ top: -25 }}>
                <AntDesignIcon name="search1" size={30} color="white" />
            </Button>
            <Button>
                <IoniconsIcon
                    name="notifications-outline"
                    size={30}
                    color="#aaa"
                />
            </Button>
            <Button>
                <IoniconsIcon name="cart-outline" size={30} color="#aaa" />
            </Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        height: 80,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
});
