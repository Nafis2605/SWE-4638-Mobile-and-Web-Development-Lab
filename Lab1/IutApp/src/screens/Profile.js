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
        <ScrollView style={styles.ScrollViewStyle}>
            <View style={styles.ViewStyle}>

                <Image
                    style={styles.ImageStyle}
                    source={require("../../assets/Images/ProfilePicture.jpg")}
                />
            </View>

            <View style={styles.ViewStyle}>
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
        </ScrollView >
    )
}

const styles = StyleSheet.create(
    {
        ScrollViewStyle: {
            backgroundColor: '#c6d7eb',
        },
        TextStyle: {
            fontSize: 15,
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
            borderWidth: 4
        },
        FlatListStyle: {
            textAlign: 'left',
            backgroundColor: '#c6d7eb',
        }
    }
)

export default Profile;