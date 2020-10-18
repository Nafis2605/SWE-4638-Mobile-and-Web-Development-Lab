import React from 'react';
import { Text, StyleSheet, Button, ScrollView, View } from 'react-native';

const HomeScreen = (props) => {
    return (
        <ScrollView style={styles.ScrollViewStyle} >
            <View style={styles.ViewStyle}>
                <Text style={styles.TextStyle}> First App with React Native </Text>

                <Button
                    title='University List'
                    onPress={
                        function () {
                            props.navigation.navigate("Flat List")
                            console.log("University List Buttion is clicked!")
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
export default HomeScreen;

