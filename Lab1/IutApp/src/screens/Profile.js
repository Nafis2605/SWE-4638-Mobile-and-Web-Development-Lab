import React from 'react';
import { Text, StyleSheet, ScrollView, Image, View, FlatList } from 'react-native';

const Profile = () => {
    const profile = [
        { value: "Fahim Arsad Nafis", key: "Name" },
        { value: "170042004", key: "Student ID" },
        { value: "Dhaka", key: "City" },
        { value: "fahimarsad@iut-dhaka.edu", key: "Email" },

    ];
    return (

        <View style={styles.ViewStyle}>

            <Image
                style={styles.ImageStyle}
                source={require("../../assets/Images/ProfilePicture.jpg")}
            />

            <FlatList
                style={styles.FlatListStyle}
                showsVerticalScrollIndicator={false}
                data={profile}
                renderItem={
                    function ({ item }) {
                        return (
                            <Text style={styles.TextStyle}>{item.key}: {item.value}</Text>
                        )
                    }
                }
            />
        </View>

    )
}

const styles = StyleSheet.create(
    {
        ViewStyle: {
            backgroundColor: '#c6d7eb',
            //margin: 30,
            flex: 1,
        },
        TextStyle: {
            fontSize: 20,
            color: '#1e3d59',
            textAlign: "left",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
        },
        ImageStyle: {
            alignSelf: "center",
            height: 280,
            width: 330,
            borderColor: '#f47a60',
            borderWidth: 4,
            margin: 30
        },
        FlatListStyle: {
            textAlign: 'left',
            margin: 30
        }
    }
)

export default Profile;