import React from 'react';
import { Text, StyleSheet, Button, ScrollView, View } from 'react-native';

const SignUpScreen = (props) => {
    return (
        <ScrollView style={styles.ScrollViewStyle}>
            <View style={styles.ViewStyle}>
                <Text style={styles.TextStyle}>Sign Up Screen</Text>
                <Button
                    title="Already Have an Account? Sign In!"
                    onPress={
                        function () {
                            props.navigation.navigate("SignIn")
                            console.log("Sign In Buttion is clicked!")
                        }
                    }
                />
            </View>
        </ScrollView>
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
            margin: 20
        },

        ScrollViewStyle: {
            backgroundColor: "#FFDEAD",
        },
    }
);
export default SignUpScreen;