import React from 'react';
import { Text, StyleSheet, Button, ScrollView, View } from 'react-native';

const Separator = () => {
    return (
        <View style={styles.SeparatorStyle} />
    );
}
const HomeScreen = () => {
    return (
        <ScrollView style={styles.ScrollViewStyle}>
            <View style={styles.ViewStyle}>
                <Text style={styles.TextStyle}>Home Screen</Text>
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