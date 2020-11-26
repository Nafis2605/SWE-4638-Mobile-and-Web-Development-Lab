import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
import { Input, Button, Card } from 'react-native-elements'
import { Zocial, MaterialIcons, Entypo } from '@expo/vector-icons';

import { AuthContext } from '../providers/AuthProvider'
import { getData } from '../functions/AsyncStorageFunctions'

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
                                <Card.Title>Welcome to the Office App! </Card.Title>
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
                                    onPress={
                                        async function () {
                                            let userData = await getData(Email);
                                            if (userData.password == Password) {
                                                auth.setIsLoggedIn(true);
                                                auth.setCurrentUser(userData);
                                            }
                                            else {
                                                alert("Sign in Failed!");
                                                console.log(userData);
                                            }
                                            console.log("Sign In Buttion is clicked!")
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