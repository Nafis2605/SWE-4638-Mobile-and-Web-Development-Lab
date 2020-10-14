import React from 'react';
import { Text, StyleSheet, Button, ScrollView, View, FlatList } from 'react-native';

const FirstSemester = () => {
    const first_semester = [
        { CourseNumber: "Hum 4145", CourseName: "Islamiat", key: "1" },
        { CourseNumber: "Hum 4147", CourseName: "Technology, Environment and Society", key: "2" },
        { CourseNumber: "Math 4141", CourseName: "Geometry and Differential Calculus", key: "3" },
        { CourseNumber: "Phy 4143", CourseName: "Physics II", key: "4" },
        { CourseNumber: "CSE 4107", CourseName: "Structured Programming I", key: "5" },
        { CourseNumber: "SWE 4101", CourseName: "Introduction to Software Engineering", key: "6" },
    ];
    return (
        //<ScrollView style={styles.ScrollViewStyle}>

        <FlatList
            style={styles.FlatListStyle}
            showsVerticalScrollIndicator={false}
            data={first_semester}
            renderItem={
                function ({ item }) {
                    return (
                        <Text style={styles.TextStyle}>{item.key}.  {item.CourseNumber}:  {item.CourseName}</Text>
                    )
                }
            }
        />
        //</ScrollView>
    )
}
const styles = StyleSheet.create(
    {
        /*ScrollViewStyle: {
            backgroundColor: '#c6d7eb',
        },*/

        TextStyle: {
            fontSize: 15,
            color: '#1e3d59',
            textAlign: "left",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,

        },
        FlatListStyle: {
            textAlign: 'left',
            backgroundColor: '#c6d7eb',
        }
    }
)

export default FirstSemester;