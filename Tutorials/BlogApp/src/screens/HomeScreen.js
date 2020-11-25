import React from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import { Card, Button, Text, Avatar, Input } from "react-native-elements";

import { AntDesign, Entypo } from "@expo/vector-icons";
import { AuthContext } from "../providers/AuthProvider";


const HomeScreen = (props) => {
    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View style={styles.viewStyle}>
                    <Card>
                        <Input
                            placeholder="What's On Your Mind?"
                            leftIcon={<Entypo name="pencil" size={24} color="black" />}
                            onChangeText={(currentText) => {
                                setInput(currentText);
                            }}
                        />
                        <Button
                            title="Post"
                            type="outline"
                            onPress={function () {
                                setLoading(true);
                                firebase
                                    .firestore()
                                    .collection("posts")
                                    .add({
                                        userId: auth.CurrentUser.uid,
                                        body: input,
                                        author: auth.CurrentUser.displayName,
                                        created_at: firebase.firestore.Timestamp.now(),
                                        likes: [],
                                        comments: [],
                                    })
                                    .then(() => {
                                        setLoading(false);
                                        alert("Post created Successfully!");
                                    })
                                    .catch((error) => {
                                        setLoading(false);
                                        alert(error);
                                    });
                            }}
                        />
                    </Card>
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
    },
});

export default HomeScreen;