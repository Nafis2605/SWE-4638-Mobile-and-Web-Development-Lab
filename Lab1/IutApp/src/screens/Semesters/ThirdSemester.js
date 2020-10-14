import React from 'react';
import { Text, StyleSheet, Button, ScrollView, View, FlatList } from 'react-native';

const ThirdSemester = () => {
    const third_semester = [
        { CourseNumber: "Math 4341", CourseName: "Linear Algebra", key: "1" },
        { CourseNumber: "CSE 4303", CourseName: "Data Structures", key: "2" },
        { CourseNumber: "CSE 4305", CourseName: "Computer Organization and Architecture", key: "3" },
        { CourseNumber: "CSE 4307", CourseName: "Database Management System", key: "4" },
        { CourseNumber: "CSE 4309", CourseName: "Theory of Computing", key: "5" },
        { CourseNumber: "SWE 4301", CourseName: "Object Oriented Concepts II", key: "6" },
    ];
    return (
        //<ScrollView style={styles.ScrollViewStyle}>

        <FlatList
            style={styles.FlatListStyle}
            showsVerticalScrollIndicator={false}
            data={third_semester}
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

export default ThirdSemester;