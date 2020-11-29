import React, { useState } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import HeaderHome from "../components/HeaderHome";
import HeaderHome from "../components/NotificationCard";

const NotificationScreen = (props) => {
    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View style={styles.viewStyle}>
                    <HeaderHome
                        DrawerFunction={() => {
                            props.navigation.toggleDrawer();
                        }}
                    />

                    <NotificationCard
                        author="Fahim Arsad Nafis"
                    />
                </View>
            )}
        </AuthContext.Consumer>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: "blue",
    },
    viewStyle: {
        flex: 1,
        backgroundColor: "#e2e7fe"
    },
});

export default NotificationScreen;