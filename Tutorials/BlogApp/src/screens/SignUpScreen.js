import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Card } from 'react-native-elements'
import { Zocial, MaterialIcons, Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import * as firebase from "firebase"
const SignUpScreen = (props) => {
    const [Name, setName] = useState("");
    const [Sid, setSID] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    return (
        <View style={styles.ViewStyle}>
            <Card>
                <Card.Title>Sign Up Free for Blog App! </Card.Title>
                <Card.Divider />
                <Input
                    placeholder="Name"
                    leftIcon={<MaterialIcons name="person-pin" size={24} color="black" />}
                    onChangeText={
                        function (currentInput) {
                            setName(currentInput);
                        }
                    }
                />
                <Input
                    placeholder="Student ID"
                    leftIcon={<AntDesign name="idcard" size={24} color="black" />}
                    onChangeText={
                        function (currentInput) {
                            setSID(currentInput);
                        }
                    }
                />
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
                    title="Sign Up"
                    type="solid"
                    onPress={() => {
                        if (Name && Sid && Email && Password) {
                            firebase.auth().createUserWithEmailAndPassword(Email, Password)
                                .then((userCreds) => {
                                    userCreds.user.updateProfile({ displayName: Name });
                                    firebase.database().
                                        ref().
                                        child('/users').
                                        child(userCreds.user.uid).
                                        set({
                                            name: Name,
                                            sid: Sid,
                                            email: Email
                                        })
                                        .then(() => {
                                            alert("Account Created Successfully!")
                                            console.log(userCreds.user)
                                            props.navigation.navigate("SignIn")
                                        })
                                        .catch((error) => {
                                            alert(error);
                                        }
                                        );
                                })
                                .catch((error) => {
                                    alert(error)
                                }
                                )

                        }
                        else {
                            alert("Field can not be empty!")
                        }
                    }
                    }
                />
                <Card.Divider />
                <Button
                    icon={<MaterialCommunityIcons name="location-enter" size={24} color="dodgerblue" />}
                    title="Already have an account? Sign In!"
                    type="clear"
                    onPress={
                        function () {
                            props.navigation.navigate("SignIn")
                            console.log("Sign In Buttion is clicked!")
                        }
                    }
                />
            </Card>
        </View>
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
export default SignUpScreen;