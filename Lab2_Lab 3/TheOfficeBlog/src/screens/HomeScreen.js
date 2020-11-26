import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Card, Button, Text, Avatar, Input, Header } from "react-native-elements";

import { AntDesign, Entypo } from "@expo/vector-icons";
import { AuthContext } from "../providers/AuthProvider";


const Separator = () => {
    return (
        <View style={styles.SeparatorStyle} />
    );
}
const HomeScreen = (props) => {
    return (
        <AuthContext.Consumer>
            {
                (auth) =>
                    (
                        <View style={styles.ViewStyle}>
                            <Header
                                leftComponent={{
                                    icon: "menu",
                                    color: "#fff",
                                    onPress: function () {
                                        props.navigation.toggleDrawer();
                                    }
                                }}
                                centerComponent={
                                    { text: "Blog App", style: { color: "#fff" } }
                                }
                                rightComponent={
                                    {
                                        icon: "lock-outline",
                                        color: "#fff",
                                        onPress: function () {
                                            auth.setIsLoggedIn(false);
                                            auth.setCurrentUser({});
                                        }
                                    }}
                            />
                            <Card>
                                <Input
                                    placeholder="What's On Your Mind?"
                                    leftIcon={<Entypo name="pencil" size={24} color="black" />}
                                    multiline={true}
                                />
                                <Button title="Post"
                                    type="outline"
                                    onPress=
                                    {
                                        function () {
                                            console.log("Post Button is Clicked!")
                                        }}
                                />
                            </Card>

                            <Card>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <Avatar
                                        containerStyle={{ backgroundColor: "#ffab91" }}
                                        rounded
                                        icon={{ name: "user", type: "font-awesome", color: "black" }}
                                        activeOpacity={1}
                                    />
                                    <Text h4Style={{ padding: 10 }} h4>
                                        Fahim Arsad Nafis</Text>
                                </View>
                                <Text style={{ fontStyle: "italic" }}> Hello World!</Text>
                                <Text
                                    style={{
                                        paddingVertical: 10,
                                    }}
                                >
                                    This is my first post!</Text>
                                <Card.Divider />
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Button
                                        type="outline"
                                        title="  Like (17)"
                                        icon={<AntDesign name="like2" size={24} color="dodgerblue" />}
                                    />
                                    <Button type="solid" title="Comment (10)" />
                                </View>
                            </Card>
                        </View>
                    )
            }
        </AuthContext.Consumer>
    )
}
const styles = StyleSheet.create(
    {
        TextStyle: {
            fontSize: 25,
            color: "#9C27B0",
            textAlign: "center",
        },
        ViewStyle: {
            flex: 1,
            backgroundColor: "#e2e7fe"
        },

        SeparatorStyle: {
            marginVertical: 5
        }
    }
);
export default HomeScreen; 