import React from 'react';
import { Text, StyleSheet, Button, ScrollView, Image, View, TouchableOpacity, SafeAreaView } from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
);

const HomeScreen = (props) => {
    return (
        <ScrollView style={styles.ScrollViewStyle}>
            <SafeAreaView style={styles.SafeAreaViewStyle}>

                <Image
                    style={styles.ImageStyle}
                    source={
                        require("../../assets/Images/IUT_Logo.png")}
                />
                <Text style={styles.TextStyle}> Department of CSE</Text>
                <Text style={styles.TextStyle}> Programme: SWE</Text>

                <Separator />
                <TouchableOpacity
                    onPress={
                        function () {
                            props.navigation.navigate("Profile");
                            console.log("Profile was clicked");
                        }
                    }
                >
                    <Text style={styles.ProfileStyle}> Profile </Text>

                </TouchableOpacity>
                <Separator />

                <Button
                    title='Semester Wise Course List'
                    color='#1e847f'
                    onPress={
                        function () {
                            props.navigation.navigate("Semesters");
                            console.log("Semester Button is clicked");
                        }
                    }
                />
                <Separator />
                <Button
                    title='List of Faculty Members'
                    color='#1e847f'
                    onPress={
                        function () {
                            props.navigation.navigate("Faculty List");
                            console.log("Faculty Button is clicked");
                        }
                    }
                />
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        ScrollViewStyle: {
            backgroundColor: '#c6d7eb',
        },

        TextStyle: {
            fontSize: 30,
            color: '#1e3d59',
            textAlign: "center",
        },
        ImageStyle: {
            alignSelf: "center",
            height: 340,
            width: 200,
        },
        ProfileStyle: {
            fontSize: 40,
            color: '#ff6e40',
            textAlign: "center",
            borderColor: '#1e3d59',
            borderRadius: 5,
            borderWidth: 5,
            fontWeight: "bold",
            paddingTop: 5
        },
        SafeAreaViewStyle: {
            margin: 20,
        },
        separator: {
            marginVertical: 10,
        },
    }
)

export default HomeScreen;