import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, } from 'react-native';
import { Card, Button, Text, Avatar, Input, Header } from "react-native-elements";

import { AntDesign, Entypo } from "@expo/vector-icons";
import { AuthContext } from "../providers/AuthProvider";
import PostCard from "./../components/PostCard";
import HeaderHome from "../components/HeaderHome";
import { storeData, getData, removeData, getPostID, getPosts } from "../functions/AsyncStorageFunctions"


const Separator = () => {
    return (
        <View style={styles.SeparatorStyle} />
    );
}
const HomeScreen = (props) => {
    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);



    return (
        <AuthContext.Consumer>
            {
                (auth) =>
                    (
                        <View style={styles.ViewStyle}>
                            <HeaderHome
                                DrawerFunction={() => {
                                    props.navigation.toggleDrawer();
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
                            <PostCard
                                author="Fahim Arsad Nafis"
                                title="My First Post"
                                body="Hello World!"
                                ShowPostScreen={() => {
                                    props.navigation.navigate("PostScreen");
                                }}
                            />
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