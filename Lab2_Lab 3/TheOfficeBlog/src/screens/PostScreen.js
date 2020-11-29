import React, { useState } from "react";
import { View, StyleSheet, } from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import HeaderHome from "../components/HeaderHome";
import PostCard from "./../components/PostCard";

const PostScreen = (props) => {
    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View style={styles.viewStyle}>
                    <HeaderHome
                        DrawerFunction={() => {
                            props.navigation.toggleDrawer();
                        }}
                    />

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <PostCard
                            author="Fahim Arsad Nafis"
                            title="My First Post"
                            body="Hello World!"
                        />
                    </View>

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

export default PostScreen;