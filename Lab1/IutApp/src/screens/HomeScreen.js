import React from 'react';
import { Text, StyleSheet, Button, ScrollView, Image, View } from 'react-native';


const HomeScreen = () => {
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




            <Text style={styles.TextStyle}> Profile </Text>

            <Button
                title='Semester Wise Course List'
                color='#1e847f'
                onPress={
                    function () {
                        console.log("Semester Button is clicked");
                    }
                }
            />

            <Button
                title='List of Faculty Members'
                color='#1e847f'
                onPress={
                    function () {
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
    }
)

export default HomeScreen;