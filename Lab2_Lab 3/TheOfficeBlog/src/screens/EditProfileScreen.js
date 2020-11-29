import React, { useState } from "react";
import { View, StyleSheet, } from "react-native";
import { AuthContext } from "../providers/AuthProvider";
import HeaderHome from "../components/HeaderHome";

const EditProfileScreen = (props) => {
    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View style={styles.viewStyle}>
                    <HeaderHome
                        DrawerFunction={() => {
                            props.navigation.toggleDrawer();
                        }}
                    />
                    <Text>Edit Profile Screen</Text>

                </View>
            )}
        </AuthContext.Consumer>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: "blue",
        textAlign: "center",
    },
    viewStyle: {
        flex: 1,
        backgroundColor: "#e2e7fe"
    },
});

export default EditProfileScreen;