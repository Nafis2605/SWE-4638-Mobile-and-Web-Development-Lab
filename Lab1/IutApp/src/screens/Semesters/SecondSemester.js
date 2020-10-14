import React from 'react';
import { Text, StyleSheet, Button, ScrollView, View, FlatList } from 'react-native';

const SecondSemester = () => {
    const second_semester = [
        { CourseNumber: "Hum 4247", CourseName: "Accounting", key: "1" },
        { CourseNumber: "Hum 4249", CourseName: "Business Psychology and Communications", key: "2" },
        { CourseNumber: "Math 4241", CourseName: "Integral Calculus and Differential Equations", key: "3" },
        { CourseNumber: "CSE 4203", CourseName: "Discrete Mathematics", key: "4" },
        { CourseNumber: "CSE 4205", CourseName: "Digital Logic Design", key: "5" },
        { CourseNumber: "SWE 4201", CourseName: "Object Oriented Concepts I", key: "6" },
    ];
    return (
        //<ScrollView style={styles.ScrollViewStyle}>

        <FlatList
            style={styles.FlatListStyle}
            showsVerticalScrollIndicator={false}
            data={second_semester}
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

export default SecondSemester;