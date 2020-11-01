import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Card } from 'react-native-elements'
import { Zocial, MaterialIcons, Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const SignUpScreen = (props) => {
    return (
        <View style={styles.ViewStyle}>
            <Card>
                <Card.Title>Sign Up Free for Auth App! </Card.Title>
                <Card.Divider />
                <Input
                    placeholder="Name"
                    leftIcon={<MaterialIcons name="person-pin" size={24} color="black" />}
                />
                <Input
                    placeholder="Student ID"
                    leftIcon={<AntDesign name="idcard" size={24} color="black" />}
                />
                <Input
                    placeholder="Email Address"
                    leftIcon={<Zocial name="email" size={24} color="black" />}
                />

                <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    leftIcon={<Entypo name="key" size={24} color="black" />}
                />
                <Input
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    leftIcon={<Entypo name="key" size={24} color="black" />}
                />
                <Button
                    icon={<MaterialIcons name="perm-identity" size={24} color="white" />}
                    title="Sign Up"
                    type="solid"
                    onPress={
                        function () {
                            props.navigation.navigate("SignIn")
                            console.log("Sign Up Buttion is clicked!")
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