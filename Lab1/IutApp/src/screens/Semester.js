import React from 'react';
import { Text, StyleSheet, Button, ScrollView, View } from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
);

const Semester = (props) => {
    return (
        <ScrollView style={styles.ScrollViewStyle}>
            <View style={styles.ViewStyle} >
                <Button
                    title='1st Semester'
                    color='#1e847f'
                    onPress={
                        function () {
                            props.navigation.navigate("First Semester");
                            console.log("1st Semester Button is clicked");
                        }
                    }
                />
                <Separator />

                <Button
                    title='2nd Semester'
                    color='#1e847f'
                    onPress={
                        function () {
                            props.navigation.navigate("Second Semester");
                            console.log("2nd Semester Button is clicked");
                        }
                    }
                />
                <Separator />
                <Button
                    title='3rd Semester'
                    color='#1e847f'
                    onPress={
                        function () {
                            props.navigation.navigate("Third Semester");
                            console.log("3rd Semester Button is clicked");
                        }
                    }
                />
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create(
    {
        ScrollViewStyle: {
            backgroundColor: '#c6d7eb',
        },
        ViewStyle: {
            margin: 20,
            marginTop: 40,

        },
        TextStyle: {
            fontSize: 20,
            color: '#1e3d59',
            textAlign: "center",
        },
        separator: {
            marginVertical: 10,
        },

    }
)

export default Semester;