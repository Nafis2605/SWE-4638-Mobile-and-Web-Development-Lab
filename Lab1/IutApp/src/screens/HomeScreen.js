import React from 'react';
import { Text, StyleSheet, Button, ScrollView, Image, View, TouchableOpacity } from 'react-native';


const HomeScreen = (props) => {
    return (
        <ScrollView style={styles.ScrollViewStyle}>

            <View>

                <Image
                    style={styles.ImageStyle}
                    source={
                        require("../../assets/Images/IUT_Logo.png")}
                />

            </View>

            <Text style={styles.TextStyle}> Department of CSE</Text>
            <Text style={styles.TextStyle}> Programme: SWE</Text>


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
    }
)

export default HomeScreen;