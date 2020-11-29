import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
import { Input, Button, Card } from 'react-native-elements'
import { Zocial, MaterialIcons, Entypo } from '@expo/vector-icons';

import { AuthContext } from '../providers/AuthProvider'
import * as firebase from "firebase"

const SignInScreen = (props) => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    return (
        <AuthContext.Consumer>
            {
                (auth) =>
                    (
                        <View style={styles.ViewStyle}>
                            <Card>
                                <Card.Title>Welcome to Blog App </Card.Title>
                                <Card.Divider />
                                <Input
                                    placeholder="Email Address"
                                    leftIcon={<Zocial name="email" size={24} color="black" />}
                                    onChangeText={
                                        function (currentInput) {
                                            setEmail(currentInput);
                                        }
                                    }
                                />
                                <Input
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    leftIcon={<Entypo name="key" size={24} color="black" />}
                                    onChangeText={
                                        function (currentInput) {
                                            setPassword(currentInput);
                                        }
                                    }
                                />
                                <Button
                                    icon={<MaterialIcons name="perm-identity" size={24} color="white" />}
                                    title="Sign In"
                                    type="solid"
                                    onPress={() => {
                                        firebase.auth().signInWithEmailAndPassword(Email, Password)
                                            .then(
                                                (userCreds) => {
                                                    auth.setIsLoggedIn(true)
                                                    auth.setCurrentUser(userCreds.user)
                                                }
                                            )
                                            .catch((error) => {
                                                alert(error)
                                            })
                                    }
                                    }
                                />
                                <Card.Divider />
                                <Button
                                    icon={<Entypo name="emoji-sad" size={24} color="dodgerblue" />}
                                    title="Don't have an account? Sign Up!"
                                    type="clear"
                                    onPress={
                                        function () {
                                            props.navigation.navigate("SignUp")
                                            console.log("Sign Up Buttion is clicked!")
                                        }
                                    }
                                />
                            </Card>
                        </View>
                    )
            }
        </AuthContext.Consumer >
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
            justifyContent: "center",
            backgroundColor: "rgb(92, 200, 215)"
        },
    }
);
export default SignInScreen;