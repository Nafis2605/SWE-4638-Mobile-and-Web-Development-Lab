import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, FlatList, ActivityIndicator } from 'react-native';
import { Card, Button, Text, Avatar, Input, Header } from "react-native-elements";
import { useNetInfo } from "@react-native-community/netinfo";

import { AntDesign, Entypo } from "@expo/vector-icons";
import { AuthContext } from "../providers/AuthProvider";
import PostCard from "./../components/PostCard";
import HeaderHome from "../components/HeaderHome";
import { getPosts } from "./../requests/Posts";
import { getUsers } from "./../requests/Users";

const Separator = () => {
    return (
        <View style={styles.SeparatorStyle} />
    );
}
const HomeScreen = (props) => {

    const netInfo = useNetInfo();
    if (netInfo.type != "unknown" && !(netInfo.isInternetReachable)) {
        alert("No Internet!")
    }

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);



    const loadPosts = async () => {
        setLoading(true)
        const response = await getPosts();
        if (response.ok) {
            setPosts(response.data)
        }
        else {
            alert(response.problem);
        }
    };

    const loadUsers = async () => {
        const response = await getUsers();
        if (response.ok) {
            setUsers(response.data)
        }
        else {
            alert(response.problem);
        }
        setLoading(false)
    };
    const getName = (id) => {
        let name = "";
        users.forEach((element) => {
            if (element.id == id) {
                name = element.name;
            }
        });
        return name;
    };

    useEffect(() => {
        loadPosts();
        loadUsers();
    }, []);

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

                            <ActivityIndicator
                                size="large"
                                color="dodgerblue"
                                animating={loading}
                            />

                            <FlatList
                                data={posts}
                                showsVerticalScrollIndicator={false}
                                renderItem={
                                    ({ item }) => {
                                        return (
                                            <PostCard
                                                author={getName(item.userId)}
                                                title={item.title}
                                                body={item.body}
                                            />
                                        )
                                    }
                                }
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