import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";

import { AuthContext } from "../providers/AuthProvider";
import HeaderHome from "../components/HeaderHome";


const Separator = () => {
    return (
        <View style={styles.SeparatorStyle} />
    );
}

const ProfileScreen = (props) => {
    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View style={styles.viewStyle}>
                    <HeaderHome
                        DrawerFunction={() => {
                            props.navigation.toggleDrawer();
                        }}
                    />
                    <Separator />
                    <Image
                        style={styles.ImageStyle}
                        source={require("../../assets/profile_photo.jpg")} />
                    <Separator />

                    <Button
                        type="solid"
                        title="Edit Profile"
                        onPress={
                            function () {
                                props.navigation.navigate("EditProfileScreen");
                            }
                        }
                    />
                    <Separator />

                    <Text style={styles.textStyle}>Name: Fahim Arsad Nafis</Text>
                    <Text style={styles.textStyle}>Born On: 26 May, 1998</Text>
                    <Text style={styles.textStyle}>Address: Dhaka</Text>
                    <Text style={styles.textStyle}>Works at: IUT</Text>

                </View>
            )}
        </AuthContext.Consumer>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: "dodgerblue",
        textAlign: "left",
        marginLeft: 20
    },
    viewStyle: {
        flex: 1,
        backgroundColor: "#e2e7fe"
    },
    ImageStyle: {
        height: 200,
        width: 200,
        alignSelf: "center"
    },
    SeparatorStyle: {
        marginVertical: 10
    }
});

export default ProfileScreen;



