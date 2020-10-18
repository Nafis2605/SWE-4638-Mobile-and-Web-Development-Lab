import React from 'react';
import { Text, StyleSheet, Button, ScrollView, View } from 'react-native';

const Separator = () => {
    return (
        <View style={styles.SeparatorStyle} />
    );
}

const HomeScreen = (props) => {
    return (
        <ScrollView style={styles.ScrollViewStyle} >
            <View style={styles.ViewStyle}>
                <Text style={styles.TextStyle}> First App with React Native </Text>
                <Separator />
                <Button
                    title='University List'
                    onPress={
                        function () {
                            props.navigation.navigate("Flat List")
                            console.log("University List Buttion is clicked!")
                        }
                    }
                />
                <Separator />
                <Button
                    title='Images'
                    onPress={
                        function () {
                            props.navigation.navigate("Images")
                            console.log("Images Buttion is clicked!")
                        }
                    }
                />
                <Separator />
                <Button
                    title='Reuse Images'
                    onPress={
                        function () {
                            props.navigation.navigate("Reuse Images")
                            console.log("Reuse Image Buttion is clicked!")
                        }
                    }
                />
                <Separator />
                <Button
                    title='Async Storage'
                    onPress={
                        function () {
                            props.navigation.navigate("Async Storage")
                            console.log("Async Storage Buttion is clicked!")
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
        SeparatorStyle: {
            marginVertical: 5
        }
    }
);
export default HomeScreen;

