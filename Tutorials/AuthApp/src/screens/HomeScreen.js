import React from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import { Button } from "react-native-elements";

import { AuthContext } from '../providers/AuthProvider'


const Separator = () => {
    return (
        <View style={styles.SeparatorStyle} />
    );
}
const HomeScreen = () => {
    return (
        <AuthContext.Consumer>
            {
                (auth) =>
                    (
                        <ScrollView style={styles.ScrollViewStyle}>
                            <View style={styles.ViewStyle}>
                                <Text style={styles.TextStyle}>Home Screen</Text>
                                <Button
                                    type="outline"
                                    title="Log Out"
                                    onPress={
                                        function () {
                                            auth.setIsLoggedIn(false);
                                        }
                                    }

                                />
                            </View>
                        </ScrollView>
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
            margin: 20
        },

        ScrollViewStyle: {
            backgroundColor: "#FFDEAD",
        },
        SeparatorStyle: {
            marginVertical: 5
        }
    }
);
export default HomeScreen;